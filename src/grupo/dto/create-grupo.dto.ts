import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateGrupoDto {
  @IsString()
  @IsNotEmpty()
  nombreGrupo: string;

  @IsNumber()
  americano_fk: number;
}
