# Setup Notes

## Detected framework

- Vite + React single page app.
- Routing is handled client-side with `react-router`.
- Entry point: `index.html` -> `src/main.tsx`.
- Build config: `vite.config.ts`.

## Package manager

- npm.
- No lockfile was present in the export, so npm is used per the README and setup plan.

## Commands

```bash
npm install
npm run dev
npm run build
```

The local dev server defaults to:

```text
http://localhost:5173/
```

## Vercel deployment notes

- Framework preset: Vite.
- Install command: `npm install`.
- Build command: `npm run build`.
- Output directory: `dist`.
- `vercel.json` includes a SPA rewrite to `index.html` so direct visits to client routes such as `/about`, `/contact`, and `/congresses/:id` work on Vercel.
- No environment variables are required for the current static prototype.

## Issues found/fixed

- React and React DOM were declared as optional peer dependencies only. They are now explicit app dependencies so local installs and Vercel builds resolve them deterministically.
- No npm lockfile was present. Running `npm install` creates `package-lock.json`.
- No Vercel config was present. `vercel.json` was added with minimal Vite SPA deployment settings.
