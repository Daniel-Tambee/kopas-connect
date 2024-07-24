import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './create-message.dto';
import { UpdateMessageDto } from './update-message.dto';
import { PrismaService } from 'src/db-service.service';

@Injectable()
export class MessageService {
    constructor(private prisma: PrismaService) { }

    create(createMessageDto: CreateMessageDto) {
        return this.prisma.message.create({ data: createMessageDto });
    }

    findAll() {
        return this.prisma.message.findMany();
    }

    findOne(id: number) {
        return this.prisma.message.findUnique({ where: { id } });
    }

    update(id: number, updateMessageDto: UpdateMessageDto) {
        return this.prisma.message.update({ where: { id }, data: updateMessageDto });
    }

    remove(id: number) {
        return this.prisma.message.delete({ where: { id } });
    }
}
