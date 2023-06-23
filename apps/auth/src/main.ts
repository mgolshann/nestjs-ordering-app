import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser'
import { ConfigService } from '@nestjs/config';
import { RmqService } from '@app/common';
import { RmqOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);

  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice<RmqOptions>(rmqService.getOptions('AUTH', true));
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // app.use(cookieParser())

  const configService = app.get(ConfigService)
  await app.startAllMicroservices();
  await app.listen(configService.get<string>('PORT'));
}

bootstrap();