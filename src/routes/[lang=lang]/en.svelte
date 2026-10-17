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
  <title>SwissPlant GmbH — Your specialist for vegetable young plants</title>
  <meta name="description" content="Swissplant GmbH is your partner for professional vegetable cultivation in the Bernese Seeland. We offer warm house plants in various varieties." />
</svelte:head>

<h1 class="sr-only">Home</h1>
<Hero
  big
  images={[
    { src: one, alt: "Aerial view of SwissPlant GmbH" },
    { src: two, alt: "Aerial view of SwissPlant GmbH" }
  ]}
/>
<SplitTile
  cta={{ label: "About us", url: resolve("/[lang=lang]/firma", { lang: "en" }) }}
  description="SwissPlant is the official point of selling of seedings and saplings from AgriPlant Switzerland and Gipmans Netherlands."
  even={false}
  image={{ src: tinu, alt: "Martin Löffel, founder of SwissPlant GmbH.", loading: "lazy", fetchpriority: "low" }}
  title="Who we are"
  type="image"
/>
<SplitTile
  cta={{ label: "Our portfolio", url: resolve("/[lang=lang]/angebot", { lang: "en" }) }}
  description="Our production site of AgriPlant AG is located in the Bernese Seeland. The central location allows us to deliver quickly and competently."
  even={true}
  image={{ src: crates, alt: "Boxes with various vegetable seedlings.", loading: "lazy", fetchpriority: "low" }}
  title="What we offer"
  type="image"
/>
<SplitTile
  cta={{ label: "Our partners", url: resolve("/[lang=lang]/partner", { lang: "en" }) }}
  description="The company Gipmans from the Netherlands supplies us with warm house and speedy plants as a range extension."
  even={false}
  image={{ src: machine, alt: "A machine that produces vegetable seedlings.", loading: "lazy", fetchpriority: "low" }}
  title="Who we work with"
  type="image"
/>
<SplitTile
  cta={{ label: "Contact", url: resolve("/[lang=lang]/kontakt", { lang: "en" }) }}
  description="We are happy to provide any information and advice. Whether by email, phone or on site."
  even={true}
  iframe={{ src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87077.36113973339!2d7.146476148343918!3d46.99768327720842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e1186bcd0321b%3A0x438446635d8d02ab!2sSwissPlant%20GmbH!5e0!3m2!1sen!2sch!4v1631345560961!5m2!1sen!2sch", title: "Google Maps", loading: "lazy" }}
  title="How to reach us"
  type="iframe"
/>
