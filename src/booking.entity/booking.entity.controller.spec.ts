import { Test, TestingModule } from '@nestjs/testing';
import { BookingEntityController } from './booking.entity.controller';
import { BookingEntityService } from './booking.entity.service';

describe('BookingEntityController', () => {
  let controller: BookingEntityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookingEntityController],
      providers: [BookingEntityService],
    }).compile();

    controller = module.get<BookingEntityController>(BookingEntityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
