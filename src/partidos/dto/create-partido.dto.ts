import { IsDateString, IsInt, IsNotEmpty } from "class-validator";

export class CreatePartidoDto {
  @IsNotEmpty()
  @IsInt()
  resultadoPareja1: number;

  @IsNotEmpty()
  @IsInt()
  resultadoPareja2: number;

  @IsNotEmpty()
  @IsDateString()
  fecha: Date;

  @IsNotEmpty()
  @IsInt()
  pareja1_fk: number;

  @IsNotEmpty()
  @IsInt()
  pareja2_fk: number;

  @IsNotEmpty()
  @IsInt()
  grupo_fk: number;

  @IsNotEmpty()
  @IsInt()
  americano_fk: number;

  @IsNotEmpty()
  @IsInt()
  cancha_fk: number;

}
