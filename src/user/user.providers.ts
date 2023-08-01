import { Injectable } from '@nestjs/common';
import {CreateUserDto} from "./dto/createUser.dto";

@Injectable()
export class UserProviders {
    private users: string[] = [];

    addUser(user: CreateUserDto): any {
        this.users.push(user.name);
        return user;
    }

    getUsers(): string[] {
        return this.users;
    }


}
