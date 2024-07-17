import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CanchasService } from './canchas.service';
import { CreateCanchaDto } from './dto/create-cancha.dto';
import { UpdateCanchaDto } from './dto/update-cancha.dto';

@Controller('canchas')
export class CanchasController {
  constructor(private readonly canchasService: CanchasService) { }

  @Post()
  create(@Body() createCanchaDto: CreateCanchaDto) {
    return this.canchasService.create(createCanchaDto);
  }

  @Get()
  findAll() {
    return this.canchasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.canchasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCanchaDto: UpdateCanchaDto) {
    return this.canchasService.update(id, updateCanchaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.canchasService.remove(id);
  }
}
