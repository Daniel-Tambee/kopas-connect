// src/group/dto/create-group.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt } from 'class-validator';

export class CreateGroupDto {
  @ApiProperty({ example: 'Group 1' })
  @IsString()
  name: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  platoonId: number;
}
