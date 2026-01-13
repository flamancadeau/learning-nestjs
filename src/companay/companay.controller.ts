import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanayService } from './companay.service';
import { CreateCompanayDto } from './dto/create-companay.dto';
import { UpdateCompanayDto } from './dto/update-companay.dto';

@Controller('companay')
export class CompanayController {
  constructor(private readonly companayService: CompanayService) {}

  @Post()
  create(@Body() createCompanayDto: CreateCompanayDto) {
    return this.companayService.create(createCompanayDto);
  }

  @Get()
  findAll() {
    return this.companayService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companayService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanayDto: UpdateCompanayDto) {
    return this.companayService.update(+id, updateCompanayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companayService.remove(+id);
  }
}
