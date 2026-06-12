import type { Hero, SplitTile, StructuredText, Table, TeamGrid } from "$components";
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
