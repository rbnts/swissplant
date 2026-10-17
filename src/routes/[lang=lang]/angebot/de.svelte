<script lang="ts">
  import { resolve } from "$app/paths";
  import Content from "#lib/components/content.svelte";
  import Hero from "#lib/components/hero.svelte";
  import Iframe from "#lib/components/iframe.svelte";
  import aerial from "#lib/img/aerials/1.avif";
</script>

<svelte:head>
  <title>Angebot — SwissPlant GmbH</title>
  <meta name="description" content="Schauen Sie sich unser Angebot an. Wir bieten Warmhauspflanzen verschiedener Sorten an." />
</svelte:head>

<Hero images={[{ src: aerial, alt: "" }]} />
<Content>
  <h1>Angebot</h1>
  <table>
    <tbody>
      <tr>
        <td>3.2cm-Einzeltopf</td>
        <td>Buntsalate, Nüssler, Sellerie und Lauch</td>
      </tr>
      <tr>
        <td>3.2cm-Doppeltopf</td>
        <td>Buntsalate, Nüssler, Sellerie und Lauch</td>
      </tr>
      <tr>
        <td>3.7cm-Einzeltopf</td>
        <td>Buntsalate, Nüssler, Sellerie und Lauch</td>
      </tr>
      <tr>
        <td>3.7cm-Riegeltopf</td>
        <td>Buntsalate, Sellerie und Lauch</td>
      </tr>
      <tr>
        <td>4cm-Einzeltopf</td>
        <td>Buntsalate, Nüssler, Sellerie und Lauch</td>
      </tr>
      <tr>
        <td>4cm-Riegeltopf</td>
        <td>Buntsalate, Sellerie und Lauch</td>
      </tr>
      <tr>
        <td>5cm-Einzeltopf</td>
        <td>Buntsalate</td>
      </tr>
      <tr>
        <td>6cm-Geklebt</td>
        <td>Zucchetti</td>
      </tr>
      <tr>
        <td>Superseedling</td>
        <td>Lauch und Fenchel</td>
      </tr>
      <tr>
        <td>G195</td>
        <td>Kohlarten und Sellerie</td>
      </tr>
      <tr>
        <td>G280</td>
        <td>Kohlarten und Sellerie</td>
      </tr>
      <tr>
        <td>PT770</td>
        <td>Lauch- und Kohlarten</td>
      </tr>
      <tr>
        <td>TQ 10.5</td>
        <td>Warmhauspflanzen Hobbybereich unveredelt</td>
      </tr>
    </tbody>
  </table>
  <p>
    Alle Topfvarianten (3.2cm-6cm) werden in unserem Haus produziert, die übrigen Arten lassen wir von unseren holländischen Partnern herstellen. Wir bieten auch Warmhauspflanzen in verschiedenen Varianten an. Über unser reichhaltiges Jungpflanzensortiment informieren wir Sie gerne. Für kundenspezifische Auskünfte oder Fragen steht Ihnen <a href={resolve("/[lang=lang]/team", { lang: "de" })}>unser Verkaufspersonal</a> jederzeit zur Verfügung.
  </p>
  <Iframe
    allow="fullscreen; picture-in-picture"
    loading="lazy"
    src="https://www.youtube-nocookie.com/embed/H2mMli5KiKY"
    title="SwissPlant: PlantTape im Einsatz"
  />
</Content>
