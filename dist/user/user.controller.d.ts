import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<import(".prisma/client").User[]>;
    getUserById(userId: string): Promise<import(".prisma/client").User>;
    createOrderPromotionEntry(userDto: UserDto): Promise<import(".prisma/client").User>;
}
