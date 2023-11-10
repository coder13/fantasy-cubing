console.log(process.argv);
const command = process.argv[2];
const paramValue = process.argv[3];

// import Queue from 'bee-queue';
import { createQueue as createResultsQueue } from '../resultsWorker';

if (command === 'results' && paramValue) {
  const resultsQueue = createResultsQueue({
    isWorker: false,
  });

  resultsQueue
    .createJob({ competitionId: paramValue })
    .timeout(10000)
    .retries(2)
    .save()
    .then((job) => {
      console.log('Job created', job.id);
      resultsQueue.destroy();
    })
    .catch((e) => {
      console.error('Error creating job', e);
    });
}
