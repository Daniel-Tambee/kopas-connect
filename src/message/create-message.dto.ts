// src/message/dto/create-message.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt } from 'class-validator';

export class CreateMessageDto {
  @ApiProperty({ example: 'Hello, World!' })
  @IsString()
  content: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  userId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  groupId: number;
}
