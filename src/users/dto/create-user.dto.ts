import {
  IsString,
  IsEmail,
  IsOptional,
  IsIn,
  IsUUID,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  fullName: string;

  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsString()
  password: string;

  @IsIn(['admin', 'staff', 'client'])
  role?: 'admin' | 'staff' | 'client';

  @IsOptional()
  @IsUUID()
  companyId?: string;
}
