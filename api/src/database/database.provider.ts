import * as dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import { drizzle } from 'drizzle-orm/node-postgres'; // ou o driver que você usa
import { Pool } from 'pg';
import * as schema from './schema';

export const DRIZZLE = 'DRIZZLE_CLIENT';
export const DatabaseProvider = {
  provide: DRIZZLE,
  useFactory: () => {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
    return drizzle(pool, { schema });
  },
};
