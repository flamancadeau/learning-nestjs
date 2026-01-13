import { Test, TestingModule } from '@nestjs/testing';
import { RentalItemService } from './rental-item.service';

describe('RentalItemService', () => {
  let service: RentalItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RentalItemService],
    }).compile();

    service = module.get<RentalItemService>(RentalItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
