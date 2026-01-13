import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { RentalItem } from '../../rental-item/entities/rental-item.entity';

@Entity('rental_prices')
export class RentalPrice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => RentalItem, (item) => item.prices)
  rentalItem: RentalItem;

  @Column('decimal')
  pricePerDay: number;

  @Column('decimal', { nullable: true })
  pricePerHour?: number;

  @Column({ default: 'CNY' })
  currency: string;

  @Column({ nullable: true })
  startDate?: Date;

  @Column({ nullable: true })
  endDate?: Date;

  @CreateDateColumn()
  createdAt: Date;
}
