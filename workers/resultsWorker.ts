import { WcaApi, currentWeek, currentYear } from 'shared';
import { cache, prisma, redisClient } from './shared';
import { fetchAndUpsertComp } from './competitions';
import BeeQueue from 'bee-queue';

type params = {
  competitionId: string;
};

export const createQueue = (options: BeeQueue.QueueSettings = {}) => {
  return new BeeQueue<params>('results', {
    redis: redisClient,
    ...options,
  });
};

async function fetchFromApi(competitionId: string) {
  const results = await new WcaApi({
    cache,
    baseURL: process.env.WCA_ORIGIN,
  }).getResults(competitionId);

  const competition =
    (await prisma.competition.findFirst({
      where: {
        id: competitionId,
        cancelled: false,
      },
    })) || (await fetchAndUpsertComp(competitionId));

  if (!competition) {
    return;
  }

  console.log(
    `Found ${results.length} results for ${competitionId} (${competition.name})`
  );

  const trans = await prisma.$transaction([
    ...results.map((result) => {
      const resultUpdatingCommon = {
        pos: result.pos,
        best: result.best,
        average: result.average,
        regionalSingleRecord: result.regional_single_record,
        regionalAverageRecord: result.regional_average_record,
        personCountryId: result.country_iso2,
      };

      return prisma.result.upsert({
        where: {
          competitionId_eventId_roundTypeId_personId: {
            competitionId,
            eventId: result.event_id,
            roundTypeId: result.round_type_id,
            personId: result.wca_id,
          },
        },
        update: resultUpdatingCommon,
        create: {
          eventId: result.event_id,
          roundTypeId: result.round_type_id,
          competition: {
            connect: {
              id: competitionId,
            },
          },
          person: {
            connectOrCreate: {
              where: {
                id: result.wca_id,
              },
              create: {
                id: result.wca_id,
                name: result.name,
                countryId: result.country_iso2,
              },
            },
          },
          ...resultUpdatingCommon,
          date: competition.startDate,
          week: currentWeek(),
          year: currentYear(),
        },
      });
    }),
    prisma.competition.update({
      where: {
        id: competitionId,
      },
      data: {
        officialResultsUpdatedAt: new Date(),
      },
    }),
  ]);

  console.log('Upserted', trans.length - 1, 'results');
}

export default function startWorker() {
  const resultsQueue = createQueue();

  resultsQueue.on('ready', () => {
    console.log('[Results]', 'Queue now ready to start doing things');
  });

  resultsQueue.on('error', (err) => {
    console.error('[Results]', 'Error in results queue', err);
  });

  resultsQueue.on('retrying', (job) => {
    console.log('[Results]', 'Retrying job', job.id);
  });

  resultsQueue.on('failed', (job, err) => {
    console.error('[Results]', 'Job failed', job.id, err);
  });

  resultsQueue.on('stalled', (jobId) => {
    console.log('[Results]', 'Job stalled', jobId);
  });

  resultsQueue.on('succeeded', (job) => {
    console.log('[Results]', 'Job succeeded', job.id);
  });

  resultsQueue.process(
    async (
      job: BeeQueue.Job<params>,
      done: BeeQueue.DoneCallback<null | Error>
    ) => {
      console.log('Processing job', job.id, job.data);
      if (!job.data.competitionId) {
        throw new Error('Missing competitionId');
      }

      try {
        await fetchFromApi(job.data.competitionId);
        done(null);
      } catch (e) {
        console.log(e);
        throw e;
      }
    }
  );

  return resultsQueue;
}
