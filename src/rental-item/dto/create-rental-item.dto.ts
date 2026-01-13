import { IsString, IsOptional, IsUUID, IsIn } from 'class-validator';

export class CreateRentalItemDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsIn(['car', 'equipment', 'room', 'other'])
  type: 'car' | 'equipment' | 'room' | 'other';

  @IsUUID()
  companyId: string;
}
