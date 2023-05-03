import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { JwtDto } from '../dto/jwt.dto';
import AuthUser from '../types/auth-user.interface';

export const JWT_PASSPORT_STRATEGY_NAME = 'jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(
  Strategy,
  JWT_PASSPORT_STRATEGY_NAME,
) {
  constructor() {
    super({
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  // Transform JWT
  async validate(jwtPayload: JwtDto): Promise<AuthUser> {
    // Can do user lookup here if needed.
    const { email, sub } = jwtPayload;
    return { email, userId: sub };
  }
}
