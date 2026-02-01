import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayersModule } from './players/players.module';
import { Player } from './entities/player.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME || 'app',
      password: process.env.DB_PASSWORD || 'ChangeMeStrong!',
      database: process.env.DB_NAME || 'gameapp',
      entities: [Player],
      synchronize: process.env.NODE_ENV !== 'production',
      logging: process.env.NODE_ENV === 'development',
    }),
    PlayersModule,
  ],
})
export class AppModule {}
