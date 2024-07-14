import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AmericanoService } from './americano.service';
import { CreateAmericanoDto } from './dto/create-americano.dto';
import { UpdateAmericanoDto } from './dto/update-americano.dto';

@Controller('americano')
export class AmericanoController {
  constructor(private readonly americanoService: AmericanoService) { }

  @Post()
  create(@Body() createAmericanoDto: CreateAmericanoDto) {
    return this.americanoService.create(createAmericanoDto);
  }

  @Get()
  findAll() {
    return this.americanoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.americanoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateAmericanoDto: UpdateAmericanoDto) {
    return this.americanoService.update(id, updateAmericanoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.americanoService.remove(id);
  }
}
