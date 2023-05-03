import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Profile, Strategy } from 'passport-google-oauth20';

import { AuthService } from '../auth.service';

export const GOOGLE_PASSPORT_STRATEGY_NAME = 'google';

@Injectable()
export class GoogleStrategy extends PassportStrategy(
  Strategy,
  GOOGLE_PASSPORT_STRATEGY_NAME,
) {
  constructor(private authService: AuthService) {
    super({
      clientID: process.env.OAUTH_STRATEGY_GOOGLE_CLIENT_ID,
      clientSecret: process.env.OAUTH_STRATEGY_GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.OAUTH_STRATEGY_GOOGLE_CALLBACK_URL,
      scope: process.env.OAUTH_STRATEGY_GOOGLE_SCOPE.split(' '),
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: Profile,
  ) {
    const { emails } = profile;
    const userEmail = emails[0].value;
    const user = await this.authService.validateUser(userEmail);
    return user;
  }
}
