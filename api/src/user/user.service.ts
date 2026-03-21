import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    const createdUser = this.userRepo.create(createUserDto);
    return createdUser;
  }

  async findAll() {
    return this.userRepo.getUsers();
  }

  findOne(id: number) {
    return this.userRepo.getUserById(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
