import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { RentalItem } from '../../rental-item/entities/rental-item.entity';

@Entity('bookings')
export class Booking {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User)
  client: User;

  @ManyToOne(() => RentalItem, (item) => item.bookings)
  rentalItem: RentalItem;

  @Column('timestamp')
  startTime: Date;

  @Column('timestamp')
  endTime: Date;

  @Column('decimal')
  totalPrice: number;

  @Column({ default: 'pending' })
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed'|'inreview';

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
