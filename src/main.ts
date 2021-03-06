import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import configuration from './config/configuration';
import { ValidationPipe } from '@nestjs/common';
// 安全性
import cookieParser from 'cookie-parser';
import helmet from 'helmet';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  // app.enableCors();
  app.use(cookieParser())
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(configuration.port);
}

bootstrap().then(() => {
  console.log(`This serve running in port ${configuration.port}`);
});
