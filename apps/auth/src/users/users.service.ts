import { ForbiddenException, Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersRepository } from "./users.repository";
import { CreateUserDto } from "./dto/create-user.dto";
import { Users } from "./db/users.db";
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {

    constructor(private readonly usersRepo: UsersRepository) { }

    getAllUsers() {
        return this.usersRepo.findAll()
    }

    findUserByEmail(email: string) {
        return this.usersRepo.findOne(email)
    }

    findUserById(id: number) {
        return this.usersRepo.findById(id)
    }

    async createUser(createUserDto: CreateUserDto) {
        const user = Users.find(user => user.email === createUserDto.email)
        if (user) { throw new ForbiddenException() }

        return this.usersRepo.insert({
            ...createUserDto,
            password: await bcrypt.hash(createUserDto.password, 10),
        })
    }

    async validateUser(email: string, password: string) {
        const user = this.findUserByEmail(email);

        if (!user) {
            throw new UnauthorizedException('Credentials are not valid.');
        }

        const passwordIsValid = await bcrypt.compare(password, user.password);
        if (!passwordIsValid) {
          throw new UnauthorizedException('Credentials are not valid.');
        }
        return user;
    }

    deleteUser(id: number) {
        return this.usersRepo.remove(id)
    }
}