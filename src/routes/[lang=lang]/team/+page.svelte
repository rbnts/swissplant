<script lang="ts">
  import Content from "#lib/components/content.svelte";
  import Hero from "#lib/components/hero.svelte";
  import TeamGrid from "#lib/components/team-grid.svelte";
  import type { PageProps } from "./$types";
  const { data }: PageProps = $props();
</script>

<Hero {...data.hero} />
<Content>
  <h1>{data.heading}</h1>
  <TeamGrid {...data.teamGrid} />
</Content>
