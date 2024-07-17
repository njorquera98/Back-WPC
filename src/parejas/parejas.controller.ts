import { Controller, Get, Post, Body, Param, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { ParejasService } from './parejas.service';
import { CreateParejaDto } from './dto/create-pareja.dto';
import { Pareja } from './entities/pareja.entity';

@Controller('parejas')
export class ParejasController {
  constructor(private readonly parejasService: ParejasService) { }

  @Post()
  async create(@Body() createParejaDto: CreateParejaDto): Promise<Pareja> {
    return this.parejasService.create(createParejaDto);
  }

  @Get('americano/:americanoId')
  async findByAmericanoId(@Param('americanoId') americanoId: string): Promise<Pareja[]> {
    return this.parejasService.findAllByAmericanoId(americanoId);
  }

  @Get()
  async findAll(): Promise<Pareja[]> {
    return this.parejasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Pareja> {
    const pareja = await this.parejasService.findOne(id);
    if (!pareja) {
      throw new NotFoundException('Pareja not found');
    }
    return pareja;
  }

  @Post(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateParejaDto: CreateParejaDto): Promise<Pareja> {
    return this.parejasService.update(id, updateParejaDto);
  }

  @Post(':id/delete')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.parejasService.remove(id);
  }
}
