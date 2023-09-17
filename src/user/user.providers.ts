import {Injectable} from '@nestjs/common';
import {UserEntity} from "./user.entity";
import {PartialUpdateUserDto, UpdateUserDto} from "./dto/updateUserDto";

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

    private findById(id: string) {
        const user = this.users.find(user => user.id === id);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }

    async partialUpdateUser(id: string, updateData: Partial<PartialUpdateUserDto>) {
        const user = this.findById(id);
        Object.entries(updateData).forEach(([key, value]) => {
            if (key === 'id') {
                return;
            }
            user[key] = value;
        })
        return user;
    }

    async updateUser(id: string, updateData: UpdateUserDto) {
        const user = this.findById(id);
        user.name = updateData.name;
        user.email = updateData.email;
        user.password = updateData.password;
        return user;
    }

    async deleteUser(id: string) {
        const user = this.findById(id);
        this.users = this.users.filter(user => user.id !== id);
        return user;
    }
}
