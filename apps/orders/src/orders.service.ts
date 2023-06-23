import { Inject, Injectable } from '@nestjs/common';
import { OrdersRepository } from './orders.repository';
import { CreateOrderDto } from './dto/create-order.dto';
import { INVOICE_SERVICE } from './constants/service';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class OrdersService {

  constructor(
    private readonly ordersRepository: OrdersRepository,
    @Inject(INVOICE_SERVICE) private readonly invoiceClient: ClientProxy
  ) {}

  getOrder(id: number) {
    return this.ordersRepository.findOne(id)
  }

  getOrders() {
    return this.ordersRepository.findAll()
  }

  async createOrder(createOrderDto: CreateOrderDto, authentication: string) {
    try{
      const order =  this.ordersRepository.Insert(createOrderDto);
      await lastValueFrom(
        this.invoiceClient.emit('order_created', {
          createOrderDto,
          Authentication: authentication
        })
      )
      return order
    } catch (err) {
      throw err
    }
  }


}
