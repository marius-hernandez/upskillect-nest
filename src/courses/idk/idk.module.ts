import { Module } from '@nestjs/common';
import { IdkService } from './idk.service';
import { IdkController } from './idk.controller';

@Module({
  controllers: [IdkController],
  providers: [IdkService],
})
export class IdkModule {}
