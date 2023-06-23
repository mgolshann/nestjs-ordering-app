import { Injectable } from "@nestjs/common";
import { Orders } from "./db/orders";
import { CreateOrderDto } from "./dto/create-order.dto";

@Injectable()
export class OrdersRepository {
    
    findAll() {
        return Orders;
    }

    findOne(id: number) {
        return Orders.find(order => order.id === id)
    }

    findById(id: number) {
        return Orders.find(order => order.id === id)
    }

    Insert(createOrderDto: CreateOrderDto) {
        Orders.push({...createOrderDto, id: Orders.length + 1})
        return Orders;
    }

}