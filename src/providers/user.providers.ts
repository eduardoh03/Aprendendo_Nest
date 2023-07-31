import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private users: string[] = [];

    getUsers(): string[] {
        return this.users;
    }

    addUser(user: string): any {
        this.users.push(user);
        return user; // Retorna o usuário criado
    }
}
