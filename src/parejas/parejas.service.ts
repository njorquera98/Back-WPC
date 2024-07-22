import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateParejaDto } from './dto/create-pareja.dto';
import { UpdateParejaDto } from './dto/update-pareja.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pareja } from './entities/pareja.entity';
import { Americano } from 'src/americano/entities/americano.entity';
import { Grupo } from 'src/grupo/entities/grupo.entity';

@Injectable()
export class ParejasService {

  constructor(
    @InjectRepository(Pareja)
    private readonly parejaRepository: Repository<Pareja>,

    @InjectRepository(Americano)
    private readonly americanoRepository: Repository<Americano>,

    @InjectRepository(Grupo)
    private readonly grupoRepository: Repository<Grupo>,
  ) { }

  async create(createParejaDto: CreateParejaDto): Promise<Pareja> {
    const { nombre_pareja, americano_fk, grupo_fk } = createParejaDto;

    const pareja = new Pareja();
    pareja.nombre_pareja = nombre_pareja;

    const americano = await this.americanoRepository.findOne({ where: { id: americano_fk } });
    if (!americano) {
      throw new NotFoundException('Americano not found');
    }
    pareja.americano = americano;

    if (grupo_fk) {
      const grupo = await this.grupoRepository.findOne({ where: { id: grupo_fk } });
      if (!grupo) {
        throw new NotFoundException('Grupo not found');
      }
      pareja.grupo = grupo;
    }

    return this.parejaRepository.save(pareja);
  }

  async findAllByAmericanoId(americanoId: string): Promise<Pareja[]> {
    const id = parseInt(americanoId, 10);
    if (isNaN(id)) {
      throw new Error('Invalid americano ID');
    }
    return this.parejaRepository.find({
      where: { americano: { id } },
      relations: ['americano', 'grupo'],
    });
  }

  async findAll(): Promise<Pareja[]> {
    return this.parejaRepository.find({ relations: ['americano', 'grupo'] });
  }

  async findOne(id: number): Promise<Pareja | undefined> {
    return this.parejaRepository.findOne({ where: { id }, relations: ['americano', 'grupo'] });
  }

  async update(id: number, updateParejaDto: UpdateParejaDto): Promise<Pareja> {
    const pareja = await this.parejaRepository.findOne({ where: { id }, relations: ['americano', 'grupo'] });
    if (!pareja) {
      throw new NotFoundException(`Pareja with ID ${id} not found`);
    }
    pareja.nombre_pareja = updateParejaDto.nombre_pareja;

    return this.parejaRepository.save(pareja);
  }

  async remove(id: number): Promise<void> {
    const result = await this.parejaRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Pareja with ID ${id} not found`);
    }
  }
}

