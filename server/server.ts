import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';
import { json } from 'body-parser';
import morgan from 'morgan';
import authRouter from './auth';

const app = express();
const port = 8080; // default port to listen

app.use(cors<cors.CorsRequest>());
app.use(json());

app.use(cookieParser())

app.use(morgan('tiny'));

const sessionOpts = {
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
};

app.use(expressSession(sessionOpts));

app.use(authRouter)

// define a route handler for the default home page
app.get('/', (_, res) => {
  res.send('Hello world!');
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
