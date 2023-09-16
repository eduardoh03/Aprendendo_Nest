import {Body, Controller, Get, Post} from '@nestjs/common';
import {UserProviders} from "./user.providers";
import {CreateUserDto} from "./dto/createUser.dto";


@Controller('/usuarios')
export class UserController {
    constructor(private userProvider: UserProviders) {}

    @Post()
    async addUser(@Body() user: CreateUserDto) {
        return this.userProvider.addUser(user);
    }

    @Get()
    async listUsuarios() {
        return this.userProvider.getUsers();
    }



}