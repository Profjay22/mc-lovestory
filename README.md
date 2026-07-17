# Mojolaoluwa & Chinedu — Wedding Website

A responsive, single-page wedding site built with React + Vite. Inspired by the
digital-invitation reel you shared, reworked in your colours (dusty pink &
champagne gold) with your photos, story, and details.

## Run it locally

```bash
npm install      # first time only
npm run dev      # start the dev server → http://localhost:5173
npm run build    # production build into /dist
npm run preview  # preview the production build
```

## Sections

Envelope intro → Hero → Countdown → Our Story (carousel) → Families → Details
(ceremony, reception, colours of the day) → Gallery (with lightbox) → FAQ →
Gifts/Registry → RSVP → Footer.

## Where to change things

Almost everything lives in **`src/config.js`** — names, date, venues, the story,
FAQs, registry account, RSVP contacts, and the gallery order. Edit that one file
and the site updates. No coding needed for content changes.

- **Countdown / dates:** `couple.weddingISO` and `couple.dateLong`.
- **RSVP:** submissions open WhatsApp to `rsvp.whatsapp` (currently Chibuike's
  number) with the guest's details pre-filled. Change the number there.
- **Photos:** optimized copies live in `public/photos/`. Swap a file (keep the
  same name) or add new ones and reference them in `config.js`.

## Background music (optional)

Drop an MP3 at `public/music.mp3`. A floating music button appears automatically
and starts playing when a guest opens the envelope. If there's no file, the
button simply stays hidden — nothing breaks.

## Deploy

Any static host works. Easiest options:

- **Netlify / Vercel:** connect the repo (or drag the `dist/` folder onto
  Netlify Drop). Build command `npm run build`, publish directory `dist`.
- **GitHub Pages:** build, then push `dist/`.

## Notes

- Photos are from your London engagement shoot and registry day. The engagement
  set carries an "Ally" photographer watermark, left intact as a credit.
- Fonts (Cormorant Garamond, Great Vibes, Montserrat) load from Google Fonts.
- Fully responsive; respects "reduce motion" accessibility settings.
