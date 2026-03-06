# AgroPoint

Starter backend project for AgroPoint using Node.js, Express, and TypeScript.
Project scope and product requirements are documented in [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md).

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

## Environment Variables

- `PORT`
- `NODE_ENV`
- `DATABASE_URL`
- `JWT_ACCESS_SECRET`
- `JWT_ACCESS_EXPIRES_IN`
- `BCRYPT_SALT_ROUNDS`

## Scripts

- `npm run dev` - Run server in watch mode
- `npm run build` - Compile TypeScript
- `npm start` - Run compiled server
- `npm run typecheck` - Type check without emitting files

## Health Check

- `GET /api/v1/health`

## Auth Endpoints

- `POST /api/v1/auth/register`
- `POST /api/v1/auth/login`
- `POST /api/v1/auth/logout`
- `GET /api/v1/auth/me` (requires `Authorization: Bearer <token>`)
