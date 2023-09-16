import {
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface
} from "class-validator";
import {UserProviders} from "../user.providers";
import {Injectable} from "@nestjs/common";

@Injectable()
@ValidatorConstraint({name: 'emailUnique', async: true})
export class EmailUniqueValidator implements ValidatorConstraintInterface {
    constructor(private userProvider: UserProviders) {
    }

    defaultMessage(validationArguments?: ValidationArguments): string {
        return 'O atributo e-mail deve ser único';
    }

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const possibleUser = await this.userProvider.findPossibleUser(value);
        return !possibleUser;
    }
}

export const EmailUnique = (optionsValidation: ValidationOptions) => {
    return (object: object, propertyName: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: optionsValidation,
            constraints: [],
            validator: EmailUniqueValidator
        })
    };
}