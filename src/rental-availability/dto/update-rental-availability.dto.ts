import { PartialType } from '@nestjs/mapped-types';
import { CreateRentalAvailabilityDto } from './create-rental-availability.dto';

export class UpdateRentalAvailabilityDto extends PartialType(CreateRentalAvailabilityDto) {}
