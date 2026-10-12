# Release and SEO — bebcak.com

The intended public address is **https://bebcak.com**, without `www`. The code now defaults to this origin. `VITE_SITE_URL` can override it, but must contain only an HTTP(S) origin, without a path, credentials, query or fragment. Use HTTPS in production. Local development and Vercel Preview/Development builds have `noindex`; Production builds emit the sitemap. This decision is baked into the build: changing environment settings requires a new deployment.

## Launch on the final domain

1. In the existing Vercel **bebcak** project, open **Settings → Domains**. Add `bebcak.com` and `www.bebcak.com`. Keep `bebcak.com` as the serving domain and configure `www.bebcak.com` to redirect permanently to `bebcak.com`. Use the DNS records Vercel displays for this project; do not copy an old IP address from a tutorial. Domain settings handle the hostname redirect, while `vercel.json` handles renamed project paths. [Vercel domain setup](https://vercel.com/docs/domains/working-with-domains/add-a-domain), [domain redirects](https://vercel.com/docs/domains/working-with-domains/deploying-and-redirecting).
2. At the domain registrar/DNS provider, update only the required website records. Retain mail-related MX, SPF, DKIM and DMARC records for `dusan@bebcak.com`; moving the website does not create an email mailbox. Wait for Vercel to show valid domain configuration and an active HTTPS certificate. Test both hostnames.
3. In **Settings → Environment Variables**, set **Production** `VITE_SITE_URL=https://bebcak.com`. Remove any outdated or temporary-domain value. The same canonical origin can be used for Preview, but never a deployment-specific URL. `VERCEL_ENV` is supplied by Vercel and is passed into the build automatically; don't manually override it in the dashboard.
4. Confirm **Settings → Git → Production Branch** is `main`. Run `npm run check`, review changes, then commit and push when authorized. A push to the connected production branch deploys automatically. Alternatively redeploy after changing environment values. A local commit does not deploy.
5. Check the live release, including direct links opened in a new browser tab:
   - `https://bebcak.com/` and `/about`: HTTP 200, correct contact information.
   - `/project/proud-zero-gravity` and `/project/eon`: correct titles and films; mobile gallery fits.
   - `/project/blue-haired-armour`: permanent redirect to `/project/afk-arena-grezhul-lucius`.
   - A made-up URL such as `/this-page-does-not-exist`: HTTP **404**, not a 200 home-page fallback; its HTML has `noindex`.
   - `https://www.bebcak.com/about`: permanent redirect preserving `/about`.
   - `/robots.txt`: allows crawling and references `https://bebcak.com/sitemap.xml`.
   - `/sitemap.xml`: only the home, About and current project URLs; no previews, old slugs or 404 page.
   - View page **source**, not only the inspector: canonical links, unique titles/descriptions and JSON-LD are already present in HTML. Production pages must not have `noindex` or an `X-Robots-Tag: noindex` header. Keep Vercel deployment protection on previews if desired; the public production site must be accessible without login.
6. In [Google Search Console](https://search.google.com/search-console), add a **Domain property** named `bebcak.com`. Add the exact DNS TXT record Google supplies, verify ownership and retain that record. No Google verification token can be preconfigured until Google issues it. [Ownership verification](https://support.google.com/webmasters/answer/9008080).
7. In Search Console → **Sitemaps**, submit `https://bebcak.com/sitemap.xml`. Use **URL Inspection** on the home page, About and a representative project. Run the live test, check Google can crawl the page and request indexing. Submission helps discovery; it does not guarantee indexing or rankings. [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
8. If an older website existed on this same domain, compare its known/search-indexed URLs with the new catalogue. Add individual permanent redirects only where there is a true equivalent, using both `src/data/legacyRoutes.ts` and `vercel.json`. Do not redirect every missing URL to the home page. Link the final site from Dušan’s Instagram profile and other verified professional profiles.

## What is already implemented

- Pre-rendered HTML for every published page, with crawlable project links and meaningful image alt text.
- Unique page titles and descriptions, canonical URLs, Open Graph/Twitter sharing metadata and existing favicon/Apple touch icon assets.
- Person and page structured data. Project data preserves the distinction between explicitly credited participation and publication on Dušan’s own portfolio. Project breadcrumbs and the home project list reflect actual navigation. Missing upload dates or unverified roles are not invented to qualify for a rich result.
- Sitemap generated from the same catalogue as navigation; no artificial `lastmod` dates, year grouping or fake freshness.
- Preview/development `noindex, follow`; crawler access stays allowed so the directive can be read. Preview builds omit the sitemap. [Google noindex guidance](https://developers.google.com/search/docs/crawling-indexing/block-indexing).
- Cropped CSS costume previews use an uncropped photo for social sharing if one exists, or the branded social preview otherwise; a crawler cannot reproduce CSS crops.
- Native muted video playback with hosted Blob media; the local video archive is excluded from the deployable output.
- Build-time checks for every page’s canonical, title, description, social image, structured data, breadcrumbs, redirects, sitemap/noindex rules, icons and hosted-media output.

## After launch

Check Search Console indexing and performance after Google has crawled the site; investigate reported errors rather than repeatedly resubmitting every page. Use PageSpeed Insights on the home page and a media-heavy project to evaluate the deployed site, especially on mobile. Keep image dimensions accurate, retain lazy loading and avoid adding unnecessary scripts or autoplaying several off-screen films.

The biography and interface are currently in English, with `lang="en"` and matching structured data. If a Czech version is wanted, add genuine translated pages and language navigation before introducing `hreflang`; changing the language tag alone is incorrect. Keep searchable, accurate campaign titles and natural writing. No keyword stuffing or hidden promotional text is needed.

If the origin changes later, update the default in `src/data/site.ts`, the Vercel environment and this guide, then rebuild and redirect the old hostname. Social services can cache previews; request a refresh through their sharing/debugging tools after a preview change.
