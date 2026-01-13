import { IsUUID, IsNumber, IsOptional, IsString, IsDateString } from 'class-validator';

export class CreateRentalPriceDto {
  @IsUUID()
  rentalItemId: string;

  @IsNumber()
  pricePerDay: number;

  @IsOptional()
  @IsNumber()
  pricePerHour?: number;

  @IsOptional()
  @IsString()
  currency?: string;

  @IsOptional()
  @IsDateString()
  startDate?: Date;

  @IsOptional()
  @IsDateString()
  endDate?: Date;
}
