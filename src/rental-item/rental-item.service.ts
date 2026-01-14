import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRentalItemDto } from './dto/create-rental-item.dto';
import { UpdateRentalItemDto } from './dto/update-rental-item.dto';
import { RentalItem } from './entities/rental-item.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RentalItemService {
  constructor(
    @InjectRepository(RentalItem)
    private rentalItemRepository: Repository<RentalItem>,
  ) { }

  async create(createRentalItemDto: CreateRentalItemDto) {
    const item = this.rentalItemRepository.create(createRentalItemDto);
    return await this.rentalItemRepository.save(item);
  }

  async findAll() {
    return await this.rentalItemRepository.find({ relations: ['prices', 'availabilities', 'bookings', 'company'] });
  }

  async findOne(id: string) {
    const item = await this.rentalItemRepository.findOne({ where: { id }, relations: ['prices', 'availabilities', 'bookings', 'company'] });
    if (!item) throw new NotFoundException('Rental item not found');
    return item;
  }

  async update(id: string, updateRentalItemDto: UpdateRentalItemDto) {
    const item = await this.rentalItemRepository.preload({ id, ...(updateRentalItemDto as any) });
    if (!item) throw new NotFoundException('Rental item not found');
    return await this.rentalItemRepository.save(item);
  }

  async remove(id: string) {
    const item = await this.rentalItemRepository.findOne({ where: { id } });
    if (!item) throw new NotFoundException('Rental item not found');
    await this.rentalItemRepository.remove(item);
  }
}
