import { Profile, Strategy } from 'passport-google-oauth20';
import { AuthService } from '../auth.service';
export declare const GOOGLE_PASSPORT_STRATEGY_NAME = "google";
declare const GoogleStrategy_base: new (...args: any[]) => Strategy;
export declare class GoogleStrategy extends GoogleStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(_accessToken: string, _refreshToken: string, profile: Profile): Promise<import(".prisma/client").User>;
}
export {};
