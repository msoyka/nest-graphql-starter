// https://www.tomray.dev/nestjs-prisma#graphql-in-nestjs-with-prisma
import { Resolver, Query, Args, ID } from '@nestjs/graphql';
import { User } from './models/user.model';
import { ParseIntPipe } from '@nestjs/common';

const users: User[] = [{ id: 1, name: 'matt' }];

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async findAllUsers() {
    return [{ id: 1, name: 'matt' }];
  }

  @Query(() => User, { name: 'user' })
  async findOne(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
    return users[0];
  }
}
