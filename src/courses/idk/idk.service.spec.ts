import { Test, TestingModule } from '@nestjs/testing';
import { IdkService } from './idk.service';

describe('IdkService', () => {
  let service: IdkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IdkService],
    }).compile();

    service = module.get<IdkService>(IdkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
