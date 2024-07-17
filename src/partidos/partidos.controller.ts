import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PartidosService } from './partidos.service';
import { CreatePartidoDto } from './dto/create-partido.dto';
import { UpdatePartidoDto } from './dto/update-partido.dto';
import { Partido } from './entities/partido.entity';
import { ParejasService } from '../parejas/parejas.service'; // Asegúrate de importar y usar el servicio adecuado
import { GrupoService } from '../grupo/grupo.service';
import { AmericanoService } from '../americano/americano.service';
import { CanchasService } from '../canchas/canchas.service';

@Controller('partidos')
export class PartidosController {
  constructor(
    private readonly partidosService: PartidosService,
    private readonly parejasService: ParejasService, // Asegúrate de inyectar los servicios necesarios
    private readonly gruposService: GrupoService,
    private readonly americanosService: AmericanoService,
    private readonly canchasService: CanchasService,
  ) { }

  @Post()
  async create(@Body() createPartidoDto: CreatePartidoDto): Promise<Partido> {
    const partido = new Partido();
    partido.resultadoPareja1 = createPartidoDto.resultadoPareja1;
    partido.resultadoPareja2 = createPartidoDto.resultadoPareja2;
    partido.fecha = createPartidoDto.fecha;

    partido.pareja1 = await this.parejasService.findOne(createPartidoDto.pareja1_fk);
    partido.pareja2 = await this.parejasService.findOne(createPartidoDto.pareja2_fk);
    partido.grupo = await this.gruposService.findOne(createPartidoDto.grupo_fk);
    partido.americano = await this.americanosService.findOne(createPartidoDto.americano_fk);
    partido.cancha = await this.canchasService.findOne(createPartidoDto.cancha_fk);

    return this.partidosService.create(partido);
  }

  @Get()
  findAll() {
    return this.partidosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.partidosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePartidoDto: UpdatePartidoDto) {
    return this.partidosService.update(id, updatePartidoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.partidosService.remove(id);
  }
}

