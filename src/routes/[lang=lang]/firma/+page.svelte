<script lang="ts">
  import Content from "$components/content.svelte";
  import Hero from "$components/hero.svelte";
  import Iframe from "$components/iframe.svelte";
  import StructuredText from "$components/structured-text.svelte";
  import type { PageProps } from "./$types";
  const { data }: PageProps = $props();
</script>

<Hero {...data.hero} />
<Content>
  <h1>{data.heading}</h1>
  <Iframe
    allow="fullscreen; picture-in-picture"
    loading="lazy"
    src="https://www.youtube-nocookie.com/embed/M3-n0Gf2f2c"
    title="SwissPlant: Gemüsebau im Berner Seeland"
  />
  <StructuredText {...data.structuredText} />
</Content>
