// src/message/message.gateway.ts
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MessageService } from './message.service';
import { CreateMessageDto } from './create-message.dto';
import { PrismaService } from 'src/db-service.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class MessageGateway {
  @WebSocketServer()
  server: Server;

  constructor(
    private readonly messageService: MessageService,
    private readonly prisma: PrismaService,
  ) {}

  @SubscribeMessage('joinGroup')
  async handleJoinGroup(@MessageBody() groupId: number, @ConnectedSocket() client: Socket) {
    client.join(`group_${groupId}`);
  }

  @SubscribeMessage('leaveGroup')
  async handleLeaveGroup(@MessageBody() groupId: number, @ConnectedSocket() client: Socket) {
    client.leave(`group_${groupId}`);
  }

  @SubscribeMessage('sendMessage')
  async handleMessage(@MessageBody() createMessageDto: CreateMessageDto) {
    const message = await this.messageService.create(createMessageDto);
    this.server.to(`group_${createMessageDto.groupId}`).emit('message', message);
    return message;
  }

  @SubscribeMessage('findAllMessages')
  async handleFindAllMessages(@MessageBody() groupId: number) {
    const messages = await this.prisma.message.findMany({
      where: { groupId },
    });
    return messages;
  }
}
