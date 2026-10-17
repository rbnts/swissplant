<script lang="ts">
  import Content from "#lib/components/content.svelte";
  import Hero from "#lib/components/hero.svelte";
  import Iframe from "#lib/components/iframe.svelte";
  import aerial from "#lib/img/aerials/1.avif";
</script>

<svelte:head>
  <title>Contact — SwissPlant GmbH</title>
  <meta name="description" content="Learn how to best get in touch with us. Or get directions to get to our site." />
</svelte:head>

<Hero images={[{ src: aerial, alt: "" }]} />
<Content>
  <h1>Contact</h1>
  <h2>From Bern</h2>
  <p>
    Take the Bern-Neuchâtel freeway and exit at Kerzers, then follow the signs to Neuchâtel. In Müntschemier, follow the signs to the train station.
  </p>
  <h2>From Neuchâtel</h2>
  <p>
    Follow the signs to Ins-Müntschemier, then in Müntschemier follow the signs to the train station.
  </p>
  <Iframe
    loading="lazy"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87077.36113973339!2d7.146476148343918!3d46.99768327720842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e1186bcd0321b%3A0x438446635d8d02ab!2sSwissPlant%20GmbH!5e0!3m2!1sen!2sch!4v1631345560961!5m2!1sen!2sch"
    title="Google Maps"
  />
</Content>
