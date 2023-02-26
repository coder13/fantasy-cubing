import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import http from 'http';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';
import { json } from 'body-parser';
import morgan from 'morgan';

import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { ApolloServer } from '@apollo/server';

import authRouter from './auth';
import { User } from '@prisma/client';
import graphqlServerConfig from './graphql';
import prisma from './db';
import { WcaApi } from '../shared/graphql/dataSources/WcaApi';
import { KeyvAdapter } from '@apollo/utils.keyvadapter';
import KeyvRedis from '@keyv/redis';
import Keyv from 'keyv';

export interface AppContext {
  user?: User;
  db: typeof prisma;
  wcaApi: WcaApi
}

async function init() {
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

  const httpServer = http.createServer(app);

  const cache = new KeyvAdapter(
    new Keyv("redis://default:eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81@localhost:6379")
  );

  // Same ApolloServer initialization as before, plus the drain plugin
  // for our httpServer.
  const server = new ApolloServer<AppContext>({
    ...graphqlServerConfig,
    cache,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  // Ensure we wait for our server to start
  await server.start();

  app.use(
    '/graphql',
    cors<cors.CorsRequest>({
      origin: ['*', 'https://studio.apollographql.com'],
    }),
    expressMiddleware(server, {
      context: async ({ req }) => ({
        user: req.user,
        db: prisma,
        wcaApi: new WcaApi(server)
      }),
    }),
  );

  // start the Express server
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });
}

init();
