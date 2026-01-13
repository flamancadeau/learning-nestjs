import { Test, TestingModule } from '@nestjs/testing';
import { RentalPriceService } from './rental-price.service';

describe('RentalPriceService', () => {
  let service: RentalPriceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RentalPriceService],
    }).compile();

    service = module.get<RentalPriceService>(RentalPriceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
