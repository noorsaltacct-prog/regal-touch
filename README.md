# Regal Touch Events — revised website

A responsive five-page static website rebuilt from the supplied project and the client's October 22 design direction.

## Included

- Home, Portfolio, About Regal Touch, Inquiry, and Contact pages.
- Blush pink (a digital approximation of the supplied Pantone 705 C reference), warm white, and gold design.
- Double pink floral arch homepage image with subtle alternating zoom, a pause control, and reduced-motion support.
- All 21 event photographs from the supplied WhatsApp archive, optimized for the web. The two layout screenshots and the palette reference are design references rather than event portfolio items.
- Supplied logo and printed branding references in the About page; original crest and favicon retained from the supplied site.
- Portfolio category filters, accessible photo dialog, keyboard arrows, mobile swipe, and original three films with playback controls.
- Original event inquiry questions and the existing Instagram contact destination.

## Inquiry delivery

The supplied project had no connected email, form endpoint, or live Tally URL. This rebuild does not invent one. The inquiry page validates and copies the visitor's details, then opens Instagram so the visitor can paste and send a message to @regaltouchevent. It explicitly states that completing the form does not send an inquiry. Inspiration photos can be attached in Instagram. There is no server submission, automatic upload, or stored personal data.

If direct delivery is desired, connect the owner's approved form service or backend before launch. Do not replace the current transparent handoff with a false success message.

## Deployment

Upload the contents of this folder to a static host or the existing Vercel project. No build command, package installation, or framework is required. Keep index.html, the other HTML pages, styles.css, script.js, vercel.json, and assets together. Open index.html after extraction for a local preview, or run `python3 -m http.server 8000` in this folder.

This package updates the source files; it does not publish or overwrite the live website.

## Validation

Checked navigation, local file paths, all event image decoding, portfolio filters and photo dialog, keyboard controls, mobile navigation, reduced-motion behavior, and copying a completed inquiry. Checked desktop and mobile layouts including 320px and 390px widths. No JavaScript page errors during checks.
