import type Hero from "#lib/components/hero.svelte";
import type SplitTile from "#lib/components/split-tile.svelte";
import type StructuredText from "#lib/components/structured-text.svelte";
import type Table from "#lib/components/table.svelte";
import type TeamGrid from "#lib/components/team-grid.svelte";
import type { Lang as Language, LangRoute as LanguageRoute } from "#lib/utils/lang.ts";
import "@total-typescript/ts-reset";
import type { ComponentProps } from "svelte";

// https://svelte.dev/docs/kit/types#app.d.ts
declare global {
  namespace App {
    type Lang = Language;
    type Translations = Record<Lang, ContentPageData>;
    type NavigationItem = Record<Lang, string> & { route: LanguageRoute };

    interface ContentPageData {
      meta: {
        title: string;
        description: string;
      };
      heading: string;
      noPositions?: string;
      hero: ComponentProps<typeof Hero>;
      splitTiles?: Array<ComponentProps<typeof SplitTile>>;
      teamGrid?: ComponentProps<typeof TeamGrid>;
      table?: ComponentProps<typeof Table>;
      structuredText?: ComponentProps<typeof StructuredText>;
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-object-type -- allow interface merging
    interface PageData extends ContentPageData {}
  }
}
