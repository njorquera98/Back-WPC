import { Module } from '@nestjs/common';
import { CanchaDisponibleService } from './cancha-disponible.service';
import { CanchaDisponibleController } from './cancha-disponible.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CanchaDisponible } from './entities/cancha-disponible.entity';
import { Americano } from 'src/americano/entities/americano.entity';
import { Cancha } from 'src/canchas/entities/cancha.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CanchaDisponible, Americano, Cancha])],
  controllers: [CanchaDisponibleController],
  providers: [CanchaDisponibleService],
})
export class CanchaDisponibleModule { }
