<script lang="ts">
  import { page } from "$app/state";
  import Footer from "$components/footer.svelte";
  import Navigation from "$components/navigation.svelte";
  import { match as isLang } from "$params/lang";
  import "$styles/base.scss";
  import type { LayoutProps } from "./$types";

  const { children }: LayoutProps = $props();

  const pageMeta = $derived.by(() => {
    const { meta } = page.data;
    const { url } = page;
    const { params } = page;
    const lang = isLang(params["lang"]) ? params["lang"] : "de";

    const canonical = `https://swissplant.ch${url.pathname}`;
    const alternates = [
      {
        href: canonical.replace(`/${lang}`, `/de`),
        hreflang: "x-default"
      },
      ...["en", "de"].map(item => ({
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
