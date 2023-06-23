import { IsEmail, IsNotEmpty, IsString, Max, Min } from "class-validator";


export class CreateUserDto {
    
    @IsEmail()
    email: string;

    @IsString()
    password: string;
}