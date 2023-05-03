import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GOOGLE_PASSPORT_STRATEGY_NAME } from '../strategies/google-oauth.strategy';

@Injectable()
export class GoogleAuthGuard extends AuthGuard(GOOGLE_PASSPORT_STRATEGY_NAME) {}
