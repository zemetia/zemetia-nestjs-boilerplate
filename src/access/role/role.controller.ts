import { Controller, Post, Body, Put, Delete } from '@nestjs/common';
import { request } from 'http';
import { BaseController } from 'src/base-controller';
import { CreateRoleDto, DeleteRoleDto, UpdateRoleDto } from '../dto';
import { RoleService } from './role.service';

@Controller('access/role')
export class RoleController extends BaseController{
    constructor(private roleService: RoleService) {
        super()
    }

    @Post()
    async create(@Body() request: CreateRoleDto) {
        await this.roleService.createRole(request)
        return this.success()
    }

    @Put()
    async update(@Body() request: UpdateRoleDto) {
        await this.roleService.updateRole(request)
        return this.success()
    }

    @Delete()
    async delete(@Body() request: DeleteRoleDto) {
        await this.roleService.deleteRole(request)
        return this.success()
    }
}
