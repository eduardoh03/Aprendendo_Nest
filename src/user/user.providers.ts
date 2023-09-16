import { Injectable } from '@nestjs/common';
import {CreateUserDto} from "./dto/createUser.dto";

@Injectable()
export class UserProviders {
    private users = [];

    addUser(user: CreateUserDto): any {
        this.users.push(user);
        return user;
    }

    async getUsers() {
        return this.users;
    }
}
