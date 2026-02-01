import { IsString, IsNumber, IsOptional, IsDateString } from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  username: string;

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
