import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
import { Grupo } from './entities/grupo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GrupoService {

  constructor(
    @InjectRepository(Grupo)
    private readonly grupoRepository: Repository<Grupo>,
  ) { }

  create(createGrupoDto: CreateGrupoDto) {
    // Implementación para crear un nuevo grupo
    const grupo = this.grupoRepository.create(createGrupoDto);
    return this.grupoRepository.save(grupo);
  }

  findAll() {
    return this.grupoRepository.find();
  }

  async findOne(id: number): Promise<Grupo> {
    const grupo = await this.grupoRepository.findOne({ where: { id } });
    if (!grupo) {
      throw new NotFoundException(`Grupo with ID ${id} not found`);
    }
    return grupo;
  }

  async update(id: number, updateGrupoDto: UpdateGrupoDto) {
    const grupo = await this.findOne(id);
    const updatedGrupo = Object.assign(grupo, updateGrupoDto);
    return this.grupoRepository.save(updatedGrupo);
  }

  async remove(id: number) {
    const grupo = await this.findOne(id);
    return this.grupoRepository.remove(grupo);
  }
}

