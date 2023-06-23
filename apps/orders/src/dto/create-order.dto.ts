import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateOrderDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsPositive()
    price: number;

    @IsNumber()
    count: number
}