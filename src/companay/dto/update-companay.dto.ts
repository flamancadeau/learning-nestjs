import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanayDto } from './create-companay.dto';

export class UpdateCompanayDto extends PartialType(CreateCompanayDto) {}
