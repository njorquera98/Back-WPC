import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateParejaDto {
  @IsNotEmpty()
  @IsString()
  nombre_pareja: string;

  @IsNotEmpty()
  @IsInt()
  americano_fk: number;

  @IsOptional()
  @IsInt()
  grupo_fk?: number;
}
