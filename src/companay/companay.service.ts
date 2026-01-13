import { Injectable } from '@nestjs/common';
import { CreateCompanayDto } from './dto/create-companay.dto';
import { UpdateCompanayDto } from './dto/update-companay.dto';

@Injectable()
export class CompanayService {
  create(createCompanayDto: CreateCompanayDto) {
    return 'This action adds a new companay';
  }

  findAll() {
    return `This action returns all companay`;
  }

  findOne(id: number) {
    return `This action returns a #${id} companay`;
  }

  update(id: number, updateCompanayDto: UpdateCompanayDto) {
    return `This action updates a #${id} companay`;
  }

  remove(id: number) {
    return `This action removes a #${id} companay`;
  }
}
