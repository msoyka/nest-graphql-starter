import { ModulesContainer } from '@nestjs/core';
import { Injectable } from '@nestjs/common';
import type { GqlModuleOptions } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PothosService } from '../pothos.service';

export type PothosApolloDriverConfig = ApolloDriverConfig;

@Injectable()
export class PothosApolloDriver extends ApolloDriver {
  constructor(
    private pothosService: PothosService,
    private readonly modulesContainer: ModulesContainer,
  ) {
    super(modulesContainer);
  }

  start(options: GqlModuleOptions<any>): Promise<void> {
    return super.start({
      ...options,
      schema: this.pothosService.builder.toSchema(),
    });
  }
}
