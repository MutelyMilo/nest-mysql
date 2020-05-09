import { UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Mutation, Args, Context, Resolver } from '@nestjs/graphql';
import { Post } from './post.entity';
import { CreatePostInput } from './dto/create.input';
import { GqlAuthGuard } from '../auth/gql-auth.guard';

@Resolver('posts')
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Mutation(() => Post)
  @UseGuards(GqlAuthGuard)
  async createPost(
    @Args('data') createPostData: CreatePostInput,
    @Context() context: any,
  ): Promise<Post> {
    const { user } = context.req;
    return await this.postsService.create(createPostData, user);
  }
}