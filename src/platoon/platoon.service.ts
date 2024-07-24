import { Injectable } from '@nestjs/common';
import { CreatePlatoonDto } from './create-platoon.dto';
import { UpdatePlatoonDto } from './update-platoon.dto';
import { PrismaService } from 'src/db-service.service';

@Injectable()
export class PlatoonService {
  constructor(private prisma: PrismaService) {}

  create(createPlatoonDto: CreatePlatoonDto) {
    return this.prisma.platoon.create({ data: createPlatoonDto });
  }

  findAll() {
    return this.prisma.platoon.findMany();
  }

  findOne(id: number) {
    return this.prisma.platoon.findUnique({ where: { id } });
  }

  update(id: number, updatePlatoonDto: UpdatePlatoonDto) {
    return this.prisma.platoon.update({ where: { id }, data: updatePlatoonDto });
  }

  remove(id: number) {
    return this.prisma.platoon.delete({ where: { id } });
  }
}
