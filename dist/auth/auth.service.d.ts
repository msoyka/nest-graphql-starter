import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthUserDto } from './dto/auth-user.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(email: AuthUserDto['email']): Promise<import(".prisma/client").User>;
    authUser(email: AuthUserDto['email']): Promise<import(".prisma/client").User>;
    login(user: AuthUserDto): Promise<{
        access_token: string;
    }>;
}
