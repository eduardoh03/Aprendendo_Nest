import {IsEmail, IsNotEmpty, MinLength} from "class-validator";
import {EmailUnique} from "../validation/email_uniqued";


export class CreateUserDto {
    @IsNotEmpty({message: 'O atributo nome é obrigatório'})
    name: string;
    @IsEmail({}, {message: 'O atributo e-mail é inválido'})
    @EmailUnique({message: 'Já existe um usuário com este e-mail'})
    email: string;
    @MinLength(6, {message: 'O atributo senha deve ter no mínimo 6 caracteres'})
    password: string;
}