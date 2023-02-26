import { KeyvAdapter } from "@apollo/utils.keyvadapter";
import { PrismaClient } from "db";
import Keyv from "keyv";

export const prisma = new PrismaClient();

export const cache = new KeyvAdapter(
  new Keyv("redis://default:eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81@localhost:6379")
);
