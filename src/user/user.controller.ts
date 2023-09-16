import {Body, Controller, Get, Post} from '@nestjs/common';
import {UserProviders} from "./user.providers";
import {CreateUserDto} from "./dto/createUser.dto";
import {UserEntity} from "./user.entity";
import {v4 as uuid} from 'uuid';
import {ListUserDto} from "./dto/listUser.dto";

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
            user: new ListUserDto(userEntity.id, userEntity.name),
            message: 'User created successfully'
        };
    }

    @Get()
    async listUsers() {
        const userSaves = await this.userProvider.getUsers();
        return userSaves.map(user => new ListUserDto(user.id, user.name));
    }


}