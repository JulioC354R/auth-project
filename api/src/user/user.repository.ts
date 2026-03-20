import { users } from 'src/database/schema';
import { DRIZZLE } from './../database/database.provider';
import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import type { Database, DrizzleQueryError } from 'src/database/database.types';

@Injectable()
export class UserRepository {
  constructor(@Inject(DRIZZLE) private readonly db: Database) {}
  async create(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    try {
      await this.db.insert(users).values([
        {
          name: createUserDto.name,
          email: createUserDto.email,
          password: createUserDto.password,
        },
      ]);
    } catch (error: unknown) {
      const drizzleError = error as DrizzleQueryError;
      const pgError = drizzleError.cause;
      if (pgError?.code === '23505') {
        // UNIQUE violation
        throw new ConflictException('This email already exists');
      }

      throw error;
    }
  }
}
