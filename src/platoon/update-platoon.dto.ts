// src/platoon/dto/update-platoon.dto.ts
import { PartialType } from '@nestjs/swagger';
import { CreatePlatoonDto } from './create-platoon.dto';

export class UpdatePlatoonDto extends PartialType(CreatePlatoonDto) {}
