import { Request } from 'express';
import { Injectable } from '@nestjs/common';
import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import PrismaTypes from '@pothos/plugin-prisma/generated';

import { PrismaService } from 'src/prisma/prisma.service';

export interface SchemaContext {
  req: Request;
}

interface SchemaBuilderOption {
  Context: SchemaContext;
  PrismaTypes: PrismaTypes;
}

@Injectable()
export class PothosService {
  builder: PothosSchemaTypes.SchemaBuilder<
    PothosSchemaTypes.ExtendDefaultTypes<SchemaBuilderOption>
  >;

  constructor(private readonly prisma: PrismaService) {
    this.builder = new SchemaBuilder<SchemaBuilderOption>({
      notStrict:
        'Pothos may not work correctly when strict mode is not enabled in tsconfig.json',
      plugins: [PrismaPlugin],
      prisma: { client: this.prisma },
    });

    // Initialize an empty Query {} and Mutation{} type in our schema.
    this.builder.queryType({
      fields: (t) => ({
        hello: t.string({
          args: {
            name: t.arg.string({}),
          },
          resolve: (parent, { name }) => `hello, ${name || 'World'}`,
        }),
      }),
    });
    this.builder.mutationType({});
  }
}
