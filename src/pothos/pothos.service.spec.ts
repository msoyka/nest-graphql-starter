import { Test, TestingModule } from '@nestjs/testing';
import { PothosService } from './pothos.service';

describe('PothosService', () => {
  let service: PothosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PothosService],
    }).compile();

    service = module.get<PothosService>(PothosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
