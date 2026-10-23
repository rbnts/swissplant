<script lang="ts">
  import { resolve } from "$app/paths";
  import ContactLink from "./contact-link.svelte";
  import Logo from "./logo.svelte";
  import { navigationItems } from "./navigation.svelte";

  interface Props {
    lang: App.Lang;
  }

  const { lang }: Props = $props();
  const year = new Date().getFullYear();

  const openingHours = $derived({
    de: "Montag bis Freitag\n07:30–11:45 Uhr\n13:30–17:30 Uhr",
    en: "Mondays to Fridays\n07:30–11:45\n13:30–17:30"
  }[lang]);

  const footerNavigationAriaLabel = $derived({
    de: "Navigation in der Fusszeile",
    en: "Footer navigation"
  }[lang]);
</script>

<footer class="footer">
  <div class="footer-content">
    <div aria-hidden="true">
      <div class="footer-logo">
        <Logo name="swissplantBare" />
      </div>
      <div class="footer-logo">
        <Logo name="agriplantBare" />
      </div>
    </div>
    <div>
      <p class="footer-text">
        Spitzallmendweg 11c<br />
        CH-3225 Müntschemier
      </p>
      <p class="footer-text">
        <ContactLink kind="email" value="aW5mb0Bzd2lzc3BsYW50LmNo" />
        <br />
        <ContactLink kind="email" value="aW5mb0BhZ3JpcGxhbnQuY2g=" />
      </p>
    </div>
    <div>
      <p class="footer-text footer-opening-hours">
        {openingHours}
      </p>
      <p class="footer-text">
        <ContactLink kind="phone" value="KzQxIDMyIDMxMyA1MiAxMA==" />
      </p>
    </div>
  </div>
  <hr class="footer-hr" />
  <nav class="footer-navigation" aria-label={footerNavigationAriaLabel}>
    <ul class="footer-navigation-list">
      {#each navigationItems as item (item.route)}
        <li class="footer-navigation-item">
          <a href={resolve(item.route, { lang })}>
            {item[lang]}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
  <div class="footer-content">
    <p class="footer-text footer-copyright">
      &copy; SwissPlant GmbH &amp; AgriPlant AG, {year}
    </p>
  </div>
</footer>

<style lang="scss">
  @use "#lib/styles/media-queries" as media-queries;

  .footer {
    padding: var(--space-64);
    font-size: var(--type-16);
    color: var(--color-white);
    background-color: var(--color-text);
    border-top: 5px solid var(--color-brand);

    > * {
      width: min(900px, 100%);
      margin: auto;
    }
  }

  .footer-hr {
    margin: var(--space-48) auto;
  }

  .footer-content {
    display: grid;
    gap: var(--space-16);
    place-items: center start;

    @include media-queries.above-phone {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include media-queries.above-tablet {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  * + .footer-text {
    margin-top: var(--space-8);
  }

  .footer-opening-hours {
    font-variant-numeric: tabular-nums;
    white-space: pre-line;
  }

  .footer-content > .footer-text {
    grid-column: 1 / -1;
    justify-self: center;
    text-align: center;
    text-wrap: wrap;

    &.footer-copyright {
      text-wrap: balance;
    }
  }

  .footer-navigation {
    margin-bottom: var(--space-32);
  }

  .footer-navigation-list {
    padding: 0;
    margin: 0;
    text-align: center;
    list-style-type: "";
  }

  .footer-navigation-item {
    display: inline-block;

    &:not(:last-child)::after {
      margin: 0 var(--space-8);
      content: "—";
    }
  }

  .footer-logo {
    width: 100px;
    height: 30px;
    color: var(--color-brand);

    & + & {
      margin-top: var(--space-4);
    }
  }
</style>
