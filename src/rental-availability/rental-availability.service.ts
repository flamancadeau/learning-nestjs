import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRentalAvailabilityDto } from './dto/create-rental-availability.dto';
import { UpdateRentalAvailabilityDto } from './dto/update-rental-availability.dto';
import { RentalAvailability } from './entities/rental-availability.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RentalAvailabilityService {
  constructor(
    @InjectRepository(RentalAvailability)
    private availabilityRepository: Repository<RentalAvailability>,
  ) { }

  async create(createRentalAvailabilityDto: CreateRentalAvailabilityDto) {
    const av = this.availabilityRepository.create(createRentalAvailabilityDto);
    return await this.availabilityRepository.save(av);
  }

  async findAll() {
    return await this.availabilityRepository.find({ relations: ['rentalItem'] });
  }

  async findOne(id: string) {
    const av = await this.availabilityRepository.findOne({ where: { id }, relations: ['rentalItem'] });
    if (!av) throw new NotFoundException('Availability not found');
    return av;
  }

  async update(id: string, updateRentalAvailabilityDto: UpdateRentalAvailabilityDto) {
    const av = await this.availabilityRepository.preload({ id, ...(updateRentalAvailabilityDto as any) });
    if (!av) throw new NotFoundException('Availability not found');
    return await this.availabilityRepository.save(av);
  }

  async remove(id: string) {
    const av = await this.availabilityRepository.findOne({ where: { id } });
    if (!av) throw new NotFoundException('Availability not found');
    await this.availabilityRepository.remove(av);
  }
}
