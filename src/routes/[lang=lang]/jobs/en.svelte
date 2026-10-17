<script lang="ts">
  import Content from "#lib/components/content.svelte";
  import Hero from "#lib/components/hero.svelte";
  import aerial from "#lib/img/aerials/1.avif";
</script>

<svelte:head>
  <title>Jobs — SwissPlant GmbH</title>
  <meta name="description" content="We are a future-oriented company in vegetable seedling production. Our company culture is characterized by flexibility, openness and adaptability." />
</svelte:head>

<Hero images={[{ src: aerial, alt: "" }]} />
<Content>
  <h1>Open Positions</h1>
  <p>
    We are future-oriented vegetable young plant producers in Müntschemier in the Bernese Seeland. We cultivate young plants that are planted by vegetable growers throughout Switzerland. Our 12 employees reflect quality, adherence to deadlines, customer satisfaction and make our company unique. Openness, flexibility and adaptability are our top priorities and characterize the friendly and collegial way we work together.
  </p>
  <hr />
  <ul>
    <li>There are currently no open positions.</li>
  </ul>
</Content>
