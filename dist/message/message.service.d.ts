import { CreateMessageDto } from './create-message.dto';
import { UpdateMessageDto } from './update-message.dto';
import { PrismaService } from 'src/db-service.service';
export declare class MessageService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createMessageDto: CreateMessageDto): import(".prisma/client").Prisma.Prisma__MessageClient<{
        id: number;
        content: string;
        createdAt: Date;
        userId: number;
        groupId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        content: string;
        createdAt: Date;
        userId: number;
        groupId: number;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__MessageClient<{
        id: number;
        content: string;
        createdAt: Date;
        userId: number;
        groupId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateMessageDto: UpdateMessageDto): import(".prisma/client").Prisma.Prisma__MessageClient<{
        id: number;
        content: string;
        createdAt: Date;
        userId: number;
        groupId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__MessageClient<{
        id: number;
        content: string;
        createdAt: Date;
        userId: number;
        groupId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
