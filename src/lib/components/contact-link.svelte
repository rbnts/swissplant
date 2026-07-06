<script lang="ts">
  import { reverse } from "$lib/utils/string";
  import type { Attachment } from "svelte/attachments";
  import type { HTMLAnchorAttributes } from "svelte/elements";
  import { on } from "svelte/events";

  interface Props extends HTMLAnchorAttributes {
    label: string;
    href: `mailto:${string}` | `tel:${string}`;
  }

  const { label, href, ...attributes }: Props = $props();

  const mounted: Attachment<HTMLAnchorElement> = (element) => {
    const address = href.split(":").at(1) ?? "";

    element.dataset["label"] = reverse(address);

    on(element, "click", (event) => {
      event.preventDefault();
      location.assign(href);
    });
  };
</script>

<a {@attach mounted} {...attributes} href="#!" rel="external">
  <span class="sr-only">{label}</span>
</a>

<style lang="scss">
  a::after {
    content: attr(data-label) / "";
    direction: rtl;
    unicode-bidi: bidi-override;
  }
</style>
