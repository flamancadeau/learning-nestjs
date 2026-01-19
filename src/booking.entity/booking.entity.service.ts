import { Injectable, Logger } from '@nestjs/common'; // Added Logger here
import { CreateBookingEntityDto } from './dto/create-booking.entity.dto';
import { UpdateBookingEntityDto } from './dto/update-booking.entity.dto';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, LessThan } from 'typeorm'; 
import { Booking } from './entities/booking.entity.entity'; 

@Injectable()
export class BookingEntityService {
  
  private readonly logger = new Logger(BookingEntityService.name);

  constructor(
    @InjectRepository(Booking) 
    private readonly bookingRepository: Repository<Booking>,
  ) {}

  @Cron(CronExpression.EVERY_MINUTE)
  async checkPendingBooking() {
    this.logger.log('Cron Job: Checking for old pending bookings...');


    const fiveMinutesAgo = new Date();
    fiveMinutesAgo.setMinutes(fiveMinutesAgo.getMinutes() - 5);

  
    const bookingsToUpdate = await this.bookingRepository.find({
      where: {
        status: 'pending',
        createdAt: LessThan(fiveMinutesAgo),
      },
    });

    if (bookingsToUpdate.length === 0) {
      return;
    }

   
    for (const booking of bookingsToUpdate) {
      booking.status = 'inreview';
      await this.bookingRepository.save(booking);
      this.logger.log(`Booking ID ${booking.id} status changed to 'inreview'`);
    }

    this.logger.log(`Cron Job: Processed ${bookingsToUpdate.length} bookings.`);
  }

  async create(createBookingEntityDto: CreateBookingEntityDto) {
    const newBooking = this.bookingRepository.create(createBookingEntityDto);
    return await this.bookingRepository.save(newBooking);
  }

  async findAll() {
    return await this.bookingRepository.find();
  }

  async findOne(id: string) { 
    return await this.bookingRepository.findOne({ where: { id } });
  }

  async update(id: string, updateBookingEntityDto: UpdateBookingEntityDto) {
    await this.bookingRepository.update(id, updateBookingEntityDto);
    return this.findOne(id);
  }

// async remove(id: string) { 
//   const booking = await this.findOne(id);
//   if (!booking) throw new NotFoundException();
//   return await this.bookingRepository.remove(booking);
// }

}