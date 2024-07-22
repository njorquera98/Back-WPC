import { Module } from '@nestjs/common';
import { FaseService } from './fase.service';
import { FaseController } from './fase.controller';

@Module({
  controllers: [FaseController],
  providers: [FaseService],
})
export class FaseModule {}
