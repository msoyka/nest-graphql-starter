import { Injectable } from '@nestjs/common';
import { PothosService } from 'src/pothos/pothos.service';

export class User {
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  birthday: Date;

  constructor(
    firstName: string,
    lastName: string,
    displayName: string,
    email: string,
    birthday: Date,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.displayName = displayName;
    this.email = email;
    this.birthday = birthday;
  }
}

@Injectable()
export class UserSchema {
  constructor(private readonly pothosService: PothosService) {
    // TODO: TURN THESE INTO DECORATORS
    // Add User Type
    this.pothosService.builder.objectType(User, {
      name: 'User',
      description: 'Registered user information',
      fields: (t) => ({
        name: t.string({
          resolve: (parent) => `${parent.firstName} ${parent.lastName}`,
        }),
        displayName: t.exposeString('displayName', {}),
        email: t.exposeString('email', {}),
        age: t.int({
          resolve: (parent) => {
            const ageDifMs = Date.now() - parent.birthday.getTime();
            const ageDate = new Date(ageDifMs);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
          },
        }),
      }),
    });

    // TODO: TURN THESE INTO DECORATORS
    // Add User Query
    this.pothosService.builder.queryFields((t) => ({
      getUser: t.field({
        type: User,
        resolve: () =>
          new User(
            'John',
            'Smith',
            'JSmith',
            'jsmith@gmail.com',
            new Date(Date.UTC(2012, 11, 12)),
          ),
      }),
    }));

    this.pothosService.builder.mutationFields((t) => ({
      user: t.field({
        type: User,
        resolve: () =>
          new User(
            'John',
            'Smith2',
            'JSmith2',
            'jsmith2@gmail.com',
            new Date(Date.UTC(2012, 11, 12)),
          ),
      }),
    }));
  }
}
