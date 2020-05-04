import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, } from 'typeorm';
// 这里导入这个库 是为了在 resolver 可以返回正确的数据类型
import { ObjectType, Field, Int } from '@nestjs/graphql';

@Entity('users')
@ObjectType()
export abstract class Base extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @UpdateDateColumn()
  @Field()
  updatedAt: Date;
}