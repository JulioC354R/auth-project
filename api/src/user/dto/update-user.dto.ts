import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  id: number;
  status: 'active' | 'inactive' | 'pending';
  created_at: string;
  updated_at: string;
}
