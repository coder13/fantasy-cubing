import '@total-typescript/ts-reset';

import dotenv from 'dotenv';
dotenv.config({
  path: '../.env',
});

import Arena from 'bull-arena';

/**
 * This worker script imports data from various apis and stores it in the database.
 * It is run on a schedule using the node-cron package.
 * Every 15 minutes, it looks at the ongoing competitions and fetches results from these comps from wca live and upserts into the database.
 * - This is done by looking at the wca live id of the competition and fetching results from wca live.
 * - If the wca live id is not set, it does no fetching.
 * - As data is imported, points are calculated
 * Once a day, it fetches all upcoming competitions from the wca api and imports them into the database.
 * Once a day, it fetches upcoming competitions from wca live and imports their wca live ids into the database.
 * Once a day, it looks at the competitions in the past 7 days and fetches results from these comps from the wca api and upserts into the database.
 * - This should also calculate records for the weeks affected
 */

import BeeQueue from 'bee-queue';
import startResults from './resultsWorker';
import startWcaLive from './wcaLiveWorker';
import startWcaLiveResults from './wcaLiveResultsWorker';
import { redisClient } from './shared';

if (process.env.NODE_ENV !== 'production') {
  Arena({
    Bee: BeeQueue,
    queues: [
      {
        name: 'results',
        hostId: 'results',
        type: 'bee',
        redis: redisClient,
      },
      {
        name: 'wca-live',
        hostId: 'wca-live',
        type: 'bee',
        redis: redisClient,
      },
      {
        name: 'wcaLiveResults',
        hostId: 'wcaLiveResults',
        type: 'bee',
        redis: redisClient,
      },
    ],
  });
}

startResults();
startWcaLive();
startWcaLiveResults();
