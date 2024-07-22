import { IsInt, IsNotEmpty } from "class-validator";

export class CreateCanchaDisponibleDto {
  @IsNotEmpty()
  @IsInt()
  americano_fk: number;

  @IsNotEmpty()
  @IsInt()
  cancha_fk: number;
}
