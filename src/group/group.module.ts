import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { PrismaService } from 'src/db-service.service';
import { GroupController } from './group.controller';

@Module({
  providers: [GroupService,PrismaService],
  controllers: [GroupController],
})
export class GroupModule {}
