# Final website pass — 7 October 2026

The public portfolio now contains **58 collections, 291 gallery images and 50 complete local films**. This pass supersedes the earlier 61-collection count: three studies sourced only from the third-party demo were withheld after the requested attribution audit. All removed media remains in the research archive rather than the public asset directory.

## Attribution

Every active collection is backed by either an explicit professional credit (**28**) or an exact publication on Dušan’s @bebcak professional portfolio (**30**). These are different strengths of evidence. Own publication supports his professional association with the work; it does not independently establish his particular role, garment fabrication or authorship of a reference drawing. Such claims remain omitted. This respects the owner’s direction to treat his Instagram as the main source without pretending that every post contains full crew credits.

The record for every collection is in [the attribution audit](project-attribution-audit-2026-10-07.json), with stable source URLs and the reason for its classification. The three [withheld demo studies](withheld-demo-studies.json)—Animal costume studies, Utility costume study and Dark character studies—have no matching verified personal publication or professional credit. Their files are preserved under `assets/withheld-demo/`.

Primary sources were checked again: ADvocado explicitly names Dušan for adidas, Komerční banka and Konto Bariéry; Mugshots explicitly credits him for Škoda — 130 let; the director credits him for Post Bellum — Mother and One Damn Photo; BILLA’s director credits wardrobe/costumes and the named assistant. ROSSMANN’s exact Armada producer publication names him for styling; its different earlier Mugshots campaign names other stylists and was not mixed with this film. Selected Instagram captions and the profile grid were revisited through the user-authenticated browser. No same-name registry match was used.

## Layout and playback

- The **project list** uses three columns from 960px, two from 640–959px and one below 640px. The curated sequence is distributed into the shortest column; strong costume work remains at the top. No year grouping or filters.
- **Project pages** use an independent two-column photo flow on larger screens and one column on phones. Portrait photographs keep their proportions without the empty row gaps of mixed-height grid cells; panoramic and leading landscape images span the available width. Single images stay centred and capped at native width. The actual LEGO fitting now leads its gallery, with the reference image later.
- Native films start muted when visible, keep accessible browser controls and pause off screen. Playback resumes when returning to a film that was playing; manually paused films remain paused. A visible play fallback is provided when browser/low-power settings block autoplay, plus an error retry. Players are disconnected and paused on navigation.
- Portrait films fit the available phone viewport beneath the navigation and title. The fixed translucent desktop sidebar, smaller neighbouring titles, unchanged arrows and restrained sliding animations remain.
- Project descriptions remain removed. Titles, source-backed crew facts and accessible image alt text remain. Shared wardrobe credits stay shared. A project has one main h1; the sidebar title is an h2.

## Final image and film pass

All 58 covers and all gallery images were reviewed on labelled contact sheets, with suspicious images inspected at full size. The E.ON close-up was sideways in its source; its upright derivative rotates the original pixels without inventing detail. Rohlík’s newer stills had fixed side mattes; those were removed, and its final wardrobe close-up is framed above the foreign caption band. Sharper, clearer wardrobe moments now preview Rohlík and mBank.

