import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Company } from '../../company/entities/company.entity';
import { RentalPrice } from '../../rental-price/entities/rental-price.entity';
import { RentalAvailability } from '../../rental-availability/entities/rental-availability.entity';
import { Booking } from '../../booking.entity/entities/booking.entity.entity';

@Entity('rental_items')
export class RentalItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @Column()
  type: 'car' | 'equipment' | 'room' | 'other';

  @ManyToOne(() => Company, (company) => company.rentalItems)
  company: Company;

  @OneToMany(() => RentalPrice, (price) => price.rentalItem)
  prices: RentalPrice[];

  @OneToMany(
    () => RentalAvailability,
    (availability) => availability.rentalItem,
  )
  availabilities: RentalAvailability[];

  @OneToMany(() => Booking, (booking) => booking.rentalItem)
  bookings: Booking[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
