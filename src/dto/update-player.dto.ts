import { IsString, IsNumber, IsOptional, IsDateString } from 'class-validator';

export class UpdatePlayerDto {
  @IsString()
  @IsOptional()
  username?: string;

  @IsDateString()
  @IsOptional()
  time?: string;

  @IsNumber()
  @IsOptional()
  points?: number;

  @IsNumber()
  @IsOptional()
  level?: number;
}
