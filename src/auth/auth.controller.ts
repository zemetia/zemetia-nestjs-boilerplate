import { Controller, Body, Post, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto, VerificationDto } from './dto';

@Controller('auth')
export class AuthController 
{
    constructor(private authService: AuthService) {}

    @Post('login')
    loginUser(@Body() payload: LoginDto) {
        console.log({payload})
        return this.authService.signup()
    }

    @Post('register')
    createUser(@Body() payload: RegisterDto) {
        return this.authService.signup()
    }

    @Post('verification')
    userVerification(@Body() payload: VerificationDto) {
        return this.authService.signup()
    }

    @Get('verification')
    reUserVerification(@Body() payload: VerificationDto) {
        return this.authService.signup()
    }
    

}
