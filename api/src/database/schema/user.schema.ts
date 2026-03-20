import { pgEnum } from 'drizzle-orm/pg-core';
import { pgTable, serial, text, date } from 'drizzle-orm/pg-core';

export const statusEnum = pgEnum('status', ['active', 'inactive', 'pending']);

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').unique().notNull(),
  password: text('password').notNull(),
  status: statusEnum('status').default('pending').notNull(),
  created_at: date('created_at').defaultNow(),
  updated_at: date('update_at')
    .defaultNow()
    .$onUpdate(() => new Date().toISOString()),
});
