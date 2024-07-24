import { GroupService } from './group.service';
import { CreateGroupDto } from './create-group.dto';
import { UpdateGroupDto } from './update-group.dto';
import { ManageGroupMembershipDto } from './manage-group-membership.dto';
export declare class GroupController {
    private readonly groupService;
    constructor(groupService: GroupService);
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__GroupClient<{
        id: number;
        name: string;
        platoonId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateGroupDto: UpdateGroupDto): import(".prisma/client").Prisma.Prisma__GroupClient<{
        id: number;
        name: string;
        platoonId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    addUserToGroup(id: string, manageGroupMembershipDto: ManageGroupMembershipDto): Promise<{
        id: number;
        name: string;
        platoonId: number;
    }>;
    removeUserFromGroup(id: string, manageGroupMembershipDto: ManageGroupMembershipDto): Promise<{
        id: number;
        name: string;
        platoonId: number;
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__GroupClient<{
        id: number;
        name: string;
        platoonId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
