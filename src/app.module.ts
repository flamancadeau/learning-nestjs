import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { CompanayModule } from './companay/companay.module';
import { RentalItemModule } from './rental-item/rental-item.module';
import { RentalPriceModule } from './rental-price/rental-price.module';
import { RentalAvailabilityModule } from './rental-availability/rental-availability.module';
import { BookingEntityModule } from './booking.entity/booking.entity.module';
import databaseConfig from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
    }),
    DatabaseModule,
    UsersModule,
    CompanayModule,
    RentalItemModule,
    RentalPriceModule,
    RentalAvailabilityModule,
    BookingEntityModule,
  ],
})
export class AppModule {}
