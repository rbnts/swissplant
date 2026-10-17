<script lang="ts">
  import Content from "#lib/components/content.svelte";
  import Hero from "#lib/components/hero.svelte";
  import Iframe from "#lib/components/iframe.svelte";
  import StructuredText from "#lib/components/structured-text.svelte";
  import Table from "#lib/components/table.svelte";
  import type { PageProps } from "./$types";
  const { data }: PageProps = $props();
</script>

<Hero {...data.hero} />
<Content>
  <h1>{data.heading}</h1>

  {#if data.table}
    <Table {...data.table} />
  {/if}

  <StructuredText {...data.structuredText} />

  <Iframe
    allow="fullscreen; picture-in-picture"
    loading="lazy"
    src="https://www.youtube-nocookie.com/embed/H2mMli5KiKY"
    title="SwissPlant: PlantTape im Einsatz"
  />
</Content>
