import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto/user.dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByUserId(userId: string): Promise<import(".prisma/client").User>;
    findByUserEmail(email: string): Promise<import(".prisma/client").User>;
    findAllUsers(): Promise<import(".prisma/client").User[]>;
    create(user: UserDto): Promise<import(".prisma/client").User>;
}
