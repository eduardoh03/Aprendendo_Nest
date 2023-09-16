import {Module} from "@nestjs/common";
import {UserController} from "./user.controller";
import {UserProviders} from "./user.providers";
import {EmailUniqueValidator} from "./validation/email_uniqued";

@Module({
    controllers: [UserController],
    providers: [UserProviders, EmailUniqueValidator],
})
export class UserModule {}