import { IsEmail, IsNotEmpty } from "class-validator";

export class VerificationDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;
}