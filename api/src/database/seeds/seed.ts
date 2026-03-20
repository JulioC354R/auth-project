import * as dotenv from 'dotenv';
dotenv.config({ path: './.env' });

import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from '../schema';
import { users } from '../schema';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool, { schema });

async function seed() {
  console.log('🌱 Seeding database...');

  await db.insert(users).values([
    {
      name: 'Júlio',
      email: 'julio@email.com',
      password: '123456',
    },
    {
      name: 'Naruto',
      email: 'naruto@konoha.com',
      password: 'rasengan',
    },
  ]);

  console.log('✅ Seed finalizado!');
  process.exit(0);
}

seed().catch((err) => {
  console.error('❌ Erro no seed:', err);
  process.exit(1);
});
