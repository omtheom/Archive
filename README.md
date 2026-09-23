# The Legacy Archive — Landing Page

Built in the same visual system as mapelfirm.com / Legacy Codex (Cormorant Garamond serif, ink/paper/stone palette, same nav, buttons, section rhythm and footer).

Two pages share one stylesheet:

| File | What it is | Where it goes in GoHighLevel |
|------|------------|------------------------------|
| `styles.css` | All stylesheet rules + responsive breakpoints for **both** pages | **Site Settings → Custom CSS** (site-wide, applies to every page). Paste the whole file once. |
| `custom-block.html` | HTML markup + inline JS for the main landing page | A **Custom Code / Custom HTML** element on the landing page. Paste the whole file. |
| `thank-you-block.html` | HTML markup for the thank-you page (no JS needed) | A **Custom Code / Custom HTML** element on a **new, separate page** (e.g. `/thank-you`). Paste the whole file. |
| `index.html` + `script.js` | Standalone reference build of the landing page (links to `styles.css` / `script.js`). Open locally to preview. | Not used in GHL — preview only. |
| `thank-you.html` | Standalone reference build of the thank-you page. Open locally to preview. | Not used in GHL — preview only. |

## Paste order in GoHighLevel

1. Open the landing page in the GoHighLevel builder.
2. Go to **Site Settings → Custom CSS** and paste the full contents of `styles.css` — this one paste covers both pages, since GHL's Custom CSS is site-wide.
3. Add a **Custom Code / HTML** block at the top of the landing page and paste the full contents of `custom-block.html`.
4. Create a **new page** in GHL (e.g. named "Thank You", URL `/thank-you`). Add a **Custom Code / HTML** block and paste the full contents of `thank-you-block.html`. Do **not** paste `styles.css` again — it's already loaded site-wide from step 2.
5. Set the "Archive" form (Sites → Forms → Archive → **Settings** tab) to **redirect to a URL** on submit, pointing at your new thank-you page's live URL (e.g. `https://yourdomain.com/thank-you`). This is what actually sends people to the new page after they submit — I can't set this from here since it's a setting inside your GHL account.
6. Replace the placeholders below with real assets/links.
7. Publish and preview both pages — including on mobile.

## Placeholders to replace

Every image slot is a marked placeholder so nothing breaks before you add real photos. Search for `REPLACE_WITH_` in `custom-block.html` and `styles.css`:

**Logo** — already wired in (the Mapel Firm logo, pulled from your GHL media library). No action needed unless you want to swap it for a different file.

**Hero image** — already wired in (full-bleed hero background). No action needed unless you want to swap it.

**Photos** (all in `styles.css`, as `background-image: url('REPLACE_WITH_..._IMAGE_URL')`):
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

The form section embeds a native GoHighLevel **Survey** (widget ID `L0TPc5Fvjp618wBoLFCT`) via GHL's iframe embed + `form_embed.js` script, inside the `.ghl-form-embed` wrapper in the `<section class="form-section" id="form">` block. GHL's Surveys show one question at a time with Next/Back navigation instead of a long list of fields all at once — that's why this replaced the earlier "Archive" Form embed. Every submission is still handled entirely by GoHighLevel — it creates/updates a Contact automatically, and you'll see it under **Contacts** in your GHL sub-account, plus under **Sites → Surveys → [this survey] → Submissions**. Nothing on this page needs any further wiring for leads to land in your CRM.

The iframe has a fallback `min-height` (260px desktop / 320px on small mobile — just enough to avoid a blank flash before GHL's script sets the real height) so the page doesn't jump on load. GHL's `form_embed.js` resizes the iframe to fit each question automatically, so this floor should rarely matter in practice — if a particular question (e.g. one with many checkbox options) ever looks clipped, or you see empty space below the card again, adjust the two `.ghl-form-embed iframe` rules in `styles.css`.

## The thank-you page

A simple confirmation page at `/thank-you` (or whatever path you give it): logo, a congratulatory headline ("Your family's history is already in good hands."), a short thank-you message, a two-step "what happens next" list (**check your email** / **expect our call**), a "Return to Homepage" button, and the same footer as the main page.

The logo and "Return to Homepage" link both point to `/` — if your published landing page lives at a different path, update the two `href="/"` occurrences near the top and bottom of `thank-you-block.html` to match.

## What's on the page

1. Hero — "Give Your Family History a Home In the Arctic for the Next 1,000 Years."
2. Tagline strip — "Keeping families in conversation, for generations."
3. The form.
4. What We Preserve — 6 categories, each with a photo slot (Family Photographs, Letters & Documents, Books & Manuscripts, Film & Video, Audio, Business History).
5. How It Works — the 6-step process.
6. Preserved for Generations — the archival-technology reassurance section + "what your archive receives" checklist.
7. A centered narrative section — "What should your family preserve?"
8. Pricing — "Pay once, preserve for 1,000 years." **Family Archive** and **Institutional Archive** (for businesses & organisations) as two cards side by side.
9. Closing CTA — "Preserve what should outlive you."
10. FAQ — full accordion built from your copy, with "Why should I preserve these things now?" opened by default at the top (your note flagged it as the key question for ad traffic).
11. Footer — matches mapelfirm.com (same email, Instagram, Facebook, LinkedIn).
