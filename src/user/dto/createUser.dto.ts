import {IsEmail, IsNotEmpty, MinLength} from "class-validator";

export class CreateUserDto{
    @IsNotEmpty({message: 'O atributo nome é obrigatório'})
    name: string;
    @IsEmail({}, {message: 'O atributo e-mail é inválido'})
    email: string;
    @MinLength(6, {message: 'O atributo senha deve ter no mínimo 6 caracteres'})
    password: string;
}