**innogy — Domácí asistence** now uses [innogycz’s official film](https://www.youtube.com/watch?v=kIVgujoxAFQ), discovered through the exact campaign article. Its complete 33-second 1920×1080 film matches the existing repost scene for scene: green overshirt/yellow T-shirt, grandfather’s green then pale shirt/braces, red cardigan/striped shirt, blue repair uniform and family ending. Six individually reviewed full-HD stills replace the three soft square repost frames. The full landscape view and source audio are retained; the Instagram watermark and repost framing are absent. Film identity does not add an uncredited role for Dušan. The native file is remuxed for fast-start playback. [Official source record](innogy-official-source-2026-10-07.json).

The dimension/provenance/duplicate checks are in [the final sizing audit](final-sizing-audit-2026-10-07.json). Images and films are capped at native pixel width; responsive variants are selected for their layout. Some older sources are still only 360/480/720p. A native-size limit does not manufacture Retina detail, and none of these sources were artificially upscaled. Photos and film stills remain distinguished in their provenance and accessible alt text.

## About, metadata and icon

The first-person About copy now uses verifiable professional work and collaborators. The Prague location claim was omitted because the only direct source was the unverified demo. No education, awards, personal history or fabricated creative-process quotation was added. Phone/email keep the reserved spaces requested by the owner; Instagram is the established public contact.

The build now pre-renders the home page, About and all 58 published project URLs. Their real content, unique titles/descriptions, social metadata and JSON-LD are available before JavaScript runs. Client-side navigation updates the same metadata. The Person schema names the correct Dušan and his Instagram; project schema records him as a contributor only where explicitly credited, never as the sole creator of an entire advert. No upload/shoot dates are invented for video rich results.

The monochrome DB vector favicon, 32px PNG, multi-size ICO, 180px Apple icon and 1200×630 sharing preview were visually checked. Font preconnects and cached-image load handling are included. Unknown routes have a noindex missing-page view and static 404 document. The local production preview serves the correct pre-rendered HTML, including actual 404 status for missing pages; six legacy project paths are preserved as redirects.

The previously hard-coded `bebcak.com` was not verified as the intended domain. `VITE_SITE_URL` is therefore configurable and empty until confirmed. A build with a reserved test origin verified all 60 canonical URLs, absolute social images, sitemap entries and robots reference; it was then rebuilt without that test domain. The real-domain sitemap/canonicals are generated automatically once the owner supplies the origin. No site was deployed.

## Validation

Six catalogue tests, TypeScript compilation, client/SSR production builds and pre-rendering pass. Browser checks at 320, 390, 768, 960, 1024, 1366 and 1920px confirm the archive column counts and no horizontal overflow. The production preview has no hydration warnings or JavaScript errors on the tested pages. Muted HD playback, portrait viewport sizing, off-screen pause/resume, project navigation/browser-back, photograph arrows/Escape and scroll restoration were verified. The configured-domain SEO branch and the unconfigured-domain branch were both checked. Hosting instructions and domain/contact configuration are documented in [README](../../README.md).

## Collection-by-collection evidence

| Collection | Attribution evidence | Source |
| --- | --- | --- |
| Proud — Zero Gravity | Dušan’s own portfolio; precise role unconfirmed | [Publication](https://www.instagram.com/p/DKMA4OnMTef/) |
| LEGO — Hera & Hunter | Dušan’s own portfolio; precise role unconfirmed | [Publication](https://www.instagram.com/p/C8llXDgNFOV/) |
| Raiffeisen — Spooky Vintage Shopping | Explicit professional credit | [Publication](https://www.instagram.com/p/DQKqcPIDGy2/) |
| Talkmore — Nøkken | Dušan’s own portfolio; precise role unconfirmed | [Publication](https://www.instagram.com/p/DFlPHEJMUbB/) |
| Vypsaná fixa — Fakin party | Explicit professional credit | [Publication](https://www.instagram.com/p/DYXTNEtiB2S/) |
| McDonald’s — Cheese Saga | Dušan’s own portfolio; precise role unconfirmed | [Publication](https://www.instagram.com/p/C8UmP9cNWK3/) |
| adidas — You Got This | Explicit professional credit | [Publication](https://vimeo.com/1088383230) |
| Komerční banka — Eva Adamczyková | Explicit professional credit | [Publication](https://vimeo.com/1020676248) |
| Rohlík — Mothers | Explicit professional credit | [Publication](https://www.instagram.com/p/DCCz2MCRSd2/) |
| Slovenská sporiteľňa — Everest | Explicit professional credit | [Publication](https://www.instagram.com/p/DFh6Sg1smBS/) |
| Budvar 33 | Explicit professional credit | [Publication](https://www.instagram.com/p/Dc4Dh7QtqiD/) |
| Post Bellum — Mother | Explicit professional credit | [Publication](https://vimeo.com/912061653) |
| Národní muzeum — Nové expozice | Dušan’s own portfolio; precise role unconfirmed | [Publication](https://www.instagram.com/p/C8UWyawtXuq/) |
| LEGO Friends — Heartlake City | Dušan’s own portfolio; precise role unconfirmed | [Publication](https://www.instagram.com/p/DJD5173MM7i/) |
| Engelmüller — Drive to Win | Explicit professional credit | [Publication](https://vimeo.com/396010194) |
| ČVUT — Science across generations | Explicit professional credit | [Publication](https://www.creativeembassy.net/wolfberg-cvut) |
| Baťa — All in two | Explicit professional credit | [Publication](https://vimeo.com/277521929) |
| BILLA — MasterChef | Explicit professional credit | [Publication](https://vimeo.com/797238968) |
| Favorit | Explicit professional credit | [Publication](https://vimeo.com/268355869) |
| ROSSMANN | Explicit professional credit | [Publication](https://cz.linkedin.com/company/armada-films) |
| Vitana — Gorilovačka | Explicit professional credit | [Publication](https://vimeo.com/540684470) |
| Škoda — 130 let | Explicit professional credit | [Publication](https://www.mugshots.cz/) |
| T-Mobile — Magenta TV: Crime Story | Explicit professional credit | [Publication](https://www.instagram.com/p/Dc4Ek6WSHlF/) |
| T-Mobile — Magenta TV + Netflix | Dušan’s own portfolio; precise role unconfirmed | [Publication](https://www.instagram.com/p/DQKuox1jGWt/) |
| Vodafone — Unlimited Honesty | Dušan’s own portfolio; precise role unconfirmed | [Publication](https://www.instagram.com/p/C8T3ZOJtsUl/) |
| L’Oréal Men Expert — Hydra Energetic | Explicit professional credit | [Publication](https://www.instagram.com/p/DUoPG4EEp4z/) |
| mBank — Father & son | Explicit professional credit | [Publication](https://www.instagram.com/boogiefilms_prague/reel/DZKAr3nMbjq/) |
| Pilsner Urquell — Taste Worth Protecting | Dušan’s own portfolio; precise role unconfirmed | [Publication](https://www.instagram.com/p/C8UV-S1N_eq/) |
| Orange — Hockey generations | Dušan’s own portfolio; precise role unconfirmed | [Publication](https://www.instagram.com/p/C8ljbbFNNWD/) |
| Leffe — Monks & armour | Dušan’s own portfolio; precise role unconfirmed | [Publication](https://www.instagram.com/p/C8UY_Dctrd9/) |
| Talkmore — Duedekning | Dušan’s own portfolio; precise role unconfirmed | [Publication](https://www.instagram.com/p/DCT3S7tMzxC/) |
| E.ON — It’s on us | Dušan’s own portfolio; precise role unconfirmed | [Publication](https://www.instagram.com/p/DQd4pgojHgA/) |
| Garnier — Crazy decisions | Dušan’s own portfolio; precise role unconfirmed | [Publication](https://www.instagram.com/p/C8UVf4mtukg/) |
| INVEGA | Explicit professional credit | [Publication](https://www.instagram.com/p/DQKsAeEDOHi/) |
| Konto Bariéry | Explicit professional credit | [Publication](https://vimeo.com/891619491) |
| McDonald’s — Dům Ronalda McDonalda | Dušan’s own portfolio; precise role unconfirmed | [Publication](https://www.instagram.com/p/C8h_7oZtFtv/) |
| innogy — Domácí asistence | Dušan’s own portfolio; precise role unconfirmed | [Publication](https://www.instagram.com/p/C8TzvRXNBoK/) |
| Telekom — Christmas bookshop | Dušan’s own portfolio; precise role unconfirmed | [Publication](https://www.instagram.com/p/C8TzysvtOur/) |
| mBank — Colourful wardrobes | Dušan’s own portfolio; precise role unconfirmed | [Publication](https://www.instagram.com/p/C8madAFtC4z/) |
| Pilsner Urquell — At the pub | Dušan’s own portfolio; precise role unconfirmed | [Publication](https://www.instagram.com/p/C8UVrB8tIMe/) |
| Tropicana — Vitality | Explicit professional credit | [Publication](https://vimeo.com/272173846) |
| Deeptime — We Turn Sand Into Sound | Explicit professional credit | [Publication](https://www.creativeembassy.net/vacke-deeptime) |
| BITmarkets — Investor stories | Dušan’s own portfolio; precise role unconfirmed | [Publication](https://www.instagram.com/p/C8UVQNPt85_/) |
| LEGO NINJAGO — Gift Like a Ninja | Dušan’s own portfolio; precise role unconfirmed | [Publication](https://www.instagram.com/p/C8UezzXNHd1/) |
| Vagonáři — One Damn Photo | Explicit professional credit | [Publication](https://vimeo.com/238833581) |
| Bolíto — 70 °C | Explicit professional credit | [Publication](https://vimeo.com/466122798) |
| Škoda Superb — Split-screen campaign | Explicit professional credit | [Publication](https://www.instagram.com/p/DbJJC7pGubh/) |
| Škoda — Social stories | Explicit professional credit | [Publication](https://www.instagram.com/p/DYfX4ByGmOi/) |
| Raiffeisen — Wardrobe fittings | Explicit professional credit | [Publication](https://www.instagram.com/p/DQc4eNJjIJ5/) |
| E.ON — Wardrobe fittings | Dušan’s own portfolio; precise role unconfirmed | [Publication](https://www.instagram.com/p/DQd4pgojHgA/) |
| Period wardrobe | Dušan’s own portfolio; precise role unconfirmed | [Publication](https://www.instagram.com/p/DRzoiZMDLoM/) |
| Armour workshop | Dušan’s own portfolio; precise role unconfirmed | [Publication](https://www.instagram.com/p/DFlPHEJMUbB/) |
| Purple and gold costume | Dušan’s own portfolio; precise role unconfirmed | [Publication](https://www.instagram.com/p/C8lmaBTtkQv/) |
| Blue-haired character costume | Dušan’s own portfolio; precise role unconfirmed | [Publication](https://www.instagram.com/p/C8lkOq9Nrts/) |
| Gold and white armour | Dušan’s own portfolio; precise role unconfirmed | [Publication](https://www.instagram.com/p/C8lkMZzNOy9/) |
| Colour studies & fittings | Dušan’s own portfolio; precise role unconfirmed | [Publication](https://www.instagram.com/p/DRvRoeLDIEG/) |
| Everyday wardrobe | Dušan’s own portfolio; precise role unconfirmed | [Publication](https://www.instagram.com/p/DIajKOQCqmR/) |
| Youth wardrobe | Dušan’s own portfolio; precise role unconfirmed | [Publication](https://www.instagram.com/p/C8T3SIsN6TJ/) |

## Hosted media and further credits

All 50 active films are now recorded as public Blob URLs with source hashes and sizes in `src/data/hosted-videos.json`. Public availability and local-byte identity were verified. Optimized website images remain in Git; research originals and local video backups are ignored. A further credit search added 14 verified crew fields across seven collections, without upgrading uncredited wardrobe-role claims. See [additional credits](additional-credits-2026-10-07.json). The producer’s Pilsner submission establishes Jan Velický for that exact film; the generic Tomáš Kotas showreel was removed as a source. Vercel Analytics already added on the remote branch is preserved.

The owner subsequently supplied `dusan@bebcak.com` and `+420 774 704 716`; both are now clickable in the home sidebar and About contact section and included in the Person metadata. This supersedes the intentionally empty contact spaces described above.
