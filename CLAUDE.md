# CLAUDE.md

Static marketing site for SwissPlant GmbH, built with SvelteKit + `adapter-static` (fully pre-rendered, no server runtime).

## Commands

```bash
node --run start # dev server
node --run build # production build → build/
```

There's no test, lint, or typecheck scripts. Run via `eslint`, `stylelint`, `svelte-check` directly.

## Architecture

All content routes live under `src/routes/[lang=lang]/` — the `lang` param matcher constrains it to `"de" | "en"`. The root `/` redirects client-side based on browser language.

Translations are inline in each route's `+page.server.ts` as a `translations` object keyed by `App.Lang`. Every page also exports `entries` to generate static paths for both locales.
