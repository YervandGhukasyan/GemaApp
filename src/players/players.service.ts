import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from '../entities/player.entity';
import { CreatePlayerDto } from '../dto/create-player.dto';
import { UpdatePlayerDto } from '../dto/update-player.dto';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player)
    private playersRepository: Repository<Player>,
  ) {}

  async create(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const player = this.playersRepository.create({
      ...createPlayerDto,
      time: createPlayerDto.time ? new Date(createPlayerDto.time) : new Date(),
    });
    return await this.playersRepository.save(player);
  }

  async findAll(): Promise<Player[]> {
    return await this.playersRepository.find({
      order: { points: 'DESC' },
      take: 20,
    });
  }

  async findOne(id: number): Promise<Player> {
    const player = await this.playersRepository.findOne({ where: { id } });
    if (!player) {
      throw new NotFoundException(`Player with ID ${id} not found`);
    }
    return player;
  }

  async update(id: number, updatePlayerDto: UpdatePlayerDto): Promise<Player> {
    const player = await this.findOne(id);

    const updateData: Partial<Player> = {
      ...updatePlayerDto,
      time: updatePlayerDto.time ? new Date(updatePlayerDto.time) : player.time,
    };

    Object.assign(player, updateData);

    return await this.playersRepository.save(player);
  }

  async remove(id: number): Promise<void> {
    const player = await this.findOne(id);
    await this.playersRepository.remove(player);
  }

  async updateByUsername(username: string, updatePlayerDto: UpdatePlayerDto): Promise<Player> {
    const player = await this.playersRepository.findOne({ where: { username } });
    if (!player) {
      throw new NotFoundException(`Player with username ${username} not found`);
    }

    const updateData: Partial<Player> = {
      ...updatePlayerDto,
      time: updatePlayerDto.time ? new Date(updatePlayerDto.time) : player.time,
    };

    Object.assign(player, updateData);

    return await this.playersRepository.save(player);
  }
}
