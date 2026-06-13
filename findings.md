# Findings

## Performance

### High impact

#### 1. Pause hero slider when tab is hidden

`src/lib/components/hero.svelte` — the `setInterval` keeps firing at 10-second
intervals when the tab is hidden, updating `visibleIndex` and triggering CSS
transitions against an invisible page. Suspend it with the Page Visibility API
inside the attachment.

```ts
const startSlider: Attachment = () => {
  let interval: number | undefined;

  const start = () => {
    if (images.length > 1) {
      interval = setInterval(() => {
        visibleIndex = (visibleIndex + 1) % images.length;
      }, 10_000);
    }
  };

  const stop = () => clearInterval(interval);

  const offVisibility = on(document, "visibilitychange", () => {
    document.hidden ? stop() : start();
  });

  start();

  return () => {
    stop();
    offVisibility();
  };
};
```

---

### Medium impact

#### 2. `content-visibility: auto` on below-the-fold sections

Split tiles and the footer are reliably below the fold on initial load. Adding
`content-visibility: auto` with an intrinsic size hint tells the browser to skip
layout and paint for off-screen sections entirely.

```scss
// split-tile.svelte
.split-tile {
  content-visibility: auto;
  contain-intrinsic-size: 0 500px;
}
```

---

## Correctness

### 3. `String.replace` in canonical alternates is fragile

`src/routes/[lang=lang]/+layout.svelte:22` — `canonical.replace(`/${lang}`,
...)` replaces only the first occurrence. If any future route segment ever
contains the current lang code as a substring, the hreflang URLs would be
silently corrupted. Rewriting the first path segment explicitly is safer:

```ts
const withLang = (target: string) =>
  `/${target}/${url.pathname.split("/").slice(2).join("/")}`;
```

### 4. `contact-link.svelte` — right-click and middle-click ignore the real href

`src/lib/components/contact-link.svelte:28` — `href="#!"` means right-click →
"Open in new tab" navigates to `#!` instead of the `mailto:` or `tel:`. The
click handler only intercepts left-clicks. Keyboard and power users expecting
Ctrl+click to open a mail client are broken.

---

## Accessibility

### 5. No skip-to-main-content link

There is no skip link. Keyboard users must tab through the entire navigation on
every page before reaching `<main>`. WCAG 2.4.1 requires a mechanism to bypass
repeated blocks.

---

## Security / Privacy

### 6. Google Maps loads immediately without user consent

The Google Maps embed appears in the homepage split-tile
(`src/routes/[lang=lang]/+page.server.ts:83`), `kontakt/+page.svelte`, and
`impressum/+page.svelte`. It loads on every page visit, immediately sending the
visitor's IP address and browser fingerprint to Google. The privacy policy
acknowledges this but there is no consent mechanism. The expected pattern for
privacy-conscious sites is click-to-load.

---

## Code quality

### 7. Google Maps embed URL is duplicated in three places

The same Maps embed URL appears in `+page.server.ts` (homepage split-tile),
`kontakt/+page.svelte`, and `impressum/+page.svelte`. A single constant in `$lib`
would prevent three-way drift if the place ID or parameters ever change.
