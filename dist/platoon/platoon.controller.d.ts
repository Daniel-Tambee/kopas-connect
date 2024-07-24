import { PlatoonService } from './platoon.service';
import { CreatePlatoonDto } from './create-platoon.dto';
import { UpdatePlatoonDto } from './update-platoon.dto';
export declare class PlatoonController {
    private readonly platoonService;
    constructor(platoonService: PlatoonService);
    create(createPlatoonDto: CreatePlatoonDto): import(".prisma/client").Prisma.Prisma__PlatoonClient<{
        id: number;
        name: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__PlatoonClient<{
        id: number;
        name: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updatePlatoonDto: UpdatePlatoonDto): import(".prisma/client").Prisma.Prisma__PlatoonClient<{
        id: number;
        name: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__PlatoonClient<{
        id: number;
        name: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
