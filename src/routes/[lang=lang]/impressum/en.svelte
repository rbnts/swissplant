<script lang="ts">
  import ContactLink from "#lib/components/contact-link.svelte";
  import Content from "#lib/components/content.svelte";
  import Hero from "#lib/components/hero.svelte";
  import Iframe from "#lib/components/iframe.svelte";
  import aerial from "#lib/img/aerials/1.avif";
</script>

<svelte:head>
  <title>Imprint — SwissPlant GmbH</title>
  <meta name="description" content="Contact information and legal details for SwissPlant GmbH and AgriPlant AG in Müntschemier. Opening hours, address and phone number." />
</svelte:head>

<Hero images={[{ src: aerial, alt: "" }]} />
<Content>
  <h1>Imprint</h1>
  <h2>SwissPlant GmbH</h2>
  <p>
    Spitzallmendweg 11c<br />
    CH-3225 Müntschemier
  </p>
  <p>
    <ContactLink kind="email" value="aW5mb0Bzd2lzc3BsYW50LmNo" /><br />
    <a href="https://www.uid.admin.ch/Detail.aspx?uid_id=CHE-111.792.021">CHE-111.792.021</a>
  </p>
  <h2>AgriPlant AG</h2>
  <p>
    Spitzallmendweg 11c<br />
    CH-3225 Müntschemier
  </p>
  <p>
    <ContactLink kind="email" value="aW5mb0BhZ3JpcGxhbnQuY2g=" /><br />
    <a href="https://www.uid.admin.ch/Detail.aspx?uid_id=CHE-308.084.278">CHE-308.084.278</a>
  </p>
  <h2>Opening Hours</h2>
  <p>
    Monday to Friday<br />
    07:30–11:45<br />
    13:30–17:30
  </p>
  <Iframe
    loading="lazy"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87077.36113973339!2d7.146476148343918!3d46.99768327720842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e1186bcd0321b%3A0x438446635d8d02ab!2sSwissPlant%20GmbH!5e0!3m2!1sen!2sch!4v1631345560961!5m2!1sen!2sch"
    title="Google Maps"
  />
</Content>
