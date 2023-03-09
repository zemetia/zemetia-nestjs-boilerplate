import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRoleDto, DeleteRoleDto, UpdateRoleDto } from '../dto';

@Injectable()
export class RoleService {
    constructor(private prismaService: PrismaService) {}

    async createRole (request: CreateRoleDto) {
        const role = await this.prismaService.role.create({
            data: {
                name: request.name,
                update_at: new Date()
            }
        }) 
    }

    async updateRole(request: UpdateRoleDto) {
        const role = await this.prismaService.role.update({
            where: {id: request.id},
            data: {
                name: request.name
            }
        })
    }

    async deleteRole(request: DeleteRoleDto) {
        const role = await this.prismaService.role.delete({
            where: {id: request.id}
        })
    }


}
