import { Test, TestingModule } from '@nestjs/testing';
import { CompanayController } from './companay.controller';
import { CompanayService } from './companay.service';

describe('CompanayController', () => {
  let controller: CompanayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanayController],
      providers: [CompanayService],
    }).compile();

    controller = module.get<CompanayController>(CompanayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
