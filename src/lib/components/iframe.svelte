<script lang="ts">
  import type { HTMLIframeAttributes } from "svelte/elements";

  const { ...attributes }: HTMLIframeAttributes = $props();
</script>

<iframe {...attributes}></iframe>

<style lang="scss">
  iframe {
    display: block;
    width: 100%;
    height: 100%;
    aspect-ratio: 16 / 9;
    border: 0;
    border-radius: var(--space-16);
  }
</style>
