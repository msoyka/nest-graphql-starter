import { MetadataScanner } from '@nestjs/core';
import { Module, Global } from '@nestjs/common';
import { PothosService } from './pothos.service';
import { PothosSchema } from './pothos.schema';

@Global()
@Module({
  providers: [MetadataScanner, PothosService, PothosSchema],
  exports: [MetadataScanner, PothosService, PothosSchema],
})
export class PothosModule {}
