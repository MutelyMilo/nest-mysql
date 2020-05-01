import { Resolver, Query, Mutation } from '@nestjs/graphql';

@Resolver()
export class UsersResolver {
  @Query(() => String, { nullable: true })
  // 通过 query 搜索后 指定 query 是 hello 最终会返回 hello world
  hello() {
    return 'hello world';
  }

  @Mutation(() => String)
  register() {
    return 'xxx';
  }
}