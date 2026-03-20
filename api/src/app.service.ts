import { Inject, Injectable } from '@nestjs/common';
import { DRIZZLE } from './database/database.provider';
import { users } from './database/schema';
import type { Database } from './database/database.types';

@Injectable()
export class AppService {
  constructor(@Inject(DRIZZLE) private readonly db: Database) {}

  async getHello() {
    return await this.db.select().from(users);
  }
}
