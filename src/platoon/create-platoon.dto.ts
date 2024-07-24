// src/platoon/dto/create-platoon.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePlatoonDto {
  @ApiProperty({ example: 'Alpha Platoon' })
  @IsString()
  name: string;
}
