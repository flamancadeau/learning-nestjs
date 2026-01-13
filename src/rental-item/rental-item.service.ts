import { Injectable } from '@nestjs/common';
import { CreateRentalItemDto } from './dto/create-rental-item.dto';
import { UpdateRentalItemDto } from './dto/update-rental-item.dto';

@Injectable()
export class RentalItemService {
  create(createRentalItemDto: CreateRentalItemDto) {
    return 'This action adds a new rentalItem';
  }

  findAll() {
    return `This action returns all rentalItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rentalItem`;
  }

  update(id: number, updateRentalItemDto: UpdateRentalItemDto) {
    return `This action updates a #${id} rentalItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} rentalItem`;
  }
}
