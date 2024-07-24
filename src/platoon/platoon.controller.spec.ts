import { Test, TestingModule } from '@nestjs/testing';
import { PlatoonController } from './platoon.controller';

describe('PlatoonController', () => {
  let controller: PlatoonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlatoonController],
    }).compile();

    controller = module.get<PlatoonController>(PlatoonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
