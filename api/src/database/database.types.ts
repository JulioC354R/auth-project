import { drizzle } from 'drizzle-orm/node-postgres';
export type Database = ReturnType<typeof drizzle>;
import type { DatabaseError } from 'pg';

export type DrizzleQueryError = {
  name: string;
  message: string;
  query: string;
  params: unknown[];
  cause?: DatabaseError;
  stack?: string;
};
