import { Module } from '@nestjs/common';
import { CompanayService } from './companay.service';
import { CompanayController } from './companay.controller';

@Module({
  controllers: [CompanayController],
  providers: [CompanayService],
})
export class CompanayModule {}
