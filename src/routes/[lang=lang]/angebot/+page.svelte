<script lang="ts">
  import Content from "$components/content.svelte";
  import Hero from "$components/hero.svelte";
  import Iframe from "$components/iframe.svelte";
  import StructuredText from "$components/structured-text.svelte";
  import Table from "$components/table.svelte";
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
