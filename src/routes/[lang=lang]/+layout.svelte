<script lang="ts">
  import { resolve } from "$app/paths";
  import { page } from "$app/state";
  import Footer from "#lib/components/footer.svelte";
  import Navigation from "#lib/components/navigation.svelte";
  import { isLangRoute, langs } from "#lib/utils/lang.ts";
  import "#lib/styles/base.scss";
  import type { LayoutProps } from "./$types";

  const { children, params }: LayoutProps = $props();

  const route = $derived(
    isLangRoute(page.route.id) ? page.route.id : "/[lang=lang]"
  );

  const absoluteHref = (lang: App.Lang) =>
    new URL(resolve(route, { lang }), page.url.href).href;

  $effect(() => {
    document.documentElement.lang = params.lang;
  });
</script>

<svelte:head>
  <link href={absoluteHref(params.lang)} rel="canonical" />
  <link href={absoluteHref(langs[0])} hreflang="x-default" rel="alternate" />
  {#each langs as lang (lang)}
    <link href={absoluteHref(lang)} hreflang={lang} rel="alternate" />
  {/each}
</svelte:head>

<Navigation lang={params.lang} />
<main>{@render children()}</main>
<Footer lang={params.lang} />
