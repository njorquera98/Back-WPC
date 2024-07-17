import { Module } from '@nestjs/common';
import { PartidosService } from './partidos.service';
import { PartidosController } from './partidos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Partido } from './entities/partido.entity';
import { ParejasModule } from 'src/parejas/parejas.module';
import { GrupoModule } from 'src/grupo/grupo.module';
import { AmericanoModule } from 'src/americano/americano.module';
import { CanchasModule } from 'src/canchas/canchas.module';

@Module({

  imports: [TypeOrmModule.forFeature([Partido]),
    ParejasModule,
    GrupoModule,
    AmericanoModule,
    CanchasModule,
  ],
  controllers: [PartidosController],
  providers: [PartidosService],
})
export class PartidosModule { }
