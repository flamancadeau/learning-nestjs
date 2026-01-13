import { Test, TestingModule } from '@nestjs/testing';
import { RentalPriceController } from './rental-price.controller';
import { RentalPriceService } from './rental-price.service';

describe('RentalPriceController', () => {
  let controller: RentalPriceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RentalPriceController],
      providers: [RentalPriceService],
    }).compile();

    controller = module.get<RentalPriceController>(RentalPriceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
