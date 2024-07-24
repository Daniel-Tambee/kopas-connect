import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';
import { PrismaService } from 'src/db-service.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        name: string;
        email: string;
        password: string;
        callUpNumber: string;
        stateCode: string;
        platoonId: number;
        groupId: number;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        email: string;
        password: string;
        callUpNumber: string;
        stateCode: string;
        platoonId: number;
        groupId: number;
        createdAt: Date;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        name: string;
        email: string;
        password: string;
        callUpNumber: string;
        stateCode: string;
        platoonId: number;
        groupId: number;
        createdAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateUserDto: UpdateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        name: string;
        email: string;
        password: string;
        callUpNumber: string;
        stateCode: string;
        platoonId: number;
        groupId: number;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        name: string;
        email: string;
        password: string;
        callUpNumber: string;
        stateCode: string;
        platoonId: number;
        groupId: number;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
