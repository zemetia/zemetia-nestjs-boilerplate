import { Module } from '@nestjs/common';
import { AccessService } from './access.service';
import { AccessController } from './access.controller';
import { RoleModule } from './role/role.module';
import { PermissionModule } from './permission/permission.module';

@Module({
  providers: [AccessService],
  controllers: [AccessController],
  imports: [RoleModule, PermissionModule]
})
export class AccessModule {}
