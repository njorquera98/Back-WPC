import { Test, TestingModule } from '@nestjs/testing';
import { FaseController } from './fase.controller';
import { FaseService } from './fase.service';

describe('FaseController', () => {
  let controller: FaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FaseController],
      providers: [FaseService],
    }).compile();

    controller = module.get<FaseController>(FaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
