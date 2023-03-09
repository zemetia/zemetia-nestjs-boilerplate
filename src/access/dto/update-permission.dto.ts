import { IsInt, IsString, Min, MinLength } from "class-validator";

export class UpdatePermissionDto {
    @IsInt()
    @Min(0)
    id: number

    @IsString()
    @MinLength(3)
    routes: string
}