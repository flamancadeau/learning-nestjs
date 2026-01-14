import { Module } from '@nestjs/common';
import { RentalAvailabilityService } from './rental-availability.service';
import { RentalAvailabilityController } from './rental-availability.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RentalAvailability } from './entities/rental-availability.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RentalAvailability])],
  controllers: [RentalAvailabilityController],
  providers: [RentalAvailabilityService],
})
export class RentalAvailabilityModule {}
