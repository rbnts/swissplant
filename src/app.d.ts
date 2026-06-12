import type Hero from "$components/hero.svelte";
import type SplitTile from "$components/split-tile.svelte";
import type StructuredText from "$components/structured-text.svelte";
import type Table from "$components/table.svelte";
import type TeamGrid from "$components/team-grid.svelte";
import "@total-typescript/ts-reset";
import type { ComponentProps } from "svelte";

// https://svelte.dev/docs/kit/types#app.d.ts
declare global {
  namespace App {
    type Lang = "de" | "en";
    type Translations = Record<Lang, ContentPageData>;

    interface ContentPageData {
      meta: {
        title: string;
        description: string;
      };
      heading: string;
      noPositions?: string;
      hero: ComponentProps<typeof Hero>;
      splitTiles?: ComponentProps<typeof SplitTile>[];
      teamGrid?: ComponentProps<typeof TeamGrid>;
      table?: ComponentProps<typeof Table>;
      structuredText?: ComponentProps<typeof StructuredText>;
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-object-type -- allow interface merging
    interface PageData extends ContentPageData {}
  }
}
