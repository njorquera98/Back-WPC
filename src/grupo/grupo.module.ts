import { Module } from '@nestjs/common';
import { GrupoService } from './grupo.service';
import { GrupoController } from './grupo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grupo } from './entities/grupo.entity';
import { Americano } from 'src/americano/entities/americano.entity';

@Module({

  imports: [TypeOrmModule.forFeature([Grupo, Americano])],
  controllers: [GrupoController],
  providers: [GrupoService],
  exports: [GrupoService],
})
export class GrupoModule { }
