import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { RegisterInput } from './dto/register.input';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}
  // 通过 query 搜索后 指定 query 是 hello 最终会返回 hello world
  @Query(() => String)
  hello() {
    return 'hello world';
  }

  @Mutation(() => User)
  register(@Args('data') registerData: RegisterInput): Promise<User> {
    return this.usersService.register(registerData);
  }
}