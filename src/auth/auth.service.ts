import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from 'src/user/user.service';
import { AuthUserDto } from './dto/auth-user.dto';
import { JwtDto } from './dto/jwt.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: AuthUserDto['email']) {
    const user = await this.userService.findByUserEmail(email);
    return user;
  }

  async authUser(email: AuthUserDto['email']) {
    const user = await this.userService.findByUserEmail(email);
    return user;
  }

  async login(user: AuthUserDto) {
    const payload = { email: user.email, sub: user.userId } as JwtDto;
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
