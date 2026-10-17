<script lang="ts">
  import { resolve } from "$app/paths";
  import Content from "#lib/components/content.svelte";
  import Hero from "#lib/components/hero.svelte";
  import Iframe from "#lib/components/iframe.svelte";
  import aerial from "#lib/img/aerials/1.avif";
</script>

<svelte:head>
  <title>Portfolio — SwissPlant GmbH</title>
  <meta name="description" content="This is our portfolio. We offer a wide range of warm house plants and individual consultings." />
</svelte:head>

<Hero images={[{ src: aerial, alt: "" }]} />
<Content>
  <h1>Portfolio</h1>
  <table>
    <tbody>
      <tr>
        <td>3.2cm single pot</td>
        <td>Salads, field salad, celery and leek</td>
      </tr>
      <tr>
        <td>3.2cm double pot</td>
        <td>Salads, field salad, celery and leek</td>
      </tr>
      <tr>
        <td>3.7cm single pot</td>
        <td>Salads, field salad, celery and leek</td>
      </tr>
      <tr>
        <td>3.7cm lock pot</td>
        <td>Salads, celery and leek</td>
      </tr>
      <tr>
        <td>4cm single pot</td>
        <td>Salads, field salad, celery and leek</td>
      </tr>
      <tr>
        <td>4cm lock pot</td>
        <td>Salads, celery and leek</td>
      </tr>
      <tr>
        <td>5cm single pot</td>
        <td>Salads</td>
      </tr>
      <tr>
        <td>6cm glued</td>
        <td>Zucchini</td>
      </tr>
      <tr>
        <td>Superseedling</td>
        <td>Leek and fennel</td>
      </tr>
      <tr>
        <td>G195</td>
        <td>Cabbages and celery</td>
      </tr>
      <tr>
        <td>G280</td>
        <td>Cabbages and celery</td>
      </tr>
      <tr>
        <td>PT770</td>
        <td>Leeks and cabbages</td>
      </tr>
      <tr>
        <td>TQ 10.5</td>
        <td>Warm house plants for hobbyists</td>
      </tr>
    </tbody>
  </table>
  <p>
    All pot variants (3.2cm to 6cm) are produced in-house. Everything else is produced by our dutch partners. We also offer warm house plants in various variants. If you need any information or have questions, <a href={resolve("/[lang=lang]/team", { lang: "en" })}>our sales team</a> will be happy to help you out!
  </p>
  <Iframe
    allow="fullscreen; picture-in-picture"
    loading="lazy"
    src="https://www.youtube-nocookie.com/embed/H2mMli5KiKY"
    title="SwissPlant: PlantTape in action"
  />
</Content>
