import { Strategy } from 'passport-jwt';
import { JwtDto } from '../dto/jwt.dto';
import AuthUser from '../types/auth-user.interface';
export declare const JWT_PASSPORT_STRATEGY_NAME = "jwt";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(jwtPayload: JwtDto): Promise<AuthUser>;
}
export {};
