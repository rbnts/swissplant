<script lang="ts">
  import type { ComponentProps } from "svelte";
  import type { HTMLImgAttributes } from "svelte/elements";
  import Iframe from "./iframe.svelte";

  interface BaseProps {
    even: boolean;
    title: string;
    description: string;
    cta: {
      label: string;
      url: string;
    };
  }

  interface ImageTileProps extends BaseProps {
    type: "image";
    image: HTMLImgAttributes;
  }

  interface IframeTileProps extends BaseProps {
    type: "iframe";
    iframe: ComponentProps<typeof Iframe>;
  }

  type Props = ImageTileProps | IframeTileProps;

  const { even, title, description, cta, ...variant }: Props = $props();
</script>

<section class="split-tile" class:even>
  {#if variant.type === "iframe"}
    <div class="split-tile-iframe">
      <Iframe {...variant.iframe} />
    </div>
  {:else}
    <img {...variant.image} class="split-tile-image" />
  {/if}

  <div class="split-tile-content">
    <h2>{title}</h2>
    <p>{description}</p>
    <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- already resolved by the page -->
    <a class="split-tile-cta" href={cta.url}>
      {cta.label}
    </a>
  </div>
</section>

<style lang="scss">
  @use "#lib/styles/media-queries" as media-queries;

  .split-tile {
    display: grid;
    place-items: center;

    @include media-queries.above-tablet {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    > * {
      min-width: 0;
    }

    &:not(:last-child) {
      border-bottom: 2px solid var(--color-black-05);

      @include media-queries.above-tablet {
        border-bottom: 0;
      }
    }
  }

  .split-tile-image,
  .split-tile-iframe {
    display: none;

    @include media-queries.above-tablet {
      display: unset;
    }
  }

  .split-tile-image {
    width: 100%;
    height: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
  }

  .split-tile-iframe {
    width: 100%;
    height: 100%;

    :global(iframe) {
      aspect-ratio: 4 / 3;
      border-radius: 0;
    }
  }

  .split-tile-content {
    width: min(100%, 640px + 30%);
    padding: 15%;

    .even > & {
      order: -1;
    }

    > * + * {
      margin-top: 1em;
    }
  }

  .split-tile-cta {
    display: inline-block;
    padding: var(--space-16) var(--space-24);
    color: var(--color-brand);
    text-decoration: none;
    border: 2px solid var(--color-brand);
    border-radius: var(--space-16);
    transition:
      color 0.3s ease-in-out,
      background-color 0.3s ease-in-out;

    &:focus-visible {
      color: var(--color-white);
      background-color: var(--color-brand);
    }

    @media (hover: hover) {
      &:hover {
        color: var(--color-white);
        background-color: var(--color-brand);
      }
    }
  }
</style>
