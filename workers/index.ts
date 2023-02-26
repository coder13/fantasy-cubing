import dotenv from "dotenv";
dotenv.config({
  path: "../.env",
});

console.log(process.env.DATABASE_URL);

// import cron from 'node-cron';
import { fetchFromApi } from "./results";


// cron.schedule('* * * * *', () => {
//   console.log('running a task every minute');
// });
fetchFromApi('SleeplessinSeattle2023').then(() => console.log('wcif imported'));
