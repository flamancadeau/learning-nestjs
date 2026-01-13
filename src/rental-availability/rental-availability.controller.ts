import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RentalAvailabilityService } from './rental-availability.service';
import { CreateRentalAvailabilityDto } from './dto/create-rental-availability.dto';
import { UpdateRentalAvailabilityDto } from './dto/update-rental-availability.dto';

@Controller('rental-availability')
export class RentalAvailabilityController {
  constructor(private readonly rentalAvailabilityService: RentalAvailabilityService) {}

  @Post()
  create(@Body() createRentalAvailabilityDto: CreateRentalAvailabilityDto) {
    return this.rentalAvailabilityService.create(createRentalAvailabilityDto);
  }

  @Get()
  findAll() {
    return this.rentalAvailabilityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rentalAvailabilityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRentalAvailabilityDto: UpdateRentalAvailabilityDto) {
    return this.rentalAvailabilityService.update(+id, updateRentalAvailabilityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rentalAvailabilityService.remove(+id);
  }
}
