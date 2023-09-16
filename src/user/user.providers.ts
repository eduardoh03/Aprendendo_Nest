import {Injectable} from '@nestjs/common';
import {UserEntity} from "./user.entity";

@Injectable()
export class UserProviders {
    private users: UserEntity[] = [];

    async addUser(user: UserEntity) {
        this.users.push(user);
        return user;
    }

    async getUsers() {
        return this.users;
    }

    async findPossibleUser(email: string) {
        const possibleUser = this.users.find(user => user.email === email);
        return possibleUser !== undefined;
    }
}
