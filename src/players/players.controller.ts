import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from '../dto/create-player.dto';
import { UpdatePlayerDto } from '../dto/update-player.dto';

@ApiTags('players')
@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new player' })
  @ApiResponse({
    status: 201,
    description: 'Player successfully created',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiBody({ type: CreatePlayerDto })
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playersService.create(createPlayerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all players' })
  @ApiResponse({
    status: 200,
    description: 'List of all players',
  })
  findAll() {
    return this.playersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a player by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Player ID' })
  @ApiResponse({
    status: 200,
    description: 'Player found',
  })
  @ApiResponse({ status: 404, description: 'Player not found' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.playersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a player by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Player ID' })
  @ApiResponse({
    status: 200,
    description: 'Player successfully updated',
  })
  @ApiResponse({ status: 404, description: 'Player not found' })
  @ApiBody({ type: UpdatePlayerDto })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePlayerDto: UpdatePlayerDto,
  ) {
    return this.playersService.update(id, updatePlayerDto);
  }

  @Patch('username/:username')
  @ApiOperation({ summary: 'Update a player by username' })
  @ApiParam({ name: 'username', type: 'string', description: 'Player username' })
  @ApiResponse({
    status: 200,
    description: 'Player successfully updated',
  })
  @ApiResponse({ status: 404, description: 'Player not found' })
  @ApiBody({ type: UpdatePlayerDto })
  updateByUsername(
    @Param('username') username: string,
    @Body() updatePlayerDto: UpdatePlayerDto,
  ) {
    return this.playersService.updateByUsername(username, updatePlayerDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a player by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Player ID' })
  @ApiResponse({
    status: 204,
    description: 'Player successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'Player not found' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.playersService.remove(id);
  }
}
