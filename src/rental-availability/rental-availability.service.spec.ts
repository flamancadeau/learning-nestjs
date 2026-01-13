import { Test, TestingModule } from '@nestjs/testing';
import { RentalAvailabilityService } from './rental-availability.service';

describe('RentalAvailabilityService', () => {
  let service: RentalAvailabilityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RentalAvailabilityService],
    }).compile();

    service = module.get<RentalAvailabilityService>(RentalAvailabilityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
