import { CreateGroupDto } from './create-group.dto';
import { UpdateGroupDto } from './update-group.dto';
import { PrismaService } from 'src/db-service.service';
import { ManageGroupMembershipDto } from './manage-group-membership.dto';
export declare class GroupService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createGroupDto: CreateGroupDto): import(".prisma/client").Prisma.Prisma__GroupClient<{
        id: number;
        name: string;
        platoonId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        users: {
            id: number;
            name: string;
            email: string;
            password: string;
            callUpNumber: string;
            stateCode: string;
            platoonId: number;
            groupId: number;
            createdAt: Date;
        }[];
    } & {
        id: number;
        name: string;
        platoonId: number;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__GroupClient<{
        id: number;
        name: string;
        platoonId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateGroupDto: UpdateGroupDto): import(".prisma/client").Prisma.Prisma__GroupClient<{
        id: number;
        name: string;
        platoonId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    addUserToGroup(groupId: number, manageGroupMembershipDto: ManageGroupMembershipDto): Promise<{
        id: number;
        name: string;
        platoonId: number;
    }>;
    removeUserFromGroup(groupId: number, manageGroupMembershipDto: ManageGroupMembershipDto): Promise<{
        id: number;
        name: string;
        platoonId: number;
    }>;
    u: any;
    remove(id: number): import(".prisma/client").Prisma.Prisma__GroupClient<{
        id: number;
        name: string;
        platoonId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
