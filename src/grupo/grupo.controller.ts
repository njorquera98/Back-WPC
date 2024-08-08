import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { GrupoService } from './grupo.service';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
import { Grupo } from './entities/grupo.entity';
import { Pareja } from 'src/parejas/entities/pareja.entity';

@Controller('grupos')
export class GrupoController {
  constructor(private readonly grupoService: GrupoService) { }

  @Post()
  create(@Body() createGrupoDto: CreateGrupoDto): Promise<Grupo> {
    return this.grupoService.create(createGrupoDto);
  }

  @Get()
  async findAll(): Promise<Grupo[]> {
    return this.grupoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Grupo> {
    return this.grupoService.findOne(id);
  }

  @Get('americano/:americanoId')
  findByAmericano(@Param('americanoId') americanoId: number): Promise<Grupo[]> {
    return this.grupoService.findByAmericano(americanoId);
  }

  @Get('parejas/americano/:americanoId')
  findParejasByAmericano(@Param('americanoId') americanoId: number): Promise<Pareja[]> {
    return this.grupoService.findParejasByAmericano(americanoId);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateGrupoDto: UpdateGrupoDto): Promise<Grupo> {
    return this.grupoService.update(id, updateGrupoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.grupoService.remove(id);
  }
}
