<script lang="ts">
  import Hero from "#lib/components/hero.svelte";
  import SplitTile from "#lib/components/split-tile.svelte";
  import type { PageProps } from "./$types";
  const { data }: PageProps = $props();
</script>

<h1 class="sr-only">{data.heading}</h1>
<Hero {...data.hero} />
{#each data.splitTiles as splitTile (splitTile.title)}
  <SplitTile {...splitTile} />
{/each}
