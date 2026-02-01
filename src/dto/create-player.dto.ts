import { IsString, IsNumber, IsOptional, IsDateString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePlayerDto {
  @ApiProperty({
    description: 'Player username',
    example: 'player1',
  })
  @IsString()
  username: string;

  @ApiPropertyOptional({
    description: 'Player time (ISO 8601 format)',
    example: '2024-01-01T00:00:00Z',
  })
  @IsDateString()
  @IsOptional()
  time?: string;

  @ApiPropertyOptional({
    description: 'Player points',
    example: 100,
    default: 0,
  })
  @IsNumber()
  @IsOptional()
  points?: number;

  @ApiPropertyOptional({
    description: 'Player level',
    example: 5,
    default: 1,
  })
  @IsNumber()
  @IsOptional()
  level?: number;
}
