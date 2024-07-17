import { IsDateString, IsInt, IsString } from "class-validator";

export class CreateAmericanoDto {
  @IsString()
  nombre: string;

  @IsDateString()
  fechaInicio: Date;

  @IsInt()
  cantidadGrupos: number;
}
