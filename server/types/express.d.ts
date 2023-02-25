import { User } from './prisma/generated/client';

declare module 'express-session' {
  interface SessionData {
    userId?: number;
  }
}

declare module 'express' {
  interface Request {
    user?: User;
    sid?: string;
  }
}
