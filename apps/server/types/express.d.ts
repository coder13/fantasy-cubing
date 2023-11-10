import { User } from "db";

declare module 'express-session' {
  export interface SessionData {
    userId?: number;
  }
}

declare module 'express' {
  export interface Request {
    user?: User;
    sid?: string;
  }
}
