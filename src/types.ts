import { EntityManager, IDatabaseDriver, Connection } from '@mikro-orm/core';
import { Request, Response } from 'express';
import { Redis } from 'ioredis';

export type MyContext = {
  em: EntityManager<IDatabaseDriver<Connection>>;
  req: Request;
  res: Response;
  redis: Redis;
};

// Augment the session object to include custom fields
declare module 'express-session' {
  interface Session {
    userId: number;
  }
}
