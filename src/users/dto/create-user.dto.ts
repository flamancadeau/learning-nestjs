import {
  IsString,
  IsEmail,
  IsOptional,
  IsIn,
  IsUUID,
} from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  @IsString()
  fullName: string;

  
  @IsString()
  firstName?: string;

  
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
