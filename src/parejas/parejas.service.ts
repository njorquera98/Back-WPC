import { Injectable } from '@nestjs/common';
import { CreateParejaDto } from './dto/create-pareja.dto';
import { UpdateParejaDto } from './dto/update-pareja.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pareja } from './entities/pareja.entity';
import { Repository } from 'typeorm';
import { Americano } from 'src/americano/entities/americano.entity';

@Injectable()
export class ParejasService {

  constructor(
    @InjectRepository(Pareja)
    private readonly parejaRepository: Repository<Pareja>,

    @InjectRepository(Americano)
    private readonly americanoRepository: Repository<Americano>,
  ) { }

  async create(createParejaDto: CreateParejaDto): Promise<Pareja> {
    const pareja = new Pareja();
    pareja.nombre_pareja = createParejaDto.nombre_pareja;

    const americano = await this.americanoRepository.findOne({ where: { id: createParejaDto.americano_fk } });
    if (!americano) {
      throw new Error('Americano not found');
    }
    pareja.americano = americano;

    return this.parejaRepository.save(pareja);
  }

  findAll() {
    return `This action returns all parejas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pareja`;
  }

  update(id: number, updateParejaDto: UpdateParejaDto) {
    return `This action updates a #${id} pareja`;
  }

  remove(id: number) {
    return `This action removes a #${id} pareja`;
  }
}
