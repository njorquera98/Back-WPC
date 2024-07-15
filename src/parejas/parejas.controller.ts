import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParejasService } from './parejas.service';
import { CreateParejaDto } from './dto/create-pareja.dto';
import { UpdateParejaDto } from './dto/update-pareja.dto';
import { Pareja } from './entities/pareja.entity';

@Controller('parejas')
export class ParejasController {
  constructor(private readonly parejasService: ParejasService) { }

  @Post()
  create(@Body() createParejaDto: CreateParejaDto) {
    return this.parejasService.create(createParejaDto);
  }

  @Get()
  findAll() {
    return this.parejasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.parejasService.findOne(id);
  }
  @Get('americano/:americanoId')
  findByAmericanoId(@Param('americanoId') americanoId: string): Promise<Pareja[]> {
    return this.parejasService.findByAmericanoId(americanoId);
  }
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateParejaDto: UpdateParejaDto) {
    return this.parejasService.update(id, updateParejaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.parejasService.remove(id);
  }
}
