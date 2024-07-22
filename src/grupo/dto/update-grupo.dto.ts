import { IsString, IsOptional, IsNumber } from 'class-validator';

export class UpdateGrupoDto {
  @IsString()
  @IsOptional()
  nombreGrupo?: string;

  @IsNumber()
  @IsOptional()
  americano_fk?: number;
}

