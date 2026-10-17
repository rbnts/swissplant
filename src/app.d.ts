import type { Lang as Language } from "#lib/utils/lang.ts";

// https://svelte.dev/docs/kit/types#app.d.ts
declare global {
  namespace App {
    type Lang = Language;
  }
}
