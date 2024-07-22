import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCanchaDisponibleDto } from './dto/create-cancha-disponible.dto';
import { UpdateCanchaDisponibleDto } from './dto/update-cancha-disponible.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CanchaDisponible } from './entities/cancha-disponible.entity';
import { Repository } from 'typeorm';
import { Cancha } from 'src/canchas/entities/cancha.entity';
import { Americano } from 'src/americano/entities/americano.entity';

@Injectable()
export class CanchaDisponibleService {

  constructor(
    @InjectRepository(CanchaDisponible)
    private readonly canchaDisponibleRepository: Repository<CanchaDisponible>,
    @InjectRepository(Cancha)
    private readonly canchaRepository: Repository<Cancha>,
    @InjectRepository(Americano)
    private readonly americanoRepository: Repository<Americano>
  ) { }

  async create(createCanchaDisponibleDto: CreateCanchaDisponibleDto) {
    const { cancha_fk, americano_fk } = createCanchaDisponibleDto;

    const cancha = await this.canchaRepository.findOne({ where: { id: cancha_fk } });
    const americano = await this.americanoRepository.findOne({ where: { id: americano_fk } });

    if (!cancha || !americano) {
      throw new NotFoundException('Cancha or Americano not found');
    }

    const canchaDisponible = this.canchaDisponibleRepository.create({
      ...createCanchaDisponibleDto,
      cancha,
      americano,
    });

    return this.canchaDisponibleRepository.save(canchaDisponible);
  }
  async findByAmericanoId(americanoId: number): Promise<CanchaDisponible[]> {
    return this.canchaDisponibleRepository.find({
      where: { americano: { id: americanoId } }, // Busca a través de la relación
      relations: ['cancha'] // Incluye la entidad 'cancha' en la consulta
    });
  } async findAll() {
    return this.canchaDisponibleRepository.find({
      relations: ['cancha', 'americano'],
    });
  }

  async findOne(id: number) {
    const canchaDisponible = await this.canchaDisponibleRepository.findOne({
      where: { id },
      relations: ['cancha', 'americano'],
    });

    if (!canchaDisponible) {
      throw new NotFoundException(`CanchaDisponible with ID ${id} not found`);
    }

    return canchaDisponible;
  }

  async update(id: number, updateCanchaDisponibleDto: UpdateCanchaDisponibleDto) {
    const canchaDisponible = await this.findOne(id);

    const updatedCanchaDisponible = {
      ...canchaDisponible,
      ...updateCanchaDisponibleDto,
    };

    return this.canchaDisponibleRepository.save(updatedCanchaDisponible);
  }

  async remove(id: number) {
    const canchaDisponible = await this.findOne(id);

    return this.canchaDisponibleRepository.remove(canchaDisponible);
  }
}

