import { Injectable } from "@nestjs/common";
import { Users } from "./db/users.db";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersRepository {
    
    findAll() {
        return Users;
    }

    findOne(email: string) {
        return Users.find(user => user.email === email)
    }

    findById(id: number) {
        return Users.find(user => user.id === id)
    }

    insert(createUserDto: CreateUserDto) {
        Users.push({...createUserDto, id: Users.length + 1})
        return Users;
    }

    remove(id: number) {
        for( var i = 0; i < Users.length; i++){ 
            if ( Users[i].id === id) { 
                Users.splice(i, 1); 
            }
        }
        return Users;
    }

}