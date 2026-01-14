import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRentalPriceDto } from './dto/create-rental-price.dto';
import { UpdateRentalPriceDto } from './dto/update-rental-price.dto';
import { RentalPrice } from './entities/rental-price.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RentalPriceService {
  constructor(
    @InjectRepository(RentalPrice)
    private rentalPriceRepository: Repository<RentalPrice>,
  ) { }

  async create(createRentalPriceDto: CreateRentalPriceDto) {
    const price = this.rentalPriceRepository.create(createRentalPriceDto);
    return await this.rentalPriceRepository.save(price);
  }

  async findAll() {
    return await this.rentalPriceRepository.find({ relations: ['rentalItem'] });
  }

  async findOne(id: string) {
    const price = await this.rentalPriceRepository.findOne({ where: { id }, relations: ['rentalItem'] });
    if (!price) throw new NotFoundException('Rental price not found');
    return price;
  }

  async update(id: string, updateRentalPriceDto: UpdateRentalPriceDto) {
    const price = await this.rentalPriceRepository.preload({ id, ...(updateRentalPriceDto as any) });
    if (!price) throw new NotFoundException('Rental price not found');
    return await this.rentalPriceRepository.save(price);
  }

  async remove(id: string) {
    const price = await this.rentalPriceRepository.findOne({ where: { id } });
    if (!price) throw new NotFoundException('Rental price not found');
    await this.rentalPriceRepository.remove(price);
  }
}
