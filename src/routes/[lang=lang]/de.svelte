<script lang="ts">
  import { resolve } from "$app/paths";
  import Hero from "#lib/components/hero.svelte";
  import SplitTile from "#lib/components/split-tile.svelte";
  import one from "#lib/img/aerials/1.avif";
  import two from "#lib/img/aerials/2.avif";
  import crates from "#lib/img/photoshoot/crates.avif";
  import machine from "#lib/img/photoshoot/machine.avif";
  import tinu from "#lib/img/photoshoot/tinu.avif";
</script>

<svelte:head>
  <title>SwissPlant GmbH — Ihr Spezialist für Gemüsejungpflanzen</title>
  <meta name="description" content="Die Swissplant GmbH ist Ihr Ansprechpartner für professionellen Gemüseanbau im Berner Seeland. Bei uns bekommen Sie Warmhauspflanzen in verschiedenen Varianten." />
</svelte:head>

<h1 class="sr-only">Startseite</h1>
<Hero
  big
  images={[
    { src: one, alt: "Luftaufnahme der SwissPlant GmbH" },
    { src: two, alt: "Luftaufnahme der SwissPlant GmbH" }
  ]}
/>
<SplitTile
  cta={{ label: "Über uns", url: resolve("/[lang=lang]/firma", { lang: "de" }) }}
  description="Die Firma SwissPlant GmbH ist Verkaufsstelle für Gemüsejungpflanzen der Firmen AgriPlant AG Schweiz und Gipmans Holland."
  even={false}
  image={{ src: tinu, alt: "Martin Löffel, Gründer der SwissPlant GmbH.", loading: "lazy", fetchpriority: "low" }}
  title="Wer wir sind"
  type="image"
/>
<SplitTile
  cta={{ label: "Unser Angebot", url: resolve("/[lang=lang]/angebot", { lang: "de" }) }}
  description="Unser Produktionsstandort der Firma AgriPlant AG befindet sich im Berner Seeland. Die zentrale Lage der Firma bietet uns die Möglichkeit Sie schnell und kompetent zu beliefern."
  even={true}
  image={{ src: crates, alt: "Kisten mit verschiedenen Gemüsesetzlingen.", loading: "lazy", fetchpriority: "low" }}
  title="Was wir Ihnen bieten"
  type="image"
/>
<SplitTile
  cta={{ label: "Unsere Partner", url: resolve("/[lang=lang]/partner", { lang: "de" }) }}
  description="Die Firma Gipmans aus Holland beliefert uns als Sortimentsergänzung mit Warmhaus- und Speedypflanzen."
  even={false}
  image={{ src: machine, alt: "Eine Maschine, die Gemüsejungpflanzen herstellt.", loading: "lazy", fetchpriority: "low" }}
  title="Mit wem wir arbeiten"
  type="image"
/>
<SplitTile
  cta={{ label: "Kontakt", url: resolve("/[lang=lang]/kontakt", { lang: "de" }) }}
  description="Wir stehen natürlich gerne für allfällige Informationen und Ratschläge zur Verfügung. Egal, ob E-Mail, Telefon oder vor Ort."
  even={true}
  iframe={{ src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87077.36113973339!2d7.146476148343918!3d46.99768327720842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e1186bcd0321b%3A0x438446635d8d02ab!2sSwissPlant%20GmbH!5e0!3m2!1sen!2sch!4v1631345560961!5m2!1sen!2sch", title: "Google Maps", loading: "lazy" }}
  title="Wie Sie uns erreichen"
  type="iframe"
/>
