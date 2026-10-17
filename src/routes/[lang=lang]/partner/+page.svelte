<script lang="ts">
  import type { PageProps } from "./$types";
  import De from "./de.svelte";
  import En from "./en.svelte";

  const { params }: PageProps = $props();
</script>

{#if params.lang === "de"}
  <De />
{:else}
  <En />
{/if}
