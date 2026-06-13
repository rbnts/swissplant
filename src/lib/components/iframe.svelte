<script lang="ts">
  import type { HTMLIframeAttributes } from "svelte/elements";

  interface Props extends HTMLIframeAttributes {
    src: string;
    title: string;
  }

  const { ...attributes }: Props = $props();
  const origin = $derived(new URL(attributes.src).origin);
</script>

<svelte:head>
  <link href={origin} rel="preconnect" />
</svelte:head>

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
