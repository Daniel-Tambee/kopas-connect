import { Module } from '@nestjs/common';
import { PlatoonService } from './platoon.service';
import { PrismaService } from 'src/db-service.service';
import { PlatoonController } from './platoon.controller';

@Module({
  providers: [PlatoonService,PrismaService],
  imports: [],
  controllers: [PlatoonController]
})
export class PlatoonModule { }
