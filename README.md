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

**Logo**
- `REPLACE_WITH_LOGO_URL` (in `custom-block.html`) — same Mapel Firm logo used on mapelfirm.com. Upload it to GHL Media and paste the URL.

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

The page includes the full form from your copy (Name, Phone/WhatsApp, Email, "what to preserve" checkboxes, "physical/digital" choice, message, submit) styled to match the brand. Because this page is pasted in as custom HTML rather than built with GHL's native drag-and-drop form element, here are your two options for capturing responses:

**Recommended — capture straight into your GHL CRM:**
1. In GoHighLevel, go to **Sites → Forms** and build a new form with the same fields, in the same order, as the ones in this page's form (see the field list above).
2. Open that form's **Integrate** tab and copy its embed code (iframe or JS embed).
3. In `custom-block.html`, find the `<section class="form-section" id="form">` block and replace the `<form id="legacyArchiveForm">…</form>` contents with the GHL embed snippet, keeping the surrounding `.form-shell` wrapper so it stays visually consistent with the rest of the page.

**Works immediately, no setup required:**
The form as built already works out of the box. On submit, it opens a pre-filled email to **info@mapelfirm.com** containing everything the visitor entered, so no enquiry is lost while you set up the GHL-native form above.

If you'd rather point it at a webhook (Zapier, Make, a GHL workflow webhook, etc.) instead of email, open the `<script>` block at the bottom of `custom-block.html` (or `script.js` in the preview build) and set the `FORM_ENDPOINT` constant near the top to that webhook URL — the form will `POST` a JSON payload there instead of opening email.

## What's on the page

1. Hero — "Some things are too important to lose."
2. Tagline strip — "Keeping families in conversation, for generations."
3. What We Preserve — 6 categories, each with a photo slot (Family Photographs, Letters & Documents, Books & Manuscripts, Film & Video, Audio, Business History).
4. How It Works — the 6-step process.
5. Preserved for Generations — the archival-technology reassurance section + "what your archive receives" checklist.
6. A centered narrative section — "What should your family preserve?"
7. Pricing — **Family Archive** and **Larger Archives** as two cards side by side, plus a separate full-width **Institutional Archive** banner underneath for businesses/organisations.
8. Closing CTA — "Preserve what should outlive you."
9. The form.
10. FAQ — full accordion built from your copy, with "Why should I preserve these things now?" opened by default at the top (your note flagged it as the key question for ad traffic).
11. Footer — matches mapelfirm.com (same email, Instagram, Facebook, LinkedIn).
