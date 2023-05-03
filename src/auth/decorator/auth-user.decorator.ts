import { createParamDecorator } from '@nestjs/common';
import AuthUser from '../types/auth-user.interface';

export const AuthUserParam = createParamDecorator<
  any,
  any,
  AuthUser | undefined
>((_data, req) => req.args[0]?.user);
