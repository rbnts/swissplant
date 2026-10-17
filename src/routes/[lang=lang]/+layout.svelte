<script lang="ts">
  import { page } from "$app/state";
  import Footer from "#lib/components/footer.svelte";
  import Navigation from "#lib/components/navigation.svelte";
  import { langs } from "#lib/utils/lang.ts";
  import "#lib/styles/base.scss";
  import type { LayoutProps } from "./$types";

  const { children, params }: LayoutProps = $props();

  const pageMeta = $derived.by(() => {
    const { meta } = page.data;
    const { url } = page;
    const { lang } = params;

    const canonical = `https://swissplant.ch${url.pathname}`;
    const alternates = [
      {
        href: canonical.replace(`/${lang}`, () => `/${langs[0]}`),
        hreflang: "x-default"
      },
      ...langs.map(item => ({
        href: canonical.replace(`/${lang}`, () => `/${item}`),
        hreflang: item
      }))
    ];

    return { ...meta, lang, canonical, alternates };
  });

  $effect(() => {
    document.documentElement.lang = pageMeta.lang;
  });
</script>

<svelte:head>
  <meta name="description" content={pageMeta.description} />
  <title>{pageMeta.title}</title>

  <link href={pageMeta.canonical} rel="canonical" />
  {#each pageMeta.alternates as { href, hreflang } (hreflang)}
    <link {href} {hreflang} rel="alternate" />
  {/each}
</svelte:head>

<Navigation lang={params.lang} />
<main>{@render children()}</main>
<Footer lang={params.lang} />
