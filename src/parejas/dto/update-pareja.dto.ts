import { PartialType } from '@nestjs/mapped-types';
import { CreateParejaDto } from './create-pareja.dto';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateParejaDto extends PartialType(CreateParejaDto) {
  @IsNotEmpty()
  @IsString()
  nombre_pareja: string;

  @IsNotEmpty()
  @IsNumber()
  puntos?: number;
}
