import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { JWT_PASSPORT_STRATEGY_NAME } from '../strategies/jwt.strategy';

@Injectable()
export class JwtAuthGuard extends AuthGuard(JWT_PASSPORT_STRATEGY_NAME) {}
