import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { RentalItem } from '../../rental-item/entities/rental-item.entity';

@Entity('companies')
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  registrationNo?: string;

  @Column({ nullable: true })
  taxNo?: string;

  @Column({ nullable: true })
  industry?: string;

  @OneToMany(() => User, (user) => user.companyId)
  users: User[];

  @OneToMany(() => RentalItem, (item) => item.company)
  rentalItems: RentalItem[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
