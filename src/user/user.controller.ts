import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
// import { UserDto } from './dto/user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // READ
  @UseGuards(JwtAuthGuard)
  @Get()
  getAllUsers() {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') userId: string) {
    return this.userService.findByUserId(userId);
  }

  // WRITE
  @Post()
  createOrderPromotionEntry(@Body() userDto: any) {
    return this.userService.create(userDto);
  }
}
