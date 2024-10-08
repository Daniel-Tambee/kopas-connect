import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { PrismaService } from 'src/db-service.service';
import { MessageGateway } from './message.gateway';

@Module({
  providers: [MessageService,PrismaService, MessageGateway]
})
export class MessageModule {}
