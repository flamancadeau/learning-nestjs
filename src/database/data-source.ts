import 'reflect-metadata';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

import { Booking } from '../booking.entity/entities/booking.entity.entity';
import { Company } from '../company/entities/company.entity';
import { User } from '../users/entities/user.entity';
import { RentalItem } from '../rental-item/entities/rental-item.entity';
import { RentalPrice } from '../rental-price/entities/rental-price.entity';
import { RentalAvailability } from '../rental-availability/entities/rental-availability.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'booking_db',

  entities: [
    Booking,
    Company,
    User,
    RentalItem,
    RentalPrice,
    RentalAvailability,
  ],

  migrations: ['src/migrations/*.ts'],

  synchronize: false,

  logging: true,
});
