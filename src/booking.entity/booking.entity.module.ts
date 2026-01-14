import { Module } from '@nestjs/common';
import { BookingEntityService } from './booking.entity.service';
import { BookingEntityController } from './booking.entity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Booking])],
  controllers: [BookingEntityController],
  providers: [BookingEntityService],
})
export class BookingEntityModule {}
