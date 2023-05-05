import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  id: number;
  name: string;
}
