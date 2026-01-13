import { Module } from '@nestjs/common';
import { RentalAvailabilityService } from './rental-availability.service';
import { RentalAvailabilityController } from './rental-availability.controller';

@Module({
  controllers: [RentalAvailabilityController],
  providers: [RentalAvailabilityService],
})
export class RentalAvailabilityModule {}
