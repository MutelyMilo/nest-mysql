import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { Comment } from '../comments/comment.entity';
import { PostsResolver } from './posts.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Post, Comment])],
  controllers: [],
  providers: [PostsService, PostsResolver]
})
export class PostsModule {}
