import { Controller, Get, UseGuards } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { JwtAuthGuard, RmqService } from '@app/common';

@Controller()
export class InvoiceController {
  constructor(
      private readonly invoiceService: InvoiceService,
      private readonly rmqService: RmqService
  ) {}

  @Get()
  getHello(): string {
    return this.invoiceService.getHello();
  }

  @EventPattern('order_created')
  @UseGuards(JwtAuthGuard)
  async handleOrderCreated(@Payload() data: any, @Ctx() context: RmqContext) {
    this.invoiceService.invoice(data);
    this.rmqService.ack(context)
  }

  

}
