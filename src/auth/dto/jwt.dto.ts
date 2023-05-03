import { IsNotEmpty, IsString } from 'class-validator';
import { AuthUserDto } from './auth-user.dto';

export class JwtDto extends AuthUserDto {
  @IsNotEmpty()
  @IsString()
  readonly sub: AuthUserDto['userId'];
}
