import { Test, TestingModule } from '@nestjs/testing';
import { AmericanoService } from './americano.service';

describe('AmericanoService', () => {
  let service: AmericanoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AmericanoService],
    }).compile();

    service = module.get<AmericanoService>(AmericanoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
