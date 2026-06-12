<script lang="ts">
  interface Props {
    html: string;
  }

  const { html }: Props = $props();
</script>

<section class="structured-text">
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html html}
</section>

<style lang="scss">
  :global .structured-text > * {
    margin-top: 1em;
  }
</style>
