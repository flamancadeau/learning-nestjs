import { Injectable } from '@nestjs/common';
import { CreateRentalPriceDto } from './dto/create-rental-price.dto';
import { UpdateRentalPriceDto } from './dto/update-rental-price.dto';

@Injectable()
export class RentalPriceService {
  create(createRentalPriceDto: CreateRentalPriceDto) {
    return 'This action adds a new rentalPrice';
  }

  findAll() {
    return `This action returns all rentalPrice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rentalPrice`;
  }

  update(id: number, updateRentalPriceDto: UpdateRentalPriceDto) {
    return `This action updates a #${id} rentalPrice`;
  }

  remove(id: number) {
    return `This action removes a #${id} rentalPrice`;
  }
}
