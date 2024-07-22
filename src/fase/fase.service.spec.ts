import { Test, TestingModule } from '@nestjs/testing';
import { FaseService } from './fase.service';

describe('FaseService', () => {
  let service: FaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FaseService],
    }).compile();

    service = module.get<FaseService>(FaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
