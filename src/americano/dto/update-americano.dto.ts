import { PartialType } from '@nestjs/mapped-types';
import { CreateAmericanoDto } from './create-americano.dto';

export class UpdateAmericanoDto extends PartialType(CreateAmericanoDto) {}
