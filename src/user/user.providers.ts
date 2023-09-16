import {Injectable} from '@nestjs/common';

@Injectable()
export class UserProviders {
    private users = [];

    async addUser(user) {
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
