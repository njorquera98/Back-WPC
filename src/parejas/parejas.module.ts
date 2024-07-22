import { Module } from '@nestjs/common';
import { ParejasService } from './parejas.service';
import { ParejasController } from './parejas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pareja } from './entities/pareja.entity';
import { Americano } from 'src/americano/entities/americano.entity';
import { Grupo } from 'src/grupo/entities/grupo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pareja, Americano, Grupo])],
  controllers: [ParejasController],
  providers: [ParejasService],
  exports: [ParejasService],
})
export class ParejasModule { }
