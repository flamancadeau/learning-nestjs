import { Test, TestingModule } from '@nestjs/testing';
import { RentalAvailabilityController } from './rental-availability.controller';
import { RentalAvailabilityService } from './rental-availability.service';

describe('RentalAvailabilityController', () => {
  let controller: RentalAvailabilityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RentalAvailabilityController],
      providers: [RentalAvailabilityService],
    }).compile();

    controller = module.get<RentalAvailabilityController>(RentalAvailabilityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
