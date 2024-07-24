import { Server, Socket } from 'socket.io';
import { MessageService } from './message.service';
import { CreateMessageDto } from './create-message.dto';
import { PrismaService } from 'src/db-service.service';
export declare class MessageGateway {
    private readonly messageService;
    private readonly prisma;
    server: Server;
    constructor(messageService: MessageService, prisma: PrismaService);
    handleJoinGroup(groupId: number, client: Socket): Promise<void>;
    handleLeaveGroup(groupId: number, client: Socket): Promise<void>;
    handleMessage(createMessageDto: CreateMessageDto): Promise<{
        id: number;
        content: string;
        createdAt: Date;
        userId: number;
        groupId: number;
    }>;
    handleFindAllMessages(groupId: number): Promise<{
        id: number;
        content: string;
        createdAt: Date;
        userId: number;
        groupId: number;
    }[]>;
}
