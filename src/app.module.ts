import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import {
  PothosApolloDriver,
  PothosApolloDriverConfig,
} from './pothos/utils/pothos.driver';
import { PothosModule } from './pothos/pothos.module';

@Module({
  imports: [
    PrismaModule,
    PothosModule,
    GraphQLModule.forRoot<PothosApolloDriverConfig>({
      driver: PothosApolloDriver,
    }),
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
