import { Test, TestingModule } from '@nestjs/testing';
import { CanchaDisponibleService } from './cancha-disponible.service';

describe('CanchaDisponibleService', () => {
  let service: CanchaDisponibleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CanchaDisponibleService],
    }).compile();

    service = module.get<CanchaDisponibleService>(CanchaDisponibleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
