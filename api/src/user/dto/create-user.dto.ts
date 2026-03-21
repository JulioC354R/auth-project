/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail, IsString, IsStrongPassword, Length } from 'class-validator';
export class CreateUserDto {
  @IsString()
  @Length(5, 40)
  name: string;
  @IsString()
  @IsEmail()
  @Length(1, 100)
  email: string;
  @IsString()
  @IsStrongPassword()
  password: string;
}
