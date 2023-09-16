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

    async updateUser(id: string, updateData: Partial<UserEntity>) {
        const user = this.users.find(user => user.id === id);
        if (!user) {
            throw new Error('User not found');
        }
        Object.entries(updateData).forEach(([key, value]) => {
            if (key === 'id') {
                return;
            }
            user[key] = value;
        })
        return user;
    }
}
