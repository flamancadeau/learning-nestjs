import { Injectable } from '@nestjs/common';
import { CreateBookingEntityDto } from './dto/create-booking.entity.dto';
import { UpdateBookingEntityDto } from './dto/update-booking.entity.dto';

@Injectable()
export class BookingEntityService {
  create(createBookingEntityDto: CreateBookingEntityDto) {
    return 'This action adds a new bookingEntity';
  }

  findAll() {
    return `This action returns all bookingEntity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bookingEntity`;
  }

  update(id: number, updateBookingEntityDto: UpdateBookingEntityDto) {
    return `This action updates a #${id} bookingEntity`;
  }

  remove(id: number) {
    return `This action removes a #${id} bookingEntity`;
  }
}
