import { Body, Controller, Delete, Get, Param, Post, Query, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";
import { CurrentUser } from "../decorators/current-user.decorator";
import { IUser } from "../interfaces/IUser";

@Controller('auth/users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Get()
    userList() {
        return this.usersService.getAllUsers()
    }

    @UseGuards(JwtAuthGuard)
    @Get('currentUser')
    async getUser(@CurrentUser() user: IUser) {
        return user;
    }

    @Get('/:id')
    userDetail(@Param('id') id: string) {
        return id
    }

    @Get()
    findAllUsers(@Query('email') email: string) {
      return this.usersService.findUserByEmail(email);
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto)
    }

    @Delete('/:id')
    deleteUser(@Param('id') id: string) {
        return this.usersService.deleteUser(parseInt(id))
    }

}