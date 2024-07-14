import { IsDateString, IsString } from "class-validator";

export class CreateAmericanoDto {
  @IsString()
  nombre: string;

  @IsDateString()
  fecha: Date;
}
