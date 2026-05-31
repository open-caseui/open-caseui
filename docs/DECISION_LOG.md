# Decision Log

Key decisions for open-caseui, newest first.

## 2026-05-31

- **Repo layout:** flat `frontend/` + `backend/` at the repo root — conventional for a single
  frontend + single Python API
- **Frontend stack:** SvelteKit 2 + Svelte 5 (runes) + TypeScript, scaffolded with the official
  `npx sv create` CLI
- **Styling:** Tailwind CSS v4 via the `@tailwindcss/vite` plugin
- **Frontend tooling:** Prettier, ESLint, Vitest (unit), and Playwright (e2e) add-ons
- **Backend stack:** Python 3 (3.14) + FastAPI, dependencies managed with **uv**
- **Backend tooling:** Ruff for linting + formatting, configured in `pyproject.toml`
- **First pass kept minimal:** backend exposes only `GET /health`; both apps just boot. No
  database, endpoints, or API client yet — wire those in a later pass.
- **Chosen but deferred:** Postgres + SQLAlchemy + Alembic for persistence; a typed TypeScript
  client generated from FastAPI's OpenAPI schema (`openapi-typescript` + `openapi-fetch`).
