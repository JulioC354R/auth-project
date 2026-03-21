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

export enum PostgresErrorCodes {
  // Unique constraint violation
  UNIQUE_VIOLATION = '23505',

  // Foreign key constraint violation
  FOREIGN_KEY_VIOLATION = '23503',

  // Check constraint violation
  CHECK_VIOLATION = '23514',

  // NOT NULL constraint violation
  NOT_NULL_VIOLATION = '23502',

  // Invalid data type
  INVALID_TEXT_REPRESENTATION = '22P02',

  // Restrict violation (e.g., trying to delete a referenced row)
  RESTRICT_VIOLATION = '23001',

  // Exclusion constraint violation
  EXCLUSION_VIOLATION = '23P01',

  // Enum constraint violation
  INVALID_ENUM_VALUE = '22P03',
}
