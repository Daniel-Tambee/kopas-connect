// src/group/group.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto } from './create-group.dto';
import { UpdateGroupDto } from './update-group.dto';
import { ApiTags } from '@nestjs/swagger';
import { ManageGroupMembershipDto } from './manage-group-membership.dto';

@Controller('groups')
@ApiTags('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) { }

  @Post()
  create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupService.create(createGroupDto);
  }

  @Get()
  findAll() {
    return this.groupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto) {
    return this.groupService.update(+id, updateGroupDto);
  }
  @Patch(':id/add-user')
  addUserToGroup(@Param('id') id: string, @Body() manageGroupMembershipDto: ManageGroupMembershipDto) {
    return this.groupService.addUserToGroup(+id, manageGroupMembershipDto);
  }

  @Patch(':id/remove-user')
  removeUserFromGroup(@Param('id') id: string, @Body() manageGroupMembershipDto: ManageGroupMembershipDto) {
    return this.groupService.removeUserFromGroup(+id, manageGroupMembershipDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupService.remove(+id);
  }
}