import { Module } from '@nestjs/common';
import { RentalItemService } from './rental-item.service';
import { RentalItemController } from './rental-item.controller';
import { RentalItem } from './entities/rental-item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RentalItem])],
  controllers: [RentalItemController],
  providers: [RentalItemService],
})
export class RentalItemModule {}
