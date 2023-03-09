import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { AccessModule } from './access/access.module';

@Module({
  imports: [PrismaModule, AuthModule, AccessModule],
  providers: [AuthService],
})
export class AppModule {}
