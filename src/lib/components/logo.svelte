<script lang="ts" module>
  import agriplantBare from "$svg/agriplant-bare.svg?raw";
  import agriplant from "$svg/agriplant.svg?raw";
  import swissplantBare from "$svg/swissplant-bare.svg?raw";
  import swissplant from "$svg/swissplant.svg?raw";

  const svgMap = { swissplantBare, agriplantBare, swissplant, agriplant } as const;

  interface Props {
    name: keyof typeof svgMap;
  }
</script>

<script lang="ts">
  const { name }: Props = $props();
</script>

<div class="icon" aria-hidden="true">
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html svgMap[name]}
</div>

<style lang="scss">
  .icon {
    display: inline-grid;
    place-items: center;
    width: 100%;
    height: 100%;
  }
</style>
