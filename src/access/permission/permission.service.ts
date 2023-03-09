import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePermissionDto, DeletePermissionDto, UpdatePermissionDto } from '../dto';

@Injectable()
export class PermissionService {
    constructor(private prismaService: PrismaService) {}

    async createPermission (request: CreatePermissionDto) {
        const permission = await this.prismaService.permission.create({
            data: {
                routes: request.routes,
                update_at: new Date()
            }
        }) 
    }

    async updatePermission(request: UpdatePermissionDto) {
        const permission = await this.prismaService.permission.update({
            where: {id: request.id},
            data: {
                routes: request.routes,
                update_at: new Date()
            }
        })
    }

    async deletePermission(request: DeletePermissionDto) {
        const permission = await this.prismaService.permission.delete({
            where: {id: request.id}
        })
    }
}
