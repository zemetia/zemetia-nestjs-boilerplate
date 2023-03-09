import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto, LoginUserDto, VerificationDto } from './dto';
import * as argon2 from 'argon2';
import { UserId } from 'src/models/user-id.model';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}

    async hashPassword(password: string): Promise<string> {
        try {
          const hashedPassword = await argon2.hash(password);
          return hashedPassword;
        } catch (error) {
          throw new Error(error);
        }
    }
    
    async verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
        try {
          const isPasswordValid = await argon2.verify(hashedPassword, password);
          return isPasswordValid;
        } catch (error) {
          throw new Error(error);
        }
    }

    loginUser(request: LoginUserDto) {
        return `login ke akun ${request.email}`
    }

    async createUser(request: CreateUserDto) {
        const hash = await this.hashPassword(request.password)

        const user = await this.prisma.user.create({
            data: {
                id: UserId.generate(),
                role: {
                    connect: { id: request.role_id }
                },
                name: request.name,
                email: request.email,
                password: hash,
                no_telp: request.no_telp,
                is_valid: false,
                update_at: new Date()
            }
        })

        return {user: user}
    }

    async verification(request: VerificationDto) {
        return "signupedd!"
    }
}
