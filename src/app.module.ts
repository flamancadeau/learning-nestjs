import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { RentalItemModule } from './rental-item/rental-item.module';
import { RentalPriceModule } from './rental-price/rental-price.module';
import { RentalAvailabilityModule } from './rental-availability/rental-availability.module';
import { BookingEntityModule } from './booking.entity/booking.entity.module';
import { CompanyModule } from './company/company.module';
import databaseConfig from './config/database.config';
import jwtConfig from './config/jwt.config';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, jwtConfig],
      
    }),
    ScheduleModule.forRoot(),
    DatabaseModule,
    UsersModule,
    RentalItemModule,
    RentalPriceModule,
    RentalAvailabilityModule,
    BookingEntityModule,
    CompanyModule,
  ],
})
export class AppModule {}
