<script lang="ts">
  import { resolve } from "$app/paths";
  import Content from "#lib/components/content.svelte";
  import Hero from "#lib/components/hero.svelte";
  import Iframe from "#lib/components/iframe.svelte";
  import aerial from "#lib/img/aerials/2.avif";
</script>

<svelte:head>
  <title>Company — SwissPlant GmbH</title>
  <meta name="description" content="Learn about how SwissPlant GmbH operates." />
</svelte:head>

<Hero images={[{ src: aerial, alt: "" }]} />
<Content>
  <h1>Company</h1>
  <Iframe
    allow="fullscreen; picture-in-picture"
    loading="lazy"
    src="https://www.youtube-nocookie.com/embed/M3-n0Gf2f2c"
    title="SwissPlant: Vegetable growing in the Bernese Seeland"
  />
  <p>
    All these vegetables and salads begin as young plants, which are grown by AgriPlant AG in Müntschemier. <a href={resolve("/[lang=lang]/team", { lang: "en" })}>Martin Löffel</a>, Managing Director of our companies, summarizes the journey of seedlings to fully grown plants as follows: "As a supplier to vegetable farms, we stand at the beginning of the production chain and cultivate the young plants that are subsequently planted by vegetable growers."
  </p>
  <p>
    The trading company SwissPlant GmbH offers you vegetable young plants in all possible variations and sizes. Through our many years of experience in vegetable cultivation, we can guarantee you competent and specialized advice for our climatic conditions. Our range is a compilation from various breeding programs of globally active providers of high-performance seeds.
  </p>
  <p>
    In 2016, AgriPlant expanded its operational area by an additional 8,130m² to a total of 42,000m². With this expansion, the existing oil heating system reached its limits. In addition, one heating system had reached its technical age and needed to be replaced anyway. For these reasons, the wood chip heating project was implemented.
  </p>
  <p>
    Through the realization of this project, AgriPlant AG can reduce its CO2 emissions by a substantial 123 tons despite the area expansion. The project was accompanied by the <a href="https://enaw.ch/">Energy Agency of the Economy EnAW</a> and the <a href="https://www.klik.ch/">Climate Protection and CO2 Compensation Foundation KliK</a>. We have now completed our first heating season and can proudly confirm that we heat our greenhouses 80% CO2-neutral.
  </p>
  <p>
    Our seed suppliers include: <a href="https://www.bejo.com/">Bejo</a>, <a href="https://www.enzazaden.com/">Enza Zaden</a>, <a href="https://www.rijkzwaan.com/">Rijk Zwaan</a>, <a href="https://www.graines-voltz.com/">Voltz</a>, <a href="https://www.syngenta.com/">Syngenta</a> and <a href="https://www.sakata.com/">Sakata</a>. We source our growing soil from <a href="https://www.floragard.de/">Floragard</a> and <a href="https://www.klasmann-deilmann.com/">Klasmann-Deilmann</a>.
  </p>
</Content>
