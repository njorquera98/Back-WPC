import { Module } from '@nestjs/common';
import { ParejasService } from './parejas.service';
import { ParejasController } from './parejas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pareja } from './entities/pareja.entity';
import { Americano } from 'src/americano/entities/americano.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pareja, Americano])],
  controllers: [ParejasController],
  providers: [ParejasService],
  exports: [ParejasService],
})
export class ParejasModule { }
