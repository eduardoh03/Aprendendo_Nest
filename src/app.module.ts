import { Module } from '@nestjs/common';
import { UserController } from "./controller/user.controller";
import {UserService} from "./providers/user.providers";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
