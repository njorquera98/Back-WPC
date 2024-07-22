import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CanchaDisponibleService } from './cancha-disponible.service';
import { CreateCanchaDisponibleDto } from './dto/create-cancha-disponible.dto';
import { UpdateCanchaDisponibleDto } from './dto/update-cancha-disponible.dto';
import { CanchaDisponible } from './entities/cancha-disponible.entity';

@Controller('cancha-disponible')
export class CanchaDisponibleController {
  constructor(private readonly canchaDisponibleService: CanchaDisponibleService) { }

  @Post()
  create(@Body() createCanchaDisponibleDto: CreateCanchaDisponibleDto) {
    return this.canchaDisponibleService.create(createCanchaDisponibleDto);
  }

  @Get()
  findAll() {
    return this.canchaDisponibleService.findAll();
  }

  @Get('americano/:id')
  async getCanchasByAmericanoId(@Param('id') id: number): Promise<CanchaDisponible[]> {
    return this.canchaDisponibleService.findByAmericanoId(id);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.canchaDisponibleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCanchaDisponibleDto: UpdateCanchaDisponibleDto) {
    return this.canchaDisponibleService.update(+id, updateCanchaDisponibleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.canchaDisponibleService.remove(+id);
  }
}
