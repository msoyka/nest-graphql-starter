import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
// import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  // READ
  async findByUserId(userId: string) {
    return this.prisma.user.findUnique({ where: { userId } });
  }

  async findByUserEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async findAllUsers() {
    return this.prisma.user.findMany();
  }

  // WRITE
  async create(user: any) {
    return this.prisma.user.create({ data: user });
  }
}
