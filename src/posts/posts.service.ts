import { Post } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostInput } from './dto/create.input';
import { Injectable } from '@nestjs/common';
import { User } from '../users/user.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly usersRepository: Repository<Post>,
  ) {}

  async create(createData: CreatePostInput, user: User): Promise<Post> {
    return this.usersRepository
      .create({
        ...createData,
        user
      })
      .save();
  }
}