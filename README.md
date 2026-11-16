# Swaminathan Nagarajan: personal website

A single-page site for Swaminathan (Naga) Nagarajan. It is built with
[Astro](https://astro.build), and every word on the page lives in one file, so updating it
never means touching layout code.

The career details follow his own LinkedIn profile. The About text is his own LinkedIn
summary, in his words, and the testimonials are his LinkedIn recommendations.

## Before publishing

1. **Contact links** are set in `contact` at the top of
   [`src/data/profile.ts`](src/data/profile.ts). They appear under the introduction and in
   the footer; clear one to hide it.
2. **Optional:** replace `public/og.jpg`, the image shown when the link is shared on
   WhatsApp, LinkedIn or email (1200 × 630 pixels). It currently shows his name, headline and
   photo.

## Run it on your computer

```sh
nvm use        # switches to Node 22.23.4 (from .nvmrc)
npm install
npm run dev    # http://localhost:4321, refreshes as you edit
```

| Command           | What it does                                           |
| ----------------- | ------------------------------------------------------ |
| `npm run dev`     | Local preview that refreshes on save                   |
| `npm run check`   | Type-checks the content and components (catches typos) |
| `npm run build`   | Builds the finished site into `dist/`                  |
| `npm run preview` | Serves the built `dist/` folder locally                |

## Where it is published

The site is live at **https://snaagaa.github.io**. It is published from the repository
[`snaagaa/snaagaa.github.io`](https://github.com/snaagaa/snaagaa.github.io) in the free GitHub
organisation [`snaagaa`](https://github.com/snaagaa). An organisation's site address is always
`<organisation>.github.io`.

The workflow in `.github/workflows/deploy.yml` builds and publishes the site on every push to
`main`. Each run takes a minute or two, and progress shows in the repository's **Actions** tab.

To update the site, edit `src/data/profile.ts` and push. It also works entirely in the
browser: open the file on GitHub, click the pencil icon, edit and commit, and the site updates
itself a minute later.

To hand the site over to him, add his GitHub account as an owner of the organisation.

Search engines are welcome: the page carries structured data about him, and there is a
`robots.txt` and a `sitemap.xml`. To have it appear in Google sooner, add the site in
[Google Search Console](https://search.google.com/search-console) and request indexing.

A custom domain (for example `nagarajan.com`) can be added later under **Settings → Pages →
Custom domain**. The workflow picks up the new address automatically.

## Editing content

**Everything you read on the page is in [`src/data/profile.ts`](src/data/profile.ts)**, in
page order, with a heading comment for each section.

- Text can use `**bold**`, `*italic*` and `[links](https://…)`.
- Dates are `"YYYY"`, `"YYYY-MM"` or `"YYYY-MM-DD"`. The site formats them.

Common updates:

- **A new role:** add a chapter at the top of `career` (most recent first) and leave `end`
  out while it is current; it then shows as "2027–present".
- **Board experience:** list it under the chapter it belongs to, in `boards`.
- **Key figures:** a chapter can have `stats`, shown as a row of up to three figures under
  its introduction (see Metahelix).
- **The credentials under his name** (MD & CEO, IIM Ahmedabad, IIT Madras) are `highlights`
  in `person`. Wrap words in `**…**` to pick them out in gold.
- **Another testimonial:** add it to `testimonials`.

Run `npm run check` after editing. It points to the exact line if a field is missing or
misspelled.

## Changing the look

- **Colours, type sizes and spacing** are design tokens at the top of
  [`src/styles/global.css`](src/styles/global.css). The palette is deep navy, antique gold,
  ivory and parchment. Each colour is written once as `light-dark(<light>, <dark>)`, so the
  light and dark themes stay in step, and every text colour reads at 4.5:1 or better.
- **Fonts** are Source Serif 4 (serif) and Inter (sans), bundled with the site. There are no
  third-party requests.
- **His photo** is [`src/assets/portrait.jpg`](src/assets/portrait.jpg), taken from LinkedIn
  (392 × 500 pixels, the largest size LinkedIn has). To use a sharper one, replace that file
  with any portrait-shaped photo; the site makes the smaller sizes itself. The link-preview
  image has its own copy of the photo, so update `public/og.jpg` too.
- **The tab icon and link-preview image** are plain image files in `public/`
  (`favicon.png`, `apple-touch-icon.png` and `og.jpg`). Replace them with images of the same
  size to change them.

## Project layout

```
src/
  data/profile.ts       ← all content
  data/types.ts         ← the shape of that content
  assets/portrait.jpg   ← his photo
  pages/index.astro     ← section order
  components/           ← one file per section, plus small building blocks
  layouts/Base.astro    ← <head>, fonts, link previews, theme handling
  lib/                  ← date formatting and inline text formatting
  scripts/site.ts       ← theme toggle, mobile menu, scroll effects
  styles/global.css     ← design tokens and shared styles
public/                 ← tab icons and the link-preview image
.github/workflows/      ← automatic publishing to GitHub Pages
```

To reorder or remove a section, move or delete its line in `src/pages/index.astro` and its
entry in `sections` in `profile.ts`, which drives the nav.

## Notes

- **Node version:** Astro 7 needs Node 22.23.4 or newer, pinned in `.nvmrc`. With nvm, run
  `nvm use` in this folder; your default Node version is not changed.
- **npm warnings:** recent npm versions may warn that install scripts for `esbuild` and
  `sharp` were not run. The site builds without them, so the warnings are safe to ignore.
- **Built in:** light and dark themes (following the visitor's system setting, with a
  toggle), a mobile layout and a print stylesheet. The page also works without JavaScript.
