# Release review — 13 October 2026

Confirmed production domain: `https://bebcak.com`. Default canonical origin and generated sitemap now use this address; remove any conflicting Vercel environment override before deployment.

## Completed

- Added Vercel Preview/Development noindex behavior, with matching client and pre-rendered metadata; preview builds omit the sitemap and allow crawlers to read the noindex directive.
- Added structured project breadcrumbs and a structured home project list; retained evidence-based participation attribution.
- Corrected social sharing metadata for CSS-cropped AFK costume thumbnails. Sharing uses an intact photo where available, otherwise the branded image; missing pages no longer declare a canonical URL.
- Project SEO descriptions distinguish photo-only collections from pages with films.
- Moved the Manrope stylesheet link into HTML so the browser discovers it without waiting for the application CSS import chain.
- Added build-integrated generated-HTML checks, launch/SEO instructions, a maintenance guide and root agent instructions. Updated outdated media counts and domain guidance.

## Verified locally

- Seven catalogue/layout tests, TypeScript compilation and production build.
- SEO checks across all 57 published pages and nine legacy redirects: unique titles, descriptions, absolute canonicals/social images with existing assets, JSON-LD/breadcrumbs, production sitemap, noindex 404, icons, and exclusion of the local video archive.
- Separate Vercel Preview build: all pages noindex, no sitemap. Restored production build afterward.
- Production browser checks at 1440 and 390 px: three/one home columns, home/About/AFK Arena/E.ON direct routes, client metadata updates, no horizontal overflow, lightbox keyboard navigation/close, email link and actual HTTP 404. No page errors or hydration warnings.

Domain/DNS changes, HTTPS, public-domain responses, Search Console ownership and submission remain the deployment steps in [release-and-seo.md](release-and-seo.md). This review did not publish the local changes or change hosting/account settings.
