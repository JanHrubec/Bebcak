# Final content and sizing pass — 7 October 2026

The catalogue contains **61 collections, 292 gallery images and 50 complete local films**. This is a net increase of **26 gallery images** from the preceding 266-image pass, after replacing softer derivatives instead of counting them twice. All published images were visually reviewed. No artificial upscaling or invented costume photographs were used.

## Interface and sizing

- Project descriptions are removed from desktop, mobile and the photograph viewer. Titles and verified credits remain; accessible image descriptions are retained as alt text.
- Neighbouring project names are 12px on desktop. Navigation arrows remain 24px and their touch areas retain their existing size. Permanent translucent desktop sidebar and subtle sliding motion remain.
- Gallery and archive images are capped at their native width, preserve portrait/landscape proportions and request responsive sources. Small/full source descriptors are emitted only when the widths differ.
- Videos preserve their source aspect ratio, are capped at native width and fit the viewport height. Original complete-film framing is retained. Reviewed gallery crops remove only fixed outer mattes, not costumes.
- Sharper same-campaign previews replace the padded E.ON, Pilsner and two burn-prevention archive covers. E.ON uses the real checked-jacket fitting rather than a small repost frame.

## Exact film replacements and campaign corrections

| Project | Exact primary source | Verified match and selection |
| --- | --- | --- |
| Talkmore — Duedekning | [Einar Film](https://einarfilm.no/directors/stian-johansen/duedekning), public film 1029944619 | Complete 40-second 1920×1080 film. Same three performers, cabin, pigeon-letter plot and armour as Dušan’s repost. Six distinct film stills plus the matching original two-person fitting. Only gallery stills have the fixed outer matte removed. Director Stian Johansen; production Einar Film. |
| T-Mobile — Magenta TV + Netflix | [Ogilvy](https://ogilvy.cz/magenta-tv-netflix-0), public film 1172511540 | Complete 30-second 1920×1080 film. Same home, mustard outfit, mint blouse/rust knitwear and family. Corrects “Restaurant”. Five costume stills. Licensed Wednesday programme scenes/key art are excluded from the gallery; their wardrobe is not attributed to Dušan. |
| Slovenská sporiteľňa — Everest | [Bistro Films: Climber](https://www.bistrofilms.com/work/detail/climber-1), public film 1054524771 | Complete 35.6-second 1920×1080 director’s cut. Red climbing suit/harness, mountain laundry, globes, books and flower setting match the original campaign. Six reviewed wardrobe stills replace the soft repost derivatives. |
| T-Mobile — Magenta TV: Crime Story | [Ogilvy](https://ogilvy.cz/magenta-tv-0), public film 1192599302 | Complete 30-second 1920×1080 film replaces the narrow 608×1080 repost. Same bookcase interview, brown waistcoat, night-vision hooded performer, two men in dark casual layers and striped child’s T-shirt. Five distinct wardrobe stills; existing explicit Instagram credits retained. |

**McDonald’s — Dům Ronalda McDonalda** replaces the inaccurate “Kitchen” label. Its complete existing film ends with the named organisation and McDonald’s fundraiser branding. The child’s striped T-shirt/denim dungarees and family scenes agree throughout. Director/production are still unconfirmed. The later 2026 Ručičky advert with different performers is not this June 2024 publication and its credits were not borrowed.

**Vodafone — Unlimited Honesty** uses the official title and credits from [McCann Prague’s ADC campaign submission](https://www.adcawards.cz/en/public/gallery-item/2024?eid=27d7ce09-223e-4437-b40e-0876cf7b37e8&f=Vsechny-prihlasky&p=1). Two original 1080×1920 submission images were recovered and compared individually with the two portfolio shorts: greenhouse performers and courtside performers. Directors Novák & Nguyen, production Procoma, agency McCann Prague and client Vodafone Czech Republic agree. Photographer remains unspecified. Originals are retained in [the asset manifest](asset-sources.json).

The fitted two-person photograph in [Dušan’s mixed costume carousel](https://www.instagram.com/p/DFlPHEJMUbB/) now belongs to **Duedekning**: identical performers, helmet/chin strap, shoulder/body plates, maroon belt, studded cuffs, chain-mail hood, gold neck plate, brown tunic and boots. The green workshop breastplate differs and remains a separate **Armour workshop** study. The foliage performer belongs to Nøkken. One carousel does not imply one campaign.

## Gallery expansion and information review

Six thinner galleries gained 16 selected, distinct costume frames from their own films: Rohlík (3), BILLA (1), Vitana (3), Engelmüller (3), Baťa (3) and Konto Bariéry (3). All 48 candidates were inspected alongside existing galleries; food-only/product-only shots, blurred transitions and redundant frames were excluded. These are finished-film stills, not independent fittings or credited photographers’ BTS photographs.

Missing wardrobe, costume-assistant, agency and photographer fields were added only from explicit primary credits or Dušan’s own captions. The reviewed primary metadata is retained in [primary-film-credits-2026-10-07.json](primary-film-credits-2026-10-07.json). A source’s Costume design, Wardrobe styling and Photography roles remain distinct: for example, Konto Bariéry credits Dušan for costume design and Adéla Terčová for wardrobe styling. Photographer credits do not relabel extracted frames as photographs by that person.

The logged-in Instagram profile still displayed 47 publications. Available carousels were revisited; the frameset carousel contains short clips rather than an additional original-photo archive. The Tagged tab did not populate during this pass. No unrelated suggested-post media were used.

## Exclusions and remaining gaps

- Einar’s Dragevokter, Gapestokk and the shorter selfie/Trollfie films feature different casts, stories or outfits. They were compared and rejected for Duedekning despite sharing a client/production company.
- Independent fitting/close-up photographs are still unavailable for many campaigns. Their expanded galleries are clearly evidenced film stills. No unrelated workshop photo was assigned to fill a gap.
- Magenta TV + Netflix and McDonald’s Ronald McDonald House film still lack verified director/production/precise wardrobe-role credits. Some uncaptioned costume studies still lack a client. Blank fields were not filled by inference.
- Some older public sources are only 360/480/720p, and some photographs are under 1000px. Full-HD replacements were used where an exact source could be found. Native dimensions cap enlargement, but a small source cannot provide Retina-level detail; no artificial upscale disguises that limitation.
- [Published assets](published-assets.json) records source, derivative and pairing evidence. [Campaign associations](campaign-associations.json) records every active gallery image and its exact film or unassigned-study status. Historical superseded assets remain marked as withheld, not current coverage.

## Validation

`npm run check` passed all five catalogue checks, TypeScript compilation and the production build. Actual decoded dimensions matched all 343 unique active originals/posters and their responsive variants; every active image has current provenance. Gallery file hashes contain no exact duplicate within a collection.

Playwright checks at 320, 390, 768, 960, 1024, 1366 and 1920px found no horizontal overflow. Previous/Next stays visible after scrolling; 12px desktop neighbouring titles and unchanged 24px arrows were confirmed. Long credit lists scroll within the fixed panel on a 600px-high laptop viewport. All four new HD replacements played successfully at 1920×1080. The photograph viewer keeps 56px close/arrow targets, changes images by keyboard, closes with Escape and restores page scrolling. The three renamed legacy URLs redirect to their canonical projects. Final archive and project screenshots were visually reviewed.

## Current collection coverage

A field count records information supported by sources, not a claim that every possible production role is known. Titles and primary source links also remain in the catalogue data. Publication dates do not divide the public archive.

| Collection | Gallery images | Films | Verified information fields |
| --- | ---: | ---: | ---: |
| Proud — Zero Gravity | 7 | 1 | 5 |
| LEGO — Hera & Hunter | 7 | 1 | 2 |
| Raiffeisen — Spooky Vintage Shopping | 3 | 1 | 5 |
| Talkmore — Nøkken | 5 | 1 | 2 |
| Vypsaná fixa — Fakin party | 9 | 1 | 5 |
| McDonald’s — Cheese Saga | 7 | 1 | 2 |
| adidas — You Got This | 3 | 1 | 7 |
| Komerční banka — Eva Adamczyková | 4 | 1 | 6 |
| Rohlík — Mothers | 6 | 1 | 6 |
| Slovenská sporiteľňa — Everest | 6 | 1 | 6 |
| Budvar 33 | 6 | 3 | 5 |
| Post Bellum — Mother | 5 | 1 | 5 |
| Národní muzeum — Nové expozice | 6 | 1 | 3 |
| LEGO Friends — Heartlake City | 6 | 1 | 2 |
| Engelmüller — Drive to Win | 7 | 1 | 6 |
| ČVUT — Science across generations | 5 | 1 | 4 |
| Baťa — All in two | 7 | 1 | 6 |
| BILLA — MasterChef | 4 | 1 | 6 |
| Favorit | 4 | 1 | 5 |
| ROSSMANN | 4 | 1 | 5 |
| Vitana — Gorilovačka | 6 | 1 | 6 |
| Škoda — 130 let | 3 | 1 | 4 |
| T-Mobile — Magenta TV: Crime Story | 5 | 1 | 5 |
| T-Mobile — Magenta TV + Netflix | 5 | 1 | 2 |
| Vodafone — Unlimited Honesty | 4 | 2 | 4 |
| L’Oréal Men Expert — Hydra Energetic | 6 | 1 | 4 |
| mBank — Father & son | 3 | 1 | 5 |
| Pilsner Urquell — Taste Worth Protecting | 4 | 1 | 2 |
| Orange — Hockey generations | 5 | 1 | 2 |
| Leffe — Monks & armour | 4 | 1 | 1 |
| Talkmore — Duedekning | 7 | 1 | 2 |
| E.ON — It’s on us | 3 | 1 | 5 |
| Garnier — Crazy decisions | 4 | 1 | 1 |
| INVEGA | 4 | 1 | 4 |
| Konto Bariéry | 6 | 1 | 6 |
| McDonald’s — Dům Ronalda McDonalda | 3 | 1 | 2 |
| innogy — Domácí asistence | 3 | 1 | 2 |
| Telekom — Christmas bookshop | 3 | 1 | 2 |
| mBank — Colourful wardrobes | 3 | 1 | 3 |
| Pilsner Urquell — At the pub | 4 | 1 | 2 |
| Tropicana — Vitality | 3 | 1 | 7 |
| Deeptime — We Turn Sand Into Sound | 4 | 1 | 4 |
| BITmarkets — Investor stories | 3 | 1 | 2 |
| LEGO NINJAGO — Gift Like a Ninja | 3 | 1 | 2 |
| Vagonáři — One Damn Photo | 3 | 1 | 3 |
| Bolíto — 70 °C | 4 | 1 | 4 |
| Škoda Superb — Split-screen campaign | 4 | 0 | 4 |
| Škoda — Social stories | 6 | 0 | 4 |
| Raiffeisen — Wardrobe fittings | 8 | 0 | 5 |
| E.ON — Wardrobe fittings | 3 | 0 | 0 |
| Period wardrobe | 7 | 0 | 0 |
| Armour workshop | 1 | 0 | 0 |
| Purple and gold costume | 2 | 0 | 0 |
| Blue-haired character costume | 1 | 0 | 0 |
| Gold and white armour | 1 | 0 | 0 |
| Animal costume studies | 2 | 0 | 0 |
| Utility costume study | 1 | 0 | 0 |
| Dark character studies | 1 | 0 | 0 |
| Colour studies & fittings | 8 | 0 | 0 |
| Everyday wardrobe | 26 | 0 | 0 |
| Youth wardrobe | 5 | 1 | 2 |
