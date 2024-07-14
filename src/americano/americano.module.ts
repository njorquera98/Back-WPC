import { Module } from '@nestjs/common';
import { AmericanoService } from './americano.service';
import { AmericanoController } from './americano.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Americano } from './entities/americano.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Americano])],
  controllers: [AmericanoController],
  providers: [AmericanoService],
})
export class AmericanoModule { }
