import { users } from 'src/database/schema';
import { DRIZZLE } from './../database/database.provider';
import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import {
  PostgresErrorCodes,
  type Database,
  type DrizzleQueryError,
} from 'src/database/database.types';
import { ResponseUserDto } from './dto/response-user.dto';
import { asc, eq } from 'drizzle-orm';

@Injectable()
export class UserRepository {
  constructor(@Inject(DRIZZLE) private readonly db: Database) {}

  private userPasswordFilter = {
    id: users.id,
    name: users.name,
    email: users.email,
    status: users.status,
    created_at: users.created_at,
    updated_at: users.updated_at,
  };

  async create(createUserDto: CreateUserDto): Promise<ResponseUserDto> {
    console.log(createUserDto);
    try {
      const newUser = await this.db
        .insert(users)
        .values([
          {
            name: createUserDto.name,
            email: createUserDto.email,
            password: createUserDto.password,
          },
        ])
        .returning(this.userPasswordFilter);
      return newUser[0];
    } catch (error: unknown) {
      const drizzleError = error as DrizzleQueryError;
      const pgError = drizzleError.cause;
      if (pgError?.code === PostgresErrorCodes.UNIQUE_VIOLATION) {
        throw new ConflictException('This email/username is already in use!');
      }
      throw error;
    }
  }

  async getUsers(): Promise<ResponseUserDto[]> {
    const userList: ResponseUserDto[] = await this.db
      .select(this.userPasswordFilter)
      .from(users)
      .orderBy(asc(users.id));
    return userList;
  }

  async getUserById(id: number) {
    console.log(id);
    const userList: ResponseUserDto[] = await this.db
      .select(this.userPasswordFilter)
      .from(users)
      .where(eq(users.id, id));
    return userList;
  }
}
