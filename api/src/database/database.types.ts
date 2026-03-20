import { drizzle } from 'drizzle-orm/node-postgres';
export type Database = ReturnType<typeof drizzle>;
import type { DatabaseError } from 'pg';

export type DrizzleQueryError = {
  name: string; // geralmente "DrizzleQueryError"
  message: string; // mensagem do erro
  query: string; // query SQL que falhou
  params: unknown[]; // parâmetros passados na query
  cause?: DatabaseError; // o erro real do Postgres
  stack?: string;
};
