import { Injectable } from '@nestjs/common';
import { CreateCanchaDto } from './dto/create-cancha.dto';
import { UpdateCanchaDto } from './dto/update-cancha.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cancha } from './entities/cancha.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CanchasService {

  constructor(
    @InjectRepository(Cancha)
    private readonly canchaRepository: Repository<Cancha>
  ) { }

  create(createCanchaDto: CreateCanchaDto) {
    return this.canchaRepository.save(createCanchaDto);
  }

  findAll() {
    return this.canchaRepository.find();
  }

  findOne(id: number) {
    return this.canchaRepository.findOneBy({ id });
  }

  update(id: number, updateCanchaDto: UpdateCanchaDto) {
    return this.canchaRepository.update(id, updateCanchaDto);
  }

  remove(id: number) {
    return this.canchaRepository.softDelete({ id });
  }
}
