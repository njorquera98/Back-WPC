import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FaseService } from './fase.service';
import { CreateFaseDto } from './dto/create-fase.dto';
import { UpdateFaseDto } from './dto/update-fase.dto';

@Controller('fase')
export class FaseController {
  constructor(private readonly faseService: FaseService) {}

  @Post()
  create(@Body() createFaseDto: CreateFaseDto) {
    return this.faseService.create(createFaseDto);
  }

  @Get()
  findAll() {
    return this.faseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.faseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFaseDto: UpdateFaseDto) {
    return this.faseService.update(+id, updateFaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.faseService.remove(+id);
  }
}
