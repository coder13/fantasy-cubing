import { WcaLiveApi } from "shared";
import { prisma, redisClient } from "./shared";
import BeeQueue from "bee-queue";

export async function updateWcaLiveIds(from?: string) {
  const date = from || new Date().toISOString().split('T')[0];
  console.log('Fetching WCA Live IDs from', date);
  const comps = await new WcaLiveApi({
    baseURL: process.env.WCA_LIVE_ORIGIN,
  }).competitions(date);

  console.log('Importing', comps.data.competitions.length, 'competition wca live IDs');

  const res = await prisma.wcaLiveCompetition.createMany({
    skipDuplicates: true,
    data: comps.data.competitions.map((comp) => ({
      wcaId: comp.wca_id,
      wcaLiveId: Number.parseInt(comp.id, 10),
    })),
  });

  console.log("Imported ", res.count, "wca live ids");
}

export default function start() {
  const wcaLiveQueue = new BeeQueue<any>('wca-live', {
    redis: redisClient
  });

  wcaLiveQueue.on('ready', () => {
    console.log('[WCA Live]', 'Queue now ready to start doing things');
  });

  wcaLiveQueue.on('error', (err) => {
    console.error('[WCA Live]', 'Error in results queue', err);
  });

  wcaLiveQueue.on('retrying', (job) => {
    console.log('[WCA Live]', 'Retrying job', job.id);
  });

  wcaLiveQueue.on('failed', (job, err) => {
    console.error('[WCA Live]', 'Job failed', job.id, err);
  });

  wcaLiveQueue.on('stalled', (jobId) => {
    console.log('[WCA Live]', 'Job stalled', jobId);
  });

  wcaLiveQueue.on('succeeded', (job) => {
    console.log('[WCA Live]', 'Job succeeded', job.id);
  });

  wcaLiveQueue.process(async (job: BeeQueue.Job<any>, done: BeeQueue.DoneCallback<null | Error>) => {
    console.log('Processing job', job.id);
    try {
      await updateWcaLiveIds(job.data.from);
      done(null);
    } catch (e) {
      done(e as Error)
    }
  })
}
