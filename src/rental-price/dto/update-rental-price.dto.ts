import { PartialType } from '@nestjs/mapped-types';
import { CreateRentalPriceDto } from './create-rental-price.dto';

export class UpdateRentalPriceDto extends PartialType(CreateRentalPriceDto) {}
