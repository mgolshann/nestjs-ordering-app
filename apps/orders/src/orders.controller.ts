import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { JwtAuthGuard } from '@app/common';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get('/:id')
  getOrder(@Param('id') id: string) {
    return this.ordersService.getOrder(parseInt(id))
  }

  @Get()
  getOrders() {
    return this.ordersService.getOrders()
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  createOrder(@Body() createOrderDto: CreateOrderDto, @Req() request: any) {
    return this.ordersService.createOrder(createOrderDto, request.cookies?.Authentication)
  }


}
