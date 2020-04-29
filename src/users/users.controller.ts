import { Controller, Get, Post } from '@nestjs/common';
import { Users } from './users.entity';

@Controller('users')
export class UsersController {
  @Get()
  async all() {
    return await Users.find()
  };

  @Post()
  async createUser() {
    const user = new Users();
    user.firstName = "hehe";
    user.lastName = 'haha';
    user.isActive = false;
    return await user.save()
  }
}
