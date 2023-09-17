import {IsEmail, IsNotEmpty, IsOptional, MinLength} from "class-validator";
import {EmailUnique} from "../validation/email_unique";


export class UpdateUserDto {
    @IsNotEmpty({message: 'O nome não pode ser vazio'})
    name: string;

    @IsEmail({}, {message: 'O e-mail é inválido'})
    @EmailUnique({message: 'Já existe um usuário com este e-mail'})
    email: string;

    @MinLength(6, {message: 'O atributo senha deve ter no mínimo 6 caracteres'})
    password: string;
}
export class PartialUpdateUserDto {
    @IsNotEmpty({message: 'O nome não pode ser vazio'})
    @IsOptional()
    name: string;

    @IsEmail({}, {message: 'O e-mail é inválido'})
    @EmailUnique({message: 'Já existe um usuário com este e-mail'})
    @IsOptional()
    email: string;

    @MinLength(6, {message: 'O atributo senha deve ter no mínimo 6 caracteres'})
    @IsOptional()
    password: string;
}