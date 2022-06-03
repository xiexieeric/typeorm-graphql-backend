import { EntityManager, IDatabaseDriver, Connection } from '@mikro-orm/core';
import { Request, Response } from 'express';

export type MyContext = {
  em: EntityManager<IDatabaseDriver<Connection>>;
  req: Request;
  res: Response;
};

// Augment the session object to include custom fields
declare module 'express-session' {
  interface Session {
    userId: number;
  }
}
