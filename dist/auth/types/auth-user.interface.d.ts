import type { User } from '@prisma/client';
type AuthUser = Pick<User, 'email' | 'userId'>;
export default AuthUser;
