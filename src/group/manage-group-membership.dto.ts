// src/group/dto/manage-group-membership.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class ManageGroupMembershipDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  userId: number;
}
