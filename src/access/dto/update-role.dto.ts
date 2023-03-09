import { IsInt, IsString, Min, MinLength } from "class-validator";

export class UpdateRoleDto {
    @IsInt()
    @Min(0)
    id: number

    @IsString()
    @MinLength(3)
    name: string
}