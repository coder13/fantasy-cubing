import cron from 'node-cron';
import { resultsQueue, wcaLiveQueue, wcaLiveResultsQueue } from '../lib/queues';
import prisma from '../lib/db';
import { WcaApi, getToday } from 'shared';
import { fetchAndUpsertManyComps } from 'workers/competitions';
import { wcaLiveResults } from 'workers';
import { redisClient } from '../lib/redis';

const createWcaLiveFetchResultsJob = (competitionId: string) =>
  wcaLiveResultsQueue
    .createJob({ competitionId })
    .timeout(1000 * 60)
    .retries(3)
    .backoff('exponential', 10000);

const createWcaFetchResultsJob = (competitionId: string) =>
  resultsQueue
    .createJob({ competitionId })
    .timeout(1000 * 60)
    .retries(5)
    .backoff('exponential', 20000);

// once every 10 minutes fetch job statuses
cron.schedule('*/10 * * * *', async () => {
  const failedJobs = await wcaLiveResultsQueue.getJobs('failed', {
    start: 0,
  });

  const health = await wcaLiveResultsQueue.checkHealth();

  const newestJob =
    health.newestJob && (await wcaLiveResultsQueue.getJob(health.newestJob));

  console.log({
    newestJob: newestJob ? newestJob?.data : null,
    failed: failedJobs.map((j) => j.data),
    health,
  });
});

export default function startCron() {
  // Cron reference:
  // * * * * * *
  // ┬ ┬ ┬ ┬ ┬ ┬
  // │ │ │ │ │ |
  // │ │ │ │ │ └ day of week (0 - 7) (0 or 7 is Sun)
  // │ │ │ │ └───── month (1 - 12)
  // │ │ │ └────────── day of month (1 - 31)
  // │ │ └─────────────── hour (0 - 23)
  // │ └──────────────────── min (0 - 59)
  // └───────────────────────── sec (0 - 59, OPTIONAL)
  // https://crontab.guru/

  console.log('Starting cron');
  // once a day: fetch all competitions
  // At minute 55 on every day-of-month.
  cron.schedule('55 * */1 * *', async () => {
    console.log(new Date().toLocaleString(), 'Running fetch competitions');
    // TODO: create worker to fetch competitions

    // Fetch all competitions from WCA
    const today = new Date().toISOString().split('T')[0];
    const next4Week = new Date(
      new Date().getTime() + 4 * 7 * 24 * 60 * 60 * 1000
    )
      .toISOString()
      .split('T')[0];

    try {
      const comps = await fetchAndUpsertManyComps(today, next4Week);
      console.log('imported', comps.length, 'competitions');
    } catch (err) {
      console.error('Error importing competitions', err);
    }
  });

  // once a every 6 hours: fetch wca live IDs
  cron.schedule('0 */6 * * *', async () => {
    console.log(
      new Date().toLocaleString(),
      'Running fetch wca live IDs worker'
    );
    wcaLiveQueue
      .createJob({})
      .timeout(1000 * 60)
      .retries(3)
      .backoff('exponential', 10000)
      .save();
  });

  // WCA Live 15 minute fetching queue
  cron.schedule('*/15 * * * *', async () => {
    const today = getToday();

    console.log(new Date().toLocaleString(), 'Running wca-live results worker');

    try {
      const competitions = await prisma.competition.findMany({
        where: {
          startDate: {
            lte: today,
          },
          endDate: {
            gte: today,
          },
          cancelled: false,
        },
      });

      if (!competitions?.length) {
        console.log('No competitions found');
        return;
      }

      const jobs = competitions.map((comp) =>
        createWcaLiveFetchResultsJob(comp.id)
      );

      await wcaLiveResultsQueue.saveAll(jobs);
    } catch (err) {
      console.error('Error fetching results', err);
    }
  });

  // Every 6 hours import from wca
  cron.schedule('23 */1 * * *', async () => {
    console.log(new Date().toLocaleString(), 'Running official results worker');

    try {
      // Get all competitions that are not cancelled, have ended, and have not been importing their results for a week
      const competitions = await prisma.competition.findMany({
        where: {
          endDate: {
            lte: getToday(),
          },
          OR: [
            {
              officialResultsUpdatedAt: {
                lte: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
              },
            },
            {
              officialResultsUpdatedAt: null,
            },
          ],
        },
      });

      if (!competitions?.length) {
        console.log('No competitions found');
        return;
      }

      const jobs = competitions.map((comp) =>
        createWcaFetchResultsJob(comp.id)
      );

      await wcaLiveResultsQueue.saveAll(jobs);
    } catch (err) {
      console.error('Error fetching results', err);
    }
  });
}
