import {Body, Controller, Get, Post} from '@nestjs/common';
import {UserService} from "../providers/user.providers";


@Controller('/usuarios')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getUsers(): string[] {
        return this.userService.getUsers();
    }

    @Post()
    addUser(@Body() user: string): any {
        const newUser = this.userService.addUser(user);
        return { user: newUser };
    }

}