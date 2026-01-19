import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Exclude } from 'class-transformer';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullName: string;

  @Column({ nullable: true })
  firstName?: string;

  @Column({ nullable: true })
  lastName?: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  phone?: string;

  @Column()
  @Exclude()
  passwordHash: string;

  @Column({ default: 'client' })
  role: 'admin' | 'staff' | 'client';

  @Column({ default: 'active' })
  status: 'active' | 'inactive' | 'pending';

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  lastLogin?: Date;

  @Column({ nullable: true })
  companyId?: string; 
}
