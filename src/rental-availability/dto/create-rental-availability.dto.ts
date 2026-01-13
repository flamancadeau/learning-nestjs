import { IsUUID, IsDateString, IsIn } from 'class-validator';

export class CreateRentalAvailabilityDto {
  @IsUUID()
  rentalItemId: string;

  @IsDateString()
  startTime: Date;

  @IsDateString()
  endTime: Date;

  @IsIn(['available', 'booked', 'unavailable'])
  status?: 'available' | 'booked' | 'unavailable';
}
