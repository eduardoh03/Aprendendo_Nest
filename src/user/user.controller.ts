import {Body, Controller, Get, Post} from '@nestjs/common';
import {UserProviders} from "./user.providers";


@Controller('/usuarios')
export class UserController {
    constructor(private readonly userProvider: UserProviders) {}

    @Get()
    getUsers(): string[] {
        return this.userProvider.getUsers();
    }

    @Post()
    addUser(@Body() user: string): any {
        const newUser = this.userProvider.addUser(user);
        return { user: newUser };
    }

}