import { Test, TestingModule } from '@nestjs/testing';
import { BookingEntityService } from './booking.entity.service';

describe('BookingEntityService', () => {
  let service: BookingEntityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookingEntityService],
    }).compile();

    service = module.get<BookingEntityService>(BookingEntityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
