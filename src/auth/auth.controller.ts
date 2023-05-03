import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import type { User } from '@prisma/client';
import { GoogleAuthGuard } from './guards/google-oauth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt.guard';
import { AuthUserParam } from './decorator/auth-user.decorator';
import AuthUser from './types/auth-user.interface';

// NOTES: SEPERATE AUTH VALIDATE FROM CREATE NEW USER
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('me')
  @UseGuards(JwtAuthGuard)
  profile(@AuthUserParam() authUser: AuthUser) {
    return this.authService.authUser(authUser.email);
  }

  // GOOGLE AUTH
  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  login() {
    return 'Authenticating User';
  }

  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  redirect(@Request() req) {
    const { email, userId } = req.user as User;
    return this.authService.login({ email, userId });
  }
}
