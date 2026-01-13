import { Module } from '@nestjs/common';
import { RentalItemService } from './rental-item.service';
import { RentalItemController } from './rental-item.controller';

@Module({
  controllers: [RentalItemController],
  providers: [RentalItemService],
})
export class RentalItemModule {}
