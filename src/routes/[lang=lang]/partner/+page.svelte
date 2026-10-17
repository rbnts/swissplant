<script lang="ts">
  import Content from "#lib/components/content.svelte";
  import Hero from "#lib/components/hero.svelte";
  import StructuredText from "#lib/components/structured-text.svelte";
  import type { PageProps } from "./$types";
  const { data }: PageProps = $props();
</script>

<Hero {...data.hero} />
<Content>
  <h1>{data.heading}</h1>
  <StructuredText {...data.structuredText} />
</Content>
