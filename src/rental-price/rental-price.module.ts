import { Module } from '@nestjs/common';
import { RentalPriceService } from './rental-price.service';
import { RentalPriceController } from './rental-price.controller';

@Module({
  controllers: [RentalPriceController],
  providers: [RentalPriceService],
})
export class RentalPriceModule {}
