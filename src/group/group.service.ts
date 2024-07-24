// src/group/group.service.ts
import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './create-group.dto';
import { UpdateGroupDto } from './update-group.dto';
import { PrismaService } from 'src/db-service.service';
import { ManageGroupMembershipDto } from './manage-group-membership.dto';

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) { }

  create(createGroupDto: CreateGroupDto) {
    return this.prisma.group.create({ data: createGroupDto });
  }

  findAll() {
    return this.prisma.group.findMany({
      include: {
        users: true
      }
    });
  }

  findOne(id: number) {
    return this.prisma.group.findUnique({ where: { id } });
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return this.prisma.group.update({ where: { id }, data: updateGroupDto });
  }
  async addUserToGroup(groupId: number, manageGroupMembershipDto: ManageGroupMembershipDto) {
    return this.prisma.group.update({
      where: { id: groupId },
      data: {
        users: {
          connect: { id: manageGroupMembershipDto.userId },
        },
      },
    });
  }

  async removeUserFromGroup(groupId: number, manageGroupMembershipDto: ManageGroupMembershipDto) {
    return this.prisma.group.update({
      where: { id: groupId },
      data: {
        users: {
          disconnect: { id: manageGroupMembershipDto.userId },
        },
      },
    });
  } u
  remove(id: number) {
    return this.prisma.group.delete({ where: { id } });
  }
}