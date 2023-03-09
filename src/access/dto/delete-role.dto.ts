import { IsInt, Min } from "class-validator";

export class DeleteRoleDto {
    @IsInt()
    @Min(0)
    id: number
}