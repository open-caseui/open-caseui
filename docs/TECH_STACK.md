# Tech Stack

A running inventory of the technologies, libraries, and frameworks used in open-caseui.
Versions reflect the constraints declared in `frontend/package.json` and `backend/pyproject.toml`.

## Frontend

| Technology                      | Version | Purpose                          |
| ------------------------------- | ------- | -------------------------------- |
| Node.js                         | 24.x    | JavaScript runtime               |
| npm                             | 11.x    | Package manager                  |
| SvelteKit (`@sveltejs/kit`)     | ^2.57   | Full-stack web framework         |
| Svelte                          | ^5.55   | UI component framework (runes)   |
| TypeScript                      | ^6.0    | Typed JavaScript                 |
| Vite                            | ^8.0    | Build tool / dev server          |
| `@sveltejs/vite-plugin-svelte`  | ^7.0    | Svelte integration for Vite      |
| `@sveltejs/adapter-auto`        | ^7.0    | Deployment adapter (auto-detect) |
| Tailwind CSS                    | ^4.2    | Utility-first CSS                |
| `@tailwindcss/vite`             | ^4.2    | Tailwind v4 Vite plugin          |
| ESLint                          | ^10.2   | Linting                          |
| Prettier                        | ^3.8    | Code formatting                  |
| svelte-check                    | ^4.4    | Svelte/TS type checking          |
| Vitest                          | ^4.1    | Unit testing                     |
| Playwright (`@playwright/test`) | ^1.59   | End-to-end testing               |

## Backend

| Technology                    | Version                 | Purpose                         |
| ----------------------------- | ----------------------- | ------------------------------- |
| Python                        | 3.14                    | Language / runtime              |
| uv                            | 0.11.x                  | Package & environment manager   |
| FastAPI (`fastapi[standard]`) | >=0.136.3               | Web framework                   |
| Uvicorn                       | (via fastapi[standard]) | ASGI server                     |
| Starlette                     | (via FastAPI)           | ASGI toolkit underlying FastAPI |
| Pydantic                      | (via FastAPI)           | Data validation / serialization |
| Ruff                          | >=0.15.15               | Linter & formatter (dev)        |

## Database

> Planned — not yet wired up (deferred from the initial scaffold).

| Technology | Version | Purpose             |
| ---------- | ------- | ------------------- |
| PostgreSQL | TBD     | Relational database |
| SQLAlchemy | TBD     | ORM                 |
| Alembic    | TBD     | Schema migrations   |
