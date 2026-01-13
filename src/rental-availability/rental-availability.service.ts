import { Injectable } from '@nestjs/common';
import { CreateRentalAvailabilityDto } from './dto/create-rental-availability.dto';
import { UpdateRentalAvailabilityDto } from './dto/update-rental-availability.dto';

@Injectable()
export class RentalAvailabilityService {
  create(createRentalAvailabilityDto: CreateRentalAvailabilityDto) {
    return 'This action adds a new rentalAvailability';
  }

  findAll() {
    return `This action returns all rentalAvailability`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rentalAvailability`;
  }

  update(id: number, updateRentalAvailabilityDto: UpdateRentalAvailabilityDto) {
    return `This action updates a #${id} rentalAvailability`;
  }

  remove(id: number) {
    return `This action removes a #${id} rentalAvailability`;
  }
}
