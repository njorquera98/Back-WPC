import { Injectable } from '@nestjs/common';
import { UpdatePartidoDto } from './dto/update-partido.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Partido } from './entities/partido.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PartidosService {

  constructor(
    @InjectRepository(Partido)
    private partidoRepository: Repository<Partido>
  ) { }

  async create(partido: Partido): Promise<Partido> {
    return this.partidoRepository.save(partido);
  }
  findAll() {
    return this.partidoRepository.find({ relations: ['pareja1', 'pareja2', 'grupo', 'americano', 'cancha'] });
  }

  findOne(id: number) {
    return this.partidoRepository.findOne({
      where: { id },
      relations: ['pareja1', 'pareja2', 'grupo', 'americano', 'cancha']
    });
  }
  findByAmericano(americanoId: number) {
    return this.partidoRepository.find({
      where: { americano: { id: americanoId } },
      relations: ['pareja1', 'pareja2', 'grupo', 'americano', 'cancha']
    });
  }
  update(id: number, updatePartidoDto: UpdatePartidoDto) {
    return this.partidoRepository.update(id, updatePartidoDto);
  }

  remove(id: number) {
    return this.partidoRepository.delete(id);
  }
}
