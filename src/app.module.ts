import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import {typeOrmConfig} from 'src/config/typeORM'
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
// import { ServeStaticModule } from '@nestjs/serve-static';
// import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({autoSchemaFile: 'schema.gql'}),
    TypeOrmModule.forRoot(typeOrmConfig as TypeOrmModuleOptions),
    UsersModule,
    PostsModule,
    AuthModule,
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'client'),
    // }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
