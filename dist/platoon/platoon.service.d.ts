import { CreatePlatoonDto } from './create-platoon.dto';
import { UpdatePlatoonDto } from './update-platoon.dto';
import { PrismaService } from 'src/db-service.service';
export declare class PlatoonService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPlatoonDto: CreatePlatoonDto): import(".prisma/client").Prisma.Prisma__PlatoonClient<{
        id: number;
        name: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__PlatoonClient<{
        id: number;
        name: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updatePlatoonDto: UpdatePlatoonDto): import(".prisma/client").Prisma.Prisma__PlatoonClient<{
        id: number;
        name: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__PlatoonClient<{
        id: number;
        name: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
