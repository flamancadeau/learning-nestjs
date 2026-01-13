import { Module } from '@nestjs/common';
import { BookingEntityService } from './booking.entity.service';
import { BookingEntityController } from './booking.entity.controller';

@Module({
  controllers: [BookingEntityController],
  providers: [BookingEntityService],
})
export class BookingEntityModule {}
