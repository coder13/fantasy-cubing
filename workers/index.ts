import dotenv from "dotenv";
dotenv.config({
  path: "../.env",
});

/**
 * This worker script imports data from various apis and stores it in the database.
 * It is run on a schedule using the node-cron package.
 * Every 15 minutes, it looks at the ongoing competitions and fetches results from these comps from wca live and upserts into the database.
 * Once a day, it fetches all upcoming competitions from the wca api and imports them into the database.
 * Once a day, it looks at the competitions in the past 7 days and fetches results from these comps from the wca api and upserts into the database.
 */

console.log(process.env.DATABASE_URL);

// import cron from 'node-cron';
import { fetchFromApi, updateWcaLiveIds } from "./results";


// cron.schedule('* * * * *', () => {
//   console.log('running a task every minute');
// });

updateWcaLiveIds();
// fetchFromApi('SleeplessinSeattle2023').then(() => console.log('wcif imported'));
