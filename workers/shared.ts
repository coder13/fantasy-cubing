import { KeyvAdapter } from "@apollo/utils.keyvadapter";
import { PrismaClient } from "db";
import Keyv from "keyv";
import { createClient } from "redis";

export const prisma = new PrismaClient();

export const cache = new KeyvAdapter(
  new Keyv(process.env.REDIS_URL)
);

export const redisClient = createClient({
  url: process.env.REDIS_URL,
});
