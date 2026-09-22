# The Legacy Archive — Landing Page

Built in the same visual system as mapelfirm.com / Legacy Codex (Cormorant Garamond serif, ink/paper/stone palette, same nav, buttons, section rhythm and footer).

Three files, one page:

| File | What it is | Where it goes in GoHighLevel |
|------|------------|------------------------------|
| `styles.css` | All stylesheet rules + responsive breakpoints | **Site Settings → Custom CSS** (or Page → Custom CSS). Paste the whole file. |
| `custom-block.html` | HTML markup + inline JS for the page | A **Custom Code / Custom HTML** element on the page. Paste the whole file. |
| `index.html` + `script.js` | Standalone reference build (links to `styles.css` / `script.js`). Open `index.html` locally to preview. | Not used in GHL — preview only. |

## Paste order in GoHighLevel

1. Open the page in the GoHighLevel builder.
2. Go to the page's **Custom CSS** field and paste the full contents of `styles.css`.
3. Add a **Custom Code / HTML** block at the top of the page and paste the full contents of `custom-block.html`.
4. Replace the placeholders below with real assets/links.
5. Publish and preview — including on mobile.

## Placeholders to replace

Every image slot is a marked placeholder so nothing breaks before you add real photos. Search for `REPLACE_WITH_` in `custom-block.html` and `styles.css`:

**Logo** — already wired in (the Mapel Firm logo, pulled from your GHL media library). No action needed unless you want to swap it for a different file.

**Photos** (all in `styles.css`, as `background-image: url('REPLACE_WITH_..._IMAGE_URL')`):
- `REPLACE_WITH_HERO_IMAGE_URL` — full-bleed hero background (a family photo album / hands holding old photographs works well).
- `REPLACE_WITH_FAMILY_PHOTOS_IMAGE_URL`
- `REPLACE_WITH_LETTERS_DOCUMENTS_IMAGE_URL`
- `REPLACE_WITH_BOOKS_MANUSCRIPTS_IMAGE_URL`
- `REPLACE_WITH_FILM_VIDEO_IMAGE_URL`
- `REPLACE_WITH_AUDIO_IMAGE_URL`
- `REPLACE_WITH_BUSINESS_HISTORY_IMAGE_URL`
- `REPLACE_WITH_PROCESS_IMAGE_URL` — the "How It Works" section visual.
- `REPLACE_WITH_PRESERVATION_IMAGE_URL` — the "Preserved for Generations" section visual.
- `REPLACE_WITH_FINAL_CTA_IMAGE_URL` — faint background image behind the closing CTA (optional; it renders at 14% opacity, grayscale, so a plain dark section also looks fine if you skip it).

Until you add real photos, every slot falls back to a warm stone-colored panel (`var(--stone)`), so the page never shows broken images.

## The form — how it captures responses

The form section now embeds your native GoHighLevel form ("Archive", form ID `Mwyky2luVJnh3c9UUVtf`) directly via GHL's own iframe embed + `form_embed.js` script, inside the `.ghl-form-embed` wrapper in the `<section class="form-section" id="form">` block. Every submission is handled entirely by GoHighLevel — it creates/updates a Contact automatically, and you'll see it under **Contacts** in your GHL sub-account, plus under **Sites → Forms → Archive → Submissions**. Nothing on this page needs any further wiring for leads to land in your CRM.

The iframe has a fallback `min-height` (1326px desktop / 1500px on small mobile, matching the form's own reported height) so the page doesn't jump before GHL's script resizes it — adjust those two `.ghl-form-embed iframe` rules in `styles.css` if your form's real height changes.

## What's on the page

1. Hero — "Give Your Family History a Home In the Arctic for the Next 1,000 Years."
2. Tagline strip — "Keeping families in conversation, for generations."
3. What We Preserve — 6 categories, each with a photo slot (Family Photographs, Letters & Documents, Books & Manuscripts, Film & Video, Audio, Business History).
4. How It Works — the 6-step process.
5. Preserved for Generations — the archival-technology reassurance section + "what your archive receives" checklist.
6. A centered narrative section — "What should your family preserve?"
7. Pricing — "Pay once, preserve for 1,000 years." **Family Archive** and **Institutional Archive** (for businesses & organisations) as two cards side by side.
8. Closing CTA — "Preserve what should outlive you."
9. The form.
10. FAQ — full accordion built from your copy, with "Why should I preserve these things now?" opened by default at the top (your note flagged it as the key question for ad traffic).
11. Footer — matches mapelfirm.com (same email, Instagram, Facebook, LinkedIn).
