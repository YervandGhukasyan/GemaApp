# GameApp

A NestJS TypeScript application that provides HTTP interface for managing player data (username, time, points, level) in PostgreSQL database.

## Features

- RESTful API endpoints for player management
- PostgreSQL database integration using TypeORM
- Swagger/OpenAPI documentation for API testing
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

2. Set up PostgreSQL database using Docker:
```bash
docker run -d \
  --name postgres \
  --restart unless-stopped \
  -e POSTGRES_USER=app \
  -e POSTGRES_PASSWORD='ChangeMeStrong!' \
  -e POSTGRES_DB=gameapp \
  -p 5432:5432 \
  -v ~/pgdata:/var/lib/postgresql/data \
  postgres:16
```

3. Configure environment variables (optional, defaults match Docker setup):
Create a `.env` file in the root directory:
```
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=app
DB_PASSWORD=ChangeMeStrong!
DB_NAME=gameapp
PORT=3000
NODE_ENV=development
```

**Note:** The application is pre-configured to work with the Docker PostgreSQL setup above. Default credentials are:
- Username: `app`
- Password: `ChangeMeStrong!`
- Database: `gameapp`

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

## Swagger Documentation

Once the application is running, you can access the Swagger UI at:
- **Swagger UI**: `http://localhost:3000/api`

The Swagger interface allows you to:
- View all available API endpoints
- Test API requests directly from the browser
- See request/response schemas
- Try out different endpoints with sample data

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
