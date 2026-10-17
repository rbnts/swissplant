<script lang="ts">
  import Content from "#lib/components/content.svelte";
  import Hero from "#lib/components/hero.svelte";
  import machine from "#lib/img/photoshoot/machine.avif";
</script>

<svelte:head>
  <title>Partner — SwissPlant GmbH</title>
  <meta name="description" content="Wir arbeiten Hand in Hand mit unseren Partnern. Erfahren Sie mehr über unsere Kooperationen." />
</svelte:head>

<Hero images={[{ src: machine, alt: "" }]} />
<Content>
  <h1>Partner</h1>
  <h2>AgriPlant AG</h2>
  <p>
    Durch unseren ortsansässigen Produktionsbetrieb wachsen unsere Jungpflanzen im selben «Haus», wo sie anschliessend weiter kultiviert werden. Dank der individuellen Ausliefertage und den kurzen Transportdistanzen zum Kunden, können wir Ihnen stressfreie Pflanzen anbieten.
  </p>
  <p>
    Um alle Wünsche und Bedürfnisse der Kundschaft zu erfüllen, stehen verschiedene Kulturräume zur Verfügung. Der Betrieb ist in der Lage Jungpflanzen von Auberginen bis Zwiebeln bestens zu kultivieren. Die Gewächshäuser entsprechen den neusten technischen Erkenntnissen im Gewächshausbau. Freilandflächen und Cabrio-Häuser zum Abhärten der Pflanzen garantieren optimale Startbedingungen nach dem Pflanzen.
  </p>
  <h2>Gipmans</h2>
  <p>
    Bei der Firma <a href="https://gipmans.nl/">Gipmans</a> in den Niederlanden lassen wir unsere Speedy- und Warmhauspflanzen aussäen. Traypflanzen werden halbfertig bezogen, um sie anschliessend bei uns fertig zu kultivieren. Warmhauspflanzen werden fertig zu uns geliefert und durch unsere eigene Betriebsspedition direkt zum Kunden geliefert.
  </p>
  <p>
    Die Firma Gipmans steht für eine marktorientiertes Wissen und Können. Gemeinsame Wissensentwicklungen und Innovationen führen nicht nur zu einem besseren Ertrag, sondern tragen auch dazu bei, dass wir uns weitaus besser auf Ihre jeweils spezifische Marktsituation und die gewünschte Qualität einstellen können.
  </p>
</Content>
