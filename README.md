# GameApp

A NestJS TypeScript application that provides HTTP interface for managing player data (username, time, points, level) in PostgreSQL database.

## Features

- RESTful API endpoints for player management
- PostgreSQL database integration using TypeORM
- Data validation using class-validator
- TypeScript support
- Automatic database schema synchronization (development mode)

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
```

2. Set up PostgreSQL database:
```bash
createdb gameapp
```

3. Configure environment variables (optional, defaults are provided):
Create a `.env` file in the root directory:
```
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=gameapp
PORT=3000
NODE_ENV=development
```

## Running the Application

Development mode:
```bash
npm run start:dev
```

Production mode:
```bash
npm run build
npm run start:prod
```

The application will be available at `http://localhost:3000`

## API Endpoints

### Create a new player
```http
POST /players
Content-Type: application/json

{
  "username": "player1",
  "time": "2024-01-01T00:00:00Z",
  "points": 100,
  "level": 5
}
```

### Get all players
```http
GET /players
```

### Get a player by ID
```http
GET /players/:id
```

### Update a player by ID
```http
PATCH /players/:id
Content-Type: application/json

{
  "username": "updated_username",
  "time": "2024-01-02T00:00:00Z",
  "points": 200,
  "level": 10
}
```

### Update a player by username
```http
PATCH /players/username/:username
Content-Type: application/json

{
  "time": "2024-01-02T00:00:00Z",
  "points": 200,
  "level": 10
}
```

### Delete a player
```http
DELETE /players/:id
```

## Database Schema

The `players` table contains the following fields:
- `id` (auto-generated primary key)
- `username` (string, required)
- `time` (timestamp, defaults to current timestamp)
- `points` (integer, defaults to 0)
- `level` (integer, defaults to 1)
- `createdAt` (auto-generated timestamp)
- `updatedAt` (auto-generated timestamp)

## Project Structure

```
src/
├── entities/          # TypeORM entities
│   └── player.entity.ts
├── dto/              # Data Transfer Objects
│   ├── create-player.dto.ts
│   └── update-player.dto.ts
├── players/          # Players module
│   ├── players.controller.ts
│   ├── players.service.ts
│   └── players.module.ts
├── app.module.ts     # Root application module
└── main.ts          # Application entry point
```

## Development

Run linting:
```bash
npm run lint
```

Run tests:
```bash
npm run test
```

## License

MIT
