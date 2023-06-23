import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { OrdersRepository } from './orders.repository';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AuthModule, RmqModule } from '@app/common';
import { INVOICE_SERVICE } from './constants/service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/orders/.env',
      validationSchema: Joi.object({
        PORT: Joi.string().required()
      }),
    }),
    RmqModule.register({
      name: INVOICE_SERVICE
    }),
    AuthModule
  ],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepository],
})
export class OrdersModule {}
