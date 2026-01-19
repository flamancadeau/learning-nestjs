import { Injectable, NotFoundException, UnauthorizedException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { hashPassword, comparePassword } from '../common/utils/hash';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { email, password, firstName, lastName } = createUserDto;

    const existingUser = await this.usersRepository.findOne({ where: { email } });
    if (existingUser) throw new ConflictException('Email already in use');

    const passwordHash = await hashPassword(password);

    const user = this.usersRepository.create({
      ...createUserDto,
      passwordHash,
      fullName: createUserDto.fullName ?? `${firstName ?? ''} ${lastName ?? ''}`.trim(),
    });

    const savedUser = await this.usersRepository.save(user);
    const payload = { sub: savedUser.id, email: savedUser.email };
    
    return {
      user: savedUser,
      token: this.jwtService.sign(payload),
    };
  }

  async login(email: string, password: string) {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isMatch = await comparePassword(password, user.passwordHash);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');

    const payload = { sub: user.id, email: user.email };
    return {
      user,
      token: this.jwtService.sign(payload),
    };
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.usersRepository.preload({
      id,
      ...(updateUserDto as any),
    });
    if (!user) throw new NotFoundException('User not found');

    if ((updateUserDto as any).password) {
      user.passwordHash = await hashPassword((updateUserDto as any).password);
    }

    return await this.usersRepository.save(user);
  }

  async remove(id: string): Promise<User> {
    const user = await this.findOne(id);
    return await this.usersRepository.remove(user);
  }
}