# Promiqa Hero Section (React)

A pixel-faithful recreation of the Digital Silk homepage hero section
(https://www.digitalsilk.com/), rebranded with Promiqa's logo and brand colours.

Built with React 18 + Vite. No UI libraries.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Production build

```bash
npm run build
```

Static output lands in `dist/` and can be hosted anywhere (Netlify, Vercel, cPanel, etc.).

## What's included

| Area | Details |
| --- | --- |
| Header | Two-row desktop header (utility links + main nav + CTA), fixed, blurs on scroll. Collapses to logo + CTA + burger drawer under 1024px. |
| Hero | Same layout as the reference: big two-line headline with inline "Premium" pre-title, bold sub-headline, paragraph, divider, trust row (5-star reviews + follower badge). |
| Quote card | White card with gradient top bar, 5 fields, gradient CTA, "What happens next?" steps. Client-side validation and a success state. |
| Logo marquee | Translucent strip over the bottom of the hero with client logos scrolling continuously (pauses on hover). Ships with **placeholder** wordmarks in `Marquee.jsx`; replace each `<li>` with `<img>` logos of real clients. |
| Background | Dark emerald base, left-to-right overlay, two blurred glow spots, and a video-style collage: four tilted columns of Promiqa-branded website / app / dashboard / AI-chat / booking mockups scrolling continuously (`Collage.jsx`). |

## Using a real background video

The reference site plays a portfolio MP4 behind the hero. This build ships a CSS
collage instead (no video file needed). To swap in a real video:

1. Put the file in `public/` (e.g. `public/hero.mp4`, ideally under 8 MB, 1920×1080, muted).
2. In `src/components/Hero.jsx` set `HERO_VIDEO = '/hero.mp4'` and optionally
   `HERO_POSTER = '/hero-poster.jpg'`.

The overlay, glow and fade layers stay the same on top of the video.

## Brand

Colours were sampled from the Promiqa Facebook page cover and profile image:

| Token | Hex | Use |
| --- | --- | --- |
| `--p-green-950` | `#012a22` | darkest background / overlay |
| `--p-green-900` | `#013b30` | page background |
| `--p-green-800` | `#06513e` | card text, input borders |
| `--p-green-500` | `#13a77f` | accents, gradient end |
| `--p-gold-500` | `#e8b848` | stars, gradient start |
| `--p-gold-300` | `#f8e848` | highlights |

Fonts: **Roboto** (body, same as the reference) and **Cinzel** (PROMIQA wordmark).

The client-supplied square logo is `public/logo.jpg` (used as the favicon).
`public/logo-wordmark.png` is the same wordmark with the green background removed
(transparent PNG); the header uses it with a soft emerald halo and a gold shine on hover.

## Hooking up the form

`src/components/QuoteForm.jsx` – replace the `setTimeout` inside `onSubmit`
with a `fetch()` to your API / CRM endpoint.

## Structure

```
src/
  App.jsx
  index.css              # brand tokens, resets, reveal animation
  components/
    Header.jsx / .css
    Logo.jsx / .css
    Hero.jsx / .css
    HeroBackground.jsx / .css
    Collage.jsx / .css      # video-style scrolling mockup collage
    Marquee.jsx / .css      # client logo marquee (placeholder logos)
    QuoteForm.jsx / .css
public/
  logo.jpg                  # original square logo (favicon)
  logo-wordmark.png         # transparent wordmark (header)
  promiqa-cover.png
```
