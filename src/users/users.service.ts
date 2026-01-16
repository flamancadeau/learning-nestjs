import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { signToken } from '../common/utils/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    // create DTO may provide password or passwordHash; ensure we store passwordHash
    const { password, firstName, lastName, fullName } = createUserDto as any;
    const passwordHash = password
      ? await bcrypt.hash(password, 10)
      : (createUserDto as any).passwordHash;

    const user = this.usersRepository.create({
      ...createUserDto,
      passwordHash,
      fullName: fullName ?? `${firstName ?? ''} ${lastName ?? ''}`.trim(),
    });

    const saved = await this.usersRepository.save(user);
    const { passwordHash: _, ...result } = saved as any;
    return result as User;
  }

  async login(
    email: string,
    password: string,
  ): Promise<{ accessToken: string; user: Partial<User> }> {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');

    user.lastLogin = new Date();
    await this.usersRepository.save(user);

    const token = signToken(
      { sub: user.id, email: user.email, role: user.role },
      '1d',
    );

    // remove sensitive fields
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { passwordHash: _, ...userSafe } = user as any;
    return { accessToken: token, user: userSafe };
  }

  async findAll(): Promise<Partial<User>[]> {
    const users = await this.usersRepository.find();
    return users.map((u) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { passwordHash: _, ...safe } = u as any;
      return safe;
    });
  }

  async findOne(id: string): Promise<Partial<User>> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { passwordHash: _, ...safe } = user as any;
    return safe;
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<Partial<User>> {
    const user = await this.usersRepository.preload({
      id,
      ...(updateUserDto as any),
    });
    if (!user) throw new NotFoundException('User not found');

    if ((updateUserDto as any).password) {
      user.passwordHash = await bcrypt.hash(
        (updateUserDto as any).password,
        10,
      );
    }

    const saved = await this.usersRepository.save(user);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { passwordHash: _, ...safe } = saved as any;
    return safe;
  }

  async remove(id: string): Promise<void> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    await this.usersRepository.remove(user);
  }
}
