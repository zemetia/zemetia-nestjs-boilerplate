import { IsInt, Min } from "class-validator";

export class DeletePermissionDto {
    @IsInt()
    @Min(0)
    id: number
}