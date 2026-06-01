# Open-CaseUI

<p align="center">
  <img src="frontend/static/brand/open-caseui-logo.png" alt="Open-CaseUI logo" width="180">
</p>

User-friendly case management for the AI era. Cases are anything you want to track. Define your case types. Build workflows for your cases. Run the world.

## Project structure

```
open-caseui/
├── frontend/   # SvelteKit 2 + Svelte 5 + TypeScript + Tailwind CSS v4
└── backend/    # FastAPI, managed with uv
```

## Prerequisites

- **Node.js** 20+ and npm (developed against Node 24)
- **Python** 3.14
- **[uv](https://docs.astral.sh/uv/)** for the backend
  (`curl -LsSf https://astral.sh/uv/install.sh | sh`)

## Backend (FastAPI)

```sh
cd backend
uv sync                              # create venv + install dependencies
uv run fastapi dev app/main.py       # dev server on http://localhost:8000
```

- Health check: `curl http://localhost:8000/health` → `{"status":"ok"}`
- Interactive API docs: http://localhost:8000/docs

## Frontend (SvelteKit)

```sh
cd frontend
npm install
npm run dev                          # dev server on http://localhost:5173
```

Other useful scripts:

- `npm run check` — type-check with svelte-check
- `npm run lint` / `npm run format` — Prettier + ESLint
- `npm run build` — production build
- `npm run test:unit` — Vitest unit tests
- `npm run test:e2e` — Playwright end-to-end tests

## Not yet wired up

Database (Postgres + SQLAlchemy + Alembic), business API endpoints, CORS, a generated
TypeScript API client, authentication, a production deploy adapter, and CI. The structure
leaves clean seams to add these next.
