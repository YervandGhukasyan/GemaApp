import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('players')
export class Player {
  @ApiProperty({ description: 'Player ID', example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Player username', example: 'player1' })
  @Column({ type: 'varchar', length: 255 })
  username: string;

  @ApiProperty({ description: 'Player time', example: '2024-01-01T00:00:00Z' })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  time: Date;

  @ApiProperty({ description: 'Player points', example: 100 })
  @Column({ type: 'int', default: 0 })
  points: number;

  @ApiProperty({ description: 'Player level', example: 5 })
  @Column({ type: 'int', default: 1 })
  level: number;

  @ApiProperty({ description: 'Creation timestamp' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'Last update timestamp' })
  @UpdateDateColumn()
  updatedAt: Date;
}
