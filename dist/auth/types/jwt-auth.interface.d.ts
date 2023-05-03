import type { User } from '@prisma/client';
export type JwtAuth = Pick<User, 'email' | 'userId'>;
