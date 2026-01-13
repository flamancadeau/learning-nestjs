import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RentalItemService } from './rental-item.service';
import { CreateRentalItemDto } from './dto/create-rental-item.dto';
import { UpdateRentalItemDto } from './dto/update-rental-item.dto';

@Controller('rental-item')
export class RentalItemController {
  constructor(private readonly rentalItemService: RentalItemService) {}

  @Post()
  create(@Body() createRentalItemDto: CreateRentalItemDto) {
    return this.rentalItemService.create(createRentalItemDto);
  }

  @Get()
  findAll() {
    return this.rentalItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rentalItemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRentalItemDto: UpdateRentalItemDto) {
    return this.rentalItemService.update(+id, updateRentalItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rentalItemService.remove(+id);
  }
}
