<script lang="ts">
  import { page } from "$app/state";
  import Footer from "$components/footer.svelte";
  import Navigation from "$components/navigation.svelte";
  import { getLang, langs } from "$lib/utils/lang";
  import "$styles/base.scss";
  import type { LayoutProps } from "./$types";

  const { children }: LayoutProps = $props();

  const pageMeta = $derived.by(() => {
    const { meta } = page.data;
    const { url } = page;
    const { params } = page;
    const lang = getLang(params["lang"]);

    const canonical = `https://swissplant.ch${url.pathname}`;
    const alternates = [
      {
        href: canonical.replace(`/${lang}`, `/${langs[0]}`),
        hreflang: "x-default"
      },
      ...langs.map(item => ({
        href: canonical.replace(`/${lang}`, `/${item}`),
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

<Navigation />
<main>{@render children()}</main>
<Footer />
