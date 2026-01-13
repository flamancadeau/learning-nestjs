import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { RentalItem } from '../../rental-item/entities/rental-item.entity';

@Entity('rental_availabilities')
export class RentalAvailability {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => RentalItem, (item) => item.availabilities)
  rentalItem: RentalItem;

  @Column('timestamp')
  startTime: Date;

  @Column('timestamp')
  endTime: Date;

  @Column({ default: 'available' })
  status: 'available' | 'booked' | 'unavailable';

  @CreateDateColumn()
  createdAt: Date;
}
