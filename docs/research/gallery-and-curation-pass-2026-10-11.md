# Gallery and curation review — 11 October 2026

Reviewed all 58 collections visually through browser-rendered gallery screenshots. Checked every page at 1440, 1024, 768 and 390 px (232 checks), then repeated the 16 relevant checks after improving minimum portrait width in four mixed-format collections. All 291 gallery images loaded; no horizontal overflow, distorted aspect ratios or irregular gaps between rows were found. Exact measurements are in [gallery-layout-audit-2026-10-11.json](gallery-layout-audit-2026-10-11.json).

The former CSS multicolumn layout inserted full-width images between balanced column fragments. This left tall empty areas above the next spanning image. The replacement fits complete photos into justified rows, preserving source order, original aspect ratios and a 16 px gap. Rows adapt to the actual container width; phone galleries use one photo per row. Original files and full-resolution lightbox photographs remain intact. The calculation limits enlargement to original dimensions and prevents a portrait from becoming a tiny strip beside panoramic film frames. Portrait height is capped at 640 px in the page, with the complete original available in the viewer.

## Portfolio order

The opening sequence is Proud — Zero Gravity, LEGO — Hera & Hunter, Talkmore — Nøkken, Národní muzeum, LEGO Friends — Heartlake City, and Talkmore — Duedekning. These combine distinctive costumes or character work, a verified full-HD film, multiple costume images and useful provenance. This is an editorial recommendation based on available material, not a claim that Dušan personally approved this ranking.

The next projects broaden the presentation: McDonald’s Cheese Saga, Post Bellum, Vitana’s gorilla, Vypsaná fixa, Budvar and Raiffeisen. Cinematic campaign pages and substantial galleries precede lower-resolution social clips. Unidentified fitting and reference collections remain toward the end. The armour-workshop collection was removed at the owner’s request; AFK Arena and E.ON duplicate entries were consolidated. No date-based grouping was introduced; the same curated order drives home cards and previous/next navigation.

Proud’s lead preview now uses a reviewed 1920 px campaign frame instead of the Instagram collage. Its detail gallery begins with the clear full-costume fitting, followed by construction details. The museum preview now shows the period clothing clearly rather than distant figures in a field.

## Credits

Added 25 explicit credit fields across 13 collections. [The source record](additional-credits-2026-10-11.json) documents each addition. Public film metadata for existing, previously matched campaigns was re-fetched from Vimeo; new sources include the campaign creative’s McDonald’s portfolio, CAMEO’s exact LEGO entry, POL’s Nøkken submission and the Orange hockey campaign’s crew card. Roles and still-photography credits do not relabel extracted film frames as separately photographed work.

Rejected the Telekom 2023 family-dinner campaign as evidence for the existing bookshop clip, LEGO Friends Forest as evidence for Heartlake City, and an unmatched Leffe campaign. Uncaptioned fitting collections remain without speculative clients or crew. No new wardrobe role for Dušan was inferred from these additional production credits.

Final catalogue: 55 collections, 293 gallery images and 52 films. AFK Arena — Grezhul & Lucius combines the two character costumes identified by the website owner. Separate CSS crop windows show the photographed costumes and reference artwork without changing the original files; mobile displays them individually. E.ON combines all three garments with their verified official films; see the source review below. Gallery appearance, resizing, lightbox controls and curated home ordering were checked in Playwright. Final validation passed: seven catalogue/layout tests, TypeScript checking, production build (57 pages and nine legacy redirects), and verification of all 52 hosted films. Twelve further browser checks covered the final AFK Arena, E.ON and Raiffeisen shop/workshop pages at four viewport widths, with no missing images or horizontal overflow; mobile AFK images occupy individual rows. Production output excludes the local video archive. Canonical links and sitemap still require the deployment’s VITE_SITE_URL setting.

See [Raiffeisen and E.ON source review](raiffeisen-eon-source-review-2026-10-11.md).
