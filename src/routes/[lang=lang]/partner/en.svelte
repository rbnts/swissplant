<script lang="ts">
  import Content from "#lib/components/content.svelte";
  import Hero from "#lib/components/hero.svelte";
  import machine from "#lib/img/photoshoot/machine.avif";
</script>

<svelte:head>
  <title>Partner — SwissPlant GmbH</title>
  <meta name="description" content="We work hand in hand with our partners. Learn more about our collaborations." />
</svelte:head>

<Hero images={[{ src: machine, alt: "" }]} />
<Content>
  <h1>Partners</h1>
  <h2>AgriPlant</h2>
  <p>
    Since we produce where we sell, all our saplings grow up in the same "house" as they will be cultivated in. Thanks to the individual delivery days and short transportation distances to our clients, we can offer stress-free plants.
  </p>
  <p>
    To make every wish of our clients come true, there are several different cultivation areas in our house. From a like aspargus to z like zucchini, we're able to cultivate saplings in the best quality. Our growing houses are updated with the latest technical improvements, and free field areas as well as convertible roof houses allow us to harden the plants before delivering them to you.
  </p>
  <h2>Gipmans</h2>
  <p>
    At <a href="https://gipmans.nl/">Gipmans</a> in the Netherlands, we seed our speedy and warm house saplings. Tray plants are obtained half-finished, so we can then cultivate them in our own house. The warm house plants are delivered to us already finished. They get delivered to our clients through our transportation units.
  </p>
  <p>
    Gipmans stands for market-oriented knowledge and know-how. Joint knowledge improvements and innovations lead not only to a greater gain, but let us also help us adapt to your specific market situation and desired quality.
  </p>
</Content>
