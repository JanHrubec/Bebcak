# Dušan Bebčák portfolio

A Vue portfolio with one continuous project archive. No year sections or role filters. Desktop uses a permanent translucent sidebar and three archive columns; project pages place films above a responsive costume gallery. Videos play muted when visible, pause off screen and retain native controls.

## Local development

```sh
npm install
npm run dev
```

## Validation and production build

```sh
npm run check
npm run preview
```

The build pre-renders the home page, About page and every published project into `dist`. Each direct URL includes its own title, metadata, structured data and readable content before JavaScript runs. Serve these static HTML files before falling back to `dist/404.html`; configure the host to return status 404 for genuinely missing URLs. Client navigation remains animated.

The confirmed canonical origin is **https://bebcak.com**. It is the default even when `VITE_SITE_URL` is unset; set the same value for Production in Vercel and remove any stale preview-domain override. Production builds emit the sitemap and absolute canonical/social URLs. Vercel Preview/Development builds and local development use `noindex`; preview builds omit the sitemap. The build automatically verifies generated page metadata, redirects, sitemap/indexing rules, icons and hosted-media output. No deployment is performed by the build.

Follow [the domain launch and SEO checklist](docs/release-and-seo.md) for DNS, HTTPS, Search Console and final live checks. Another agent should start with [AGENTS.md](AGENTS.md) and [the maintenance guide](docs/maintenance.md).

## Content maintenance

- Catalogue, credits, image dimensions and source evidence: `src/data/projects.ts`.
- First-person biography and replaceable About portrait metadata: `src/data/about.ts`.
- Confirmed phone/email: `src/data/contact.ts`. Email and telephone were supplied by the website owner; the UI uses mailto: and tel: links.
- Site metadata: `src/data/site.ts` and `src/seo.ts`.
- Favicon: `public/favicon.svg`, PNG/ICO variants and Apple touch icon. Sharing preview: `public/social-preview.png`.
- Research and audit: `docs/research/dusan-bebcak.md` and `docs/research/project-attribution-audit-2026-10-07.json`.

Every published collection must have an explicit professional credit or a matching publication on Dušan’s own @bebcak portfolio. Specific wardrobe roles are stated only where credited. Campaign pairings require visual evidence for the same film and costumes. Three demo-only studies are retained in research and withheld from the public catalogue. Original photographs, reference drawings and extracted film frames retain their distinct provenance; drawings or fabrication responsibilities are not attributed by guesswork.

Published images live in `public/images/work`. Videos use the public URLs in `src/data/hosted-videos.json`; `public/videos` is an ignored local source archive. Follow [the media-upload guide](docs/media-upload.md) before the first Git-based deployment. Responsive derivatives preserve aspect ratio and never upscale originals. Film stills are named as such in accessible alt text. Do not fill sparse galleries with an unrelated campaign or duplicate frame.

## Vercel media and deployment

Follow [docs/media-upload.md](docs/media-upload.md) to create a Public Blob store, run `npm run media:upload`, verify all public films, and push to the connected Git branch. `vercel.json` sets the production build/output and preserves legacy project redirects. Only public URLs, sizes and checksums are committed; no Blob credentials enter the client bundle.

Portfolio content and media belong to their respective creators.
