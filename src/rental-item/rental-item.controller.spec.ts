import { Test, TestingModule } from '@nestjs/testing';
import { RentalItemController } from './rental-item.controller';
import { RentalItemService } from './rental-item.service';

describe('RentalItemController', () => {
  let controller: RentalItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RentalItemController],
      providers: [RentalItemService],
    }).compile();

    controller = module.get<RentalItemController>(RentalItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
