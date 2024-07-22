import { PartialType } from '@nestjs/mapped-types';
import { CreateCanchaDisponibleDto } from './create-cancha-disponible.dto';

export class UpdateCanchaDisponibleDto extends PartialType(CreateCanchaDisponibleDto) {}
