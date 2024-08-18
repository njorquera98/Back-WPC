import { PartialType } from '@nestjs/mapped-types';
import { CreatePartidoDto } from './create-partido.dto';
import { IsNumber, IsOptional } from 'class-validator';

export class UpdatePartidoDto extends PartialType(CreatePartidoDto) {
  @IsOptional()
  @IsNumber()
  resultadoPareja1?: number;

  @IsOptional()
  @IsNumber()
  resultadoPareja2?: number;
}
