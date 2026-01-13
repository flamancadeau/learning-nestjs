import { PartialType } from '@nestjs/mapped-types';
import { CreateBookingEntityDto } from './create-booking.entity.dto';

export class UpdateBookingEntityDto extends PartialType(CreateBookingEntityDto) {}
