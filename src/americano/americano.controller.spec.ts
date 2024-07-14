import { Test, TestingModule } from '@nestjs/testing';
import { AmericanoController } from './americano.controller';
import { AmericanoService } from './americano.service';

describe('AmericanoController', () => {
  let controller: AmericanoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AmericanoController],
      providers: [AmericanoService],
    }).compile();

    controller = module.get<AmericanoController>(AmericanoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
