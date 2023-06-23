import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { RmqModule } from '../rmq/rmq.module';
import { AUTH_SERVICE } from './services';

@Module({
  imports: [RmqModule.register({ name: AUTH_SERVICE })],
  exports: [RmqModule],
})

export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // it takes cookies and add them to the current request object
    // parse incoming cookies and passportjs is looking for jwt
    consumer.apply(cookieParser()).forRoutes('*');
  }
}
