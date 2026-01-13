import { Test, TestingModule } from '@nestjs/testing';
import { CompanayService } from './companay.service';

describe('CompanayService', () => {
  let service: CompanayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanayService],
    }).compile();

    service = module.get<CompanayService>(CompanayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
