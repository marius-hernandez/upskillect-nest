import { Test, TestingModule } from '@nestjs/testing';
import { IdkController } from './idk.controller';
import { IdkService } from './idk.service';

describe('IdkController', () => {
  let controller: IdkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IdkController],
      providers: [IdkService],
    }).compile();

    controller = module.get<IdkController>(IdkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
