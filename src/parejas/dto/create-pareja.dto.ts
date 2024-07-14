import { IsNumber, IsString } from "class-validator";

export class CreateParejaDto {
  @IsString()
  nombre_pareja: string;

  @IsNumber()
  americano_fk: number;
}
