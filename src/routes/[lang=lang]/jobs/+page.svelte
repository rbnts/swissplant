<script lang="ts">
  import Content from "$components/content.svelte";
  import Hero from "$components/hero.svelte";
  import StructuredText from "$components/structured-text.svelte";
  import type { PageProps } from "./$types";
  const { data }: PageProps = $props();
</script>

<Hero {...data.hero} />
<Content>
  <h1>{data.heading}</h1>
  <StructuredText {...data.structuredText} />
  <hr />
  <ul>
    <li>{data.noPositions}</li>
  </ul>
</Content>
