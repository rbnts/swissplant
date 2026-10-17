<script lang="ts">
  import Content from "#lib/components/content.svelte";
  import Hero from "#lib/components/hero.svelte";
  import aerial from "#lib/img/aerials/1.avif";
</script>

<svelte:head>
  <title>Jobs — SwissPlant GmbH</title>
  <meta name="description" content="Wir sind ein zukunftsorientiertes Unternehmen in der Gemüsejungpflanzenherstellung. Unsere Firmenkultur ist geprägt durch Flexibilität, Offenheit und Anpassungsfähigkeit." />
</svelte:head>

<Hero images={[{ src: aerial, alt: "" }]} />
<Content>
  <h1>Offene Stellen</h1>
  <p>
    Wir sind zukunftsorientierte Gemüsejungpflanzenhersteller in Müntschemier im Berner Seeland. Wir kultivieren Jungpflanzen, die von Gemüsegärtnern in der ganzen Schweiz gepflanzt werden. Unsere 12 Mitarbeiter wiederspiegeln Qualität, Termintreue, Kundenzufriedenheit und machen unser Unternehmen einzigartig. Offenheit, Flexibilität und Anpassungsfähigkeit stehen bei uns an erster Stelle und prägen das freundliche und kollegiale Miteinander.
  </p>
  <hr />
  <ul>
    <li>Zurzeit sind keine Stellen ausgeschrieben.</li>
  </ul>
</Content>
