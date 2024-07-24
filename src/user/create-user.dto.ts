// src/user/dto/create-user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional, IsInt } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'john.doe@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'password123' })
  @IsString()
  password: string;

  @ApiProperty({ example: 'NYSC12345678' })
  @IsString()
  callUpNumber: string;

  @ApiProperty({ example: 'NY' })
  @IsOptional()
  @IsString()
  stateCode?: string;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsInt()
  platoonId?: number;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsInt()
  groupId?: number;
}
