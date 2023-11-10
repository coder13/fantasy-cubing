import { results, wcaLive, wcaLiveResults } from 'workers';

export const resultsQueue = results.createQueue({
  isWorker: false,
});

export const wcaLiveQueue = wcaLive.createQueue({
  isWorker: false,
});

export const wcaLiveResultsQueue = wcaLiveResults.createQueue({
  isWorker: false,
});
