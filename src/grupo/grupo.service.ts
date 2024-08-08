import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
import { Grupo } from './entities/grupo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Americano } from 'src/americano/entities/americano.entity';
import { Pareja } from 'src/parejas/entities/pareja.entity';

@Injectable()
export class GrupoService {

  constructor(
    @InjectRepository(Grupo)
    private readonly grupoRepository: Repository<Grupo>,

    @InjectRepository(Americano)
    private readonly americanoRepository: Repository<Americano>,

    @InjectRepository(Pareja)
    private readonly parejaRepository: Repository<Pareja>
  ) { }

  async create(createGrupoDto: CreateGrupoDto): Promise<Grupo> {
    const { americano_fk, nombreGrupo } = createGrupoDto;
    const grupo = this.grupoRepository.create({ nombreGrupo });

    if (americano_fk) {
      const americano = await this.americanoRepository.findOneBy({ id: americano_fk });
      if (!americano) {
        throw new NotFoundException(`Americano with ID ${americano_fk} not found`);
      }
      grupo.americano = americano;
    }

    return this.grupoRepository.save(grupo);
  }

  async findAll(): Promise<Grupo[]> {
    return this.grupoRepository.find({ relations: ['parejas', 'partidos', 'americano'] });
  }

  async findOne(id: number): Promise<Grupo> {
    const grupo = await this.grupoRepository.findOne({
      where: { id },
      relations: ['parejas', 'partidos', 'americano']
    });
    if (!grupo) {
      throw new NotFoundException(`Grupo with ID ${id} not found`);
    }
    return grupo;
  }

  async update(id: number, updateGrupoDto: UpdateGrupoDto): Promise<Grupo> {
    const grupo = await this.findOne(id);
    const updatedGrupo = Object.assign(grupo, updateGrupoDto);
    return this.grupoRepository.save(updatedGrupo);
  }

  async remove(id: number): Promise<void> {
    const grupo = await this.findOne(id);
    await this.grupoRepository.remove(grupo);
  }

  async findByAmericano(americanoId: number): Promise<Grupo[]> {
    console.log(`Buscando grupos para americano con ID: ${americanoId}`);
    const grupos = await this.grupoRepository.find({
      where: { americano: { id: americanoId } },
      relations: ['parejas', 'partidos']
    });
    console.log('Grupos encontrados:', grupos);
    return grupos;
  }

  async findParejasByAmericano(americanoId: number): Promise<Pareja[]> {
    console.log(`Buscando parejas para americano con ID: ${americanoId}`);
    const parejas = await this.parejaRepository.find({
      where: { americano: { id: americanoId } },
      relations: ['grupo']
    });
    console.log('Parejas encontradas:', parejas);
    return parejas;
  }
}

