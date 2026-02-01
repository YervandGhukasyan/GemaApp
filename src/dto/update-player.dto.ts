import { IsString, IsNumber, IsOptional, IsDateString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdatePlayerDto {
  @ApiPropertyOptional({
    description: 'Player username',
    example: 'updated_player',
  })
  @IsString()
  @IsOptional()
  username?: string;

  @ApiPropertyOptional({
    description: 'Player time (ISO 8601 format)',
    example: '2024-01-02T00:00:00Z',
  })
  @IsDateString()
  @IsOptional()
  time?: string;

  @ApiPropertyOptional({
    description: 'Player points',
    example: 200,
  })
  @IsNumber()
  @IsOptional()
  points?: number;

  @ApiPropertyOptional({
    description: 'Player level',
    example: 10,
  })
  @IsNumber()
  @IsOptional()
  level?: number;
}
