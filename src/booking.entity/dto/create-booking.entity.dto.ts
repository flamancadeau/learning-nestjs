import { IsUUID, IsDateString, IsNumber, IsIn } from 'class-validator';

export class CreateBookingEntityDto  {
  @IsUUID()
  clientId: string;

  @IsUUID()
  rentalItemId: string;

  @IsDateString()
  startTime: Date;

  @IsDateString()
  endTime: Date;

  @IsNumber()
  totalPrice: number;

  @IsIn(['pending', 'confirmed', 'cancelled', 'completed'])
  status?: 'pending' | 'confirmed' | 'cancelled' | 'completed';
}
