# AGENTS.md

Personal website for Greg Johns. Single Next.js 16 app (App Router) — not a monorepo despite `pnpm-workspace.yaml`.

## Commands

Package manager is **pnpm@11.17.0** (see `packageManager` in `package.json`). A stale `package-lock.json` is committed alongside `pnpm-lock.yaml`; ignore npm and use pnpm.

- `pnpm dev` — dev server (uses `--webpack`, opting out of Next 16's default Turbopack)
- `pnpm build` — also pinned to `--webpack`. Do not remove that flag without testing; MDX / p5 setup was validated on webpack.
- `pnpm lint` — `next lint` (ESLint 9, `next/core-web-vitals`)
- No `test` or `typecheck` scripts exist. For type checking run `pnpm exec tsc --noEmit`.

## Architecture

- Next.js **App Router** under `src/app/`. Path alias `@/*` -> `src/*`.
- Route groups:
  - `src/app/(home)/` — landing page
  - `src/app/(posts)/` — MDX-based writing/project pages; each subdir is a route (e.g. `gardens`, `eip1559`, `stateofplay`)
- `src/app/api/{getScreens,getSites}/` — route handlers
- `src/app/sketches/` — p5.js sketches via `@p5-wrapper/next` (`@p5-wrapper/react`)
- MDX is enabled: `pageExtensions` includes `md`/`mdx`, and `mdx-components.tsx` at `src/mdx-components.tsx` provides the global MDX component map.
- **Known bug in `next.config.mjs`**: `withMDX` is imported and built but the default export is `nextConfig` (unwrapped). If you touch MDX config, fix to `export default withMDX(nextConfig)`.

## Conventions

- Prettier: single quotes, semicolons, trailing commas `all`, `printWidth: 100`, 2-space tabs (`.prettierrc`).
- Styling: mix of CSS Modules-adjacent plain CSS (`src/components/*.css`, `src/app/comics.css`) + Emotion (`@emotion/react`, `@emotion/styled`). No Tailwind.
- React 19 + `reactStrictMode: true`.
- Analytics via `@vercel/analytics` in `src/components/Analytics.tsx`.

## Env

- `.env.local` currently only documents a removed `NEXT_PUBLIC_ETHERSCAN_API_KEY`. Live Etherscan integration was removed from `src/components/EthereumGasMachine.tsx`; re-add the key if restoring live data.

## Deploy

Hosted on Vercel (`https://greg-johns.vercel.app/`). No custom CI in `.github/` (empty).
