import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import {typeOrmConfig} from 'src/config/typeORM'
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({autoSchemaFile: 'schema.gql'}),
    TypeOrmModule.forRoot(typeOrmConfig as TypeOrmModuleOptions),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
