import { Controller, Body, Post, Delete, Put } from '@nestjs/common';
import { BaseController } from 'src/base-controller';
import { CreatePermissionDto, DeletePermissionDto, UpdatePermissionDto } from '../dto';
import { PermissionService } from './permission.service';

@Controller('access/permission')
export class PermissionController extends BaseController {
    constructor(private roleService: PermissionService) {
        super()
    }

    @Post()
    async create(@Body() request: CreatePermissionDto) {
        await this.roleService.createPermission(request)
        return this.success()
    }

    @Put()
    async update(@Body() request: UpdatePermissionDto) {
        await this.roleService.updatePermission(request)
        return this.success()
    }

    @Delete()
    async delete(@Body() request: DeletePermissionDto) {
        await this.roleService.deletePermission(request)
        return this.success()
    }
}
