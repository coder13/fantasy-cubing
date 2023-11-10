import BeeQueue from 'bee-queue';
import { prisma, redisClient } from './shared';
import { WcaLive, WcaLiveApi, currentWeek, currentYear } from 'shared';
import { fetchAndUpsertComp } from './competitions';

type RoundTypeId = '1' | '2' | '3' | 'c' | 'd' | 'e' | 'f';
function roundTypeIdFromRound(round: WcaLive.Round): RoundTypeId | undefined {
  switch (round.name) {
    case 'Final':
      return round.cutoff ? 'c' : 'f';
    case 'First Round':
      return round.cutoff ? 'd' : '1';
    case 'Second Round':
      return round.cutoff ? 'e' : '2';
    case 'Third Round':
      return '3';
    default:
      throw new Error('Unknown round name: ' + round.name);
  }
}

type params = {
  competitionId: string;
};

export const createQueue = (options: BeeQueue.QueueSettings = {}) => {
  return new BeeQueue<params>('wcaLiveResults', {
    redis: redisClient,
    ...options,
  });
};

async function fetchFromWcaLive(competitionId: string) {
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

  const wcaLive = await prisma.wcaLiveCompetition.findFirst({
    where: {
      wcaId: competitionId,
    },
  });

  if (!wcaLive) {
    // XXX: perhaps create a job to fetch the wca live ids?
    return;
  }

  const results = await new WcaLiveApi({
    baseURL: process.env.WCA_LIVE_ORIGIN,
  }).results(wcaLive.wcaLiveId.toString());

  if (results.errors) {
    console.error(results.errors);
    return;
  }

  if (!results?.data?.competition) {
    console.log('No results found for ' + competitionId);
    return;
  }

  const trans = await prisma.$transaction([
    ...results.data.competition.events
      .flatMap((event) =>
        event.rounds.flatMap((round) => {
          const roundTypeId = roundTypeIdFromRound(round);
          if (!results || !roundTypeId) {
            return;
          }

          const filteredResults = round.results
            ?.filter((result) => !!result && result.person.wcaId)
            .filter(Boolean);

          return filteredResults.map((result) => {
            const resultUpdatingCommon = {
              pos: result.pos,
              best: result.best || 0,
              average: result.average || 0,
              regionalSingleRecord:
                result.singleRecordTag === 'PR'
                  ? ''
                  : result.singleRecordTag?.trim(),
              regionalAverageRecord:
                result.averageRecordTag === 'PR'
                  ? ''
                  : result.averageRecordTag?.trim(),
              attempts: result.attempts.map((attempt) => attempt.result),
            };

            return prisma.result.upsert({
              where: {
                competitionId_eventId_roundTypeId_personId: {
                  competitionId,
                  eventId: event.event.id,
                  roundTypeId,
                  personId: result.person.wcaId,
                },
              },
              update: resultUpdatingCommon,
              create: {
                eventId: event.event.id,
                roundTypeId,
                competition: {
                  connect: {
                    id: competitionId,
                  },
                },
                person: {
                  connectOrCreate: {
                    where: {
                      id: result.person.wcaId,
                    },
                    create: {
                      id: result.person.wcaId,
                      name: result.person.name,
                      countryId: result.person.country.iso2,
                    },
                  },
                },
                ...resultUpdatingCommon,
                personCountryId: result.person.country.iso2,
                date: competition.startDate,
                week: currentWeek(),
                year: currentYear(),
              },
            });
          });
        })
      )
      .filter(Boolean),
    prisma.competition.update({
      where: {
        id: competitionId,
      },
      data: {
        unofficialResultsUpdatedAt: new Date(),
      },
    }),
  ]);

  console.log('Upserted', trans.length - 1, 'results from wca live');
}

export default function startWorker() {
  const resultsQueue = createQueue();

  resultsQueue.on('ready', () => {
    console.log('[WCA Live Results]', 'Queue now ready to start doing things');
  });

  resultsQueue.on('error', (err) => {
    console.error('[WCA Live Results]', 'Error in results queue', err);
  });

  resultsQueue.on('retrying', (job) => {
    console.log('[WCA Live Results]', 'Retrying job', job.id);
  });

  resultsQueue.on('failed', (job, err) => {
    console.error('[WCA Live Results]', 'Job failed', job.id, err);
  });

  resultsQueue.on('stalled', (jobId) => {
    console.log('[WCA Live Results]', 'Job stalled', jobId);
  });

  resultsQueue.on('succeeded', (job) => {
    console.log('[WCA Live Results]', 'Job succeeded', job.id);
  });

  resultsQueue.process(
    async (
      job: BeeQueue.Job<params>,
      done: BeeQueue.DoneCallback<null | Error>
    ) => {
      console.log('[WCA Live Results]', 'Processing job', job.id, job.data);
      if (!job.data.competitionId) {
        throw new Error('Missing competitionId');
      }

      try {
        await fetchFromWcaLive(job.data.competitionId);
        done(null);
      } catch (e) {
        console.log(e);
        throw e;
      }
    }
  );

  return resultsQueue;
}
