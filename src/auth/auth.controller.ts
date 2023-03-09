import { Controller, Body, Post, Get } from '@nestjs/common';
import { BaseController } from 'src/base-controller';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto, VerificationDto } from './dto';

@Controller('auth')
export class AuthController extends BaseController
{
    constructor(private authService: AuthService) {
        super()
    }

    @Post('login')
    async loginUser(@Body() request: LoginUserDto) {
        this.authService.loginUser(request)
        return this.success()
    }

    @Post('register')
    async createUser(@Body() request: CreateUserDto) {
        const res = await this.authService.createUser(request)
        return this.successWithData(res)
    }

    @Post('verification')
    async userVerification(@Body() request: VerificationDto) {
        await this.authService.verification(request)
        return this.success()
    }

    @Get('verification')
    async reUserVerification(@Body() request: VerificationDto) {
        await this.authService.verification(request)
        return this.success()
    }
    

}
