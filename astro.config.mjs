// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // The site's public address, used for link previews and the canonical link.
  // The GitHub Pages workflow fills it in automatically (SITE_URL). If you
  // host somewhere else, replace this with the address, e.g.
  // 'https://nagarajan.example.com'.
  site: process.env.SITE_URL || undefined,
  devToolbar: { enabled: false },
});
