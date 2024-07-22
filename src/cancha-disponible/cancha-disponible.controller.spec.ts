import { Test, TestingModule } from '@nestjs/testing';
import { CanchaDisponibleController } from './cancha-disponible.controller';
import { CanchaDisponibleService } from './cancha-disponible.service';

describe('CanchaDisponibleController', () => {
  let controller: CanchaDisponibleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CanchaDisponibleController],
      providers: [CanchaDisponibleService],
    }).compile();

    controller = module.get<CanchaDisponibleController>(CanchaDisponibleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
