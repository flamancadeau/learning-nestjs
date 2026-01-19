import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookingEntityService } from './booking.entity.service';
import { CreateBookingEntityDto } from './dto/create-booking.entity.dto';
import { UpdateBookingEntityDto } from './dto/update-booking.entity.dto';

@Controller('booking.entity')
export class BookingEntityController {
  constructor(private readonly bookingEntityService: BookingEntityService) {}

  @Post()
  create(@Body() createBookingEntityDto: CreateBookingEntityDto) {
    return this.bookingEntityService.create(createBookingEntityDto);
  }

  @Get()
  findAll() {
    return this.bookingEntityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // FIX: Remove the '+' because service expects a string (UUID)
    return this.bookingEntityService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookingEntityDto: UpdateBookingEntityDto) {
    
    return this.bookingEntityService.update(id, updateBookingEntityDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   // FIX: Remove the '+' and ensure the service has the remove() method
  //   return this.bookingEntityService.remove(id);
  // }
}