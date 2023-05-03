import type { User } from '@prisma/client';
import { AuthService } from './auth.service';
import AuthUser from './types/auth-user.interface';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    profile(authUser: AuthUser): Promise<User>;
    login(): string;
    redirect(req: any): Promise<{
        access_token: string;
    }>;
}
