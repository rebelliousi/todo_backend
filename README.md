# Todo API

A simple CRUD Todo API built with NestJS, using in-memory data storage.

## Tech Stack
- NestJS
- TypeScript
- class-validator (DTO validation)

## Installation

\`\`\`bash
pnpm install
\`\`\`

## Running the app

\`\`\`bash
pnpm run start:dev
\`\`\`

The server runs on `http://localhost:3000` by default.

## Endpoints

| Method | Endpoint      | Description              |
|--------|---------------|---------------------------|
| POST   | /todo         | Create a new todo         |
| GET    | /todo         | Get all todos             |
| GET    | /todo/:id     | Get a single todo by id   |
| PATCH  | /todo/:id     | Update a todo             |
| DELETE | /todo/:id     | Delete a todo             |

## Example Request

\`\`\`json
POST /todo
{
  "title": "Buy bread",
  "description": "Get it from the bakery"
}
\`\`\`