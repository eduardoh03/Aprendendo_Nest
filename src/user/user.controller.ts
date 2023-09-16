import {Body, Controller, Get, Post} from '@nestjs/common';
import {UserProviders} from "./user.providers";
import {CreateUserDto} from "./dto/createUser.dto";
import {UserEntity} from "./user.entity";
import {v4 as uuid} from 'uuid';

@Controller('/usuarios')
export class UserController {
    constructor(private userProvider: UserProviders) {
    }

    @Post()
    async addUser(@Body() user: CreateUserDto) {
        const userEntity = new UserEntity();
        userEntity.name = user.name;
        userEntity.email = user.email;
        userEntity.password = user.password;
        userEntity.id = uuid();
        await this.userProvider.addUser(userEntity)
        return {
            id: userEntity.id,
            message: 'Usuário cadastrado com sucesso'
        };
    }

    @Get()
    async listUsuarios() {
        return this.userProvider.getUsers();
    }


}