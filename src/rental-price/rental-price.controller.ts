import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RentalPriceService } from './rental-price.service';
import { CreateRentalPriceDto } from './dto/create-rental-price.dto';
import { UpdateRentalPriceDto } from './dto/update-rental-price.dto';

@Controller('rental-price')
export class RentalPriceController {
  constructor(private readonly rentalPriceService: RentalPriceService) {}

  @Post()
  create(@Body() createRentalPriceDto: CreateRentalPriceDto) {
    return this.rentalPriceService.create(createRentalPriceDto);
  }

  @Get()
  findAll() {
    return this.rentalPriceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rentalPriceService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRentalPriceDto: UpdateRentalPriceDto) {
    return this.rentalPriceService.update(id, updateRentalPriceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rentalPriceService.remove(id);
  }
}
