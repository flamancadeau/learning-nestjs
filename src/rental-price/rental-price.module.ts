import { Module } from '@nestjs/common';
import { RentalPriceService } from './rental-price.service';
import { RentalPriceController } from './rental-price.controller';
import { RentalPrice } from './entities/rental-price.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RentalPrice])],
  controllers: [RentalPriceController],
  providers: [RentalPriceService],
})
export class RentalPriceModule {}
