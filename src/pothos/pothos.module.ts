import { Module, Global } from '@nestjs/common';
import { PothosService } from './pothos.service';

@Global()
@Module({
  providers: [PothosService],
  exports: [PothosService],
})
export class PothosModule {}
