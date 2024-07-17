import { Injectable } from '@nestjs/common';
import { CreateAmericanoDto } from './dto/create-americano.dto';
import { UpdateAmericanoDto } from './dto/update-americano.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Americano } from './entities/americano.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AmericanoService {

  constructor(
    @InjectRepository(Americano)
    private americanoRepository: Repository<Americano>
  ) { }

  create(createAmericanoDto: CreateAmericanoDto) {
    const americano = this.americanoRepository.create(createAmericanoDto);
    return this.americanoRepository.save(americano);
  }

  findAll() {
    return `This action returns all americano`;
  }

  findOne(id: number) {
    return this.americanoRepository.findOneBy({ id });
  }

  update(id: number, updateAmericanoDto: UpdateAmericanoDto) {
    return `This action updates a #${id} americano`;
  }

  remove(id: number) {
    return `This action removes a #${id} americano`;
  }
}
