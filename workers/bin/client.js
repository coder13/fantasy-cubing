"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(process.argv);
const command = process.argv[2];
const paramValue = process.argv[3];
const resultsWorker_1 = require("../resultsWorker");
if (command === 'results' && paramValue) {
    const resultsQueue = (0, resultsWorker_1.createQueue)({
        isWorker: false
    });
    resultsQueue.createJob({ competitionId: paramValue }).timeout(10000).retries(2).save().then((job) => {
        console.log('Job created', job.id);
        resultsQueue.destroy();
    }).catch((e) => {
        console.error('Error creating job', e);
    });
}
