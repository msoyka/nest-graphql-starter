import { AuthUserDto } from './auth-user.dto';
export declare class JwtDto extends AuthUserDto {
    readonly sub: AuthUserDto['userId'];
}
