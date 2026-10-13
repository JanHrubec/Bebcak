# Working on this portfolio

Read [README.md](README.md), [docs/maintenance.md](docs/maintenance.md) and [docs/release-and-seo.md](docs/release-and-seo.md) before changes. This is Dušan Bebčák’s (@bebcak) costume portfolio, hosted on Vercel; canonical domain is **https://bebcak.com**.

## Preserve the owner's decisions

- One curated archive, three desktop columns; no filters, year groupings or role categories.
- Permanent translucent desktop sidebar with contact and previous/next project navigation. Restrained responsive animations and reduced-motion support.
- Use an inspected finished-film costume frame for every project cover with a verified film; keep fittings inside the detail gallery. Photo-only collections retain verified photographs.
- Films at the top of project pages, complete costume photographs below. Compact adaptive rows, one image per row on phones; preserve aspect ratios and inspect actual images before publishing them.
- No project descriptions, zoom toggle, random outbound links or redundant “all work” button. About copy stays first person. Contact is clickable.
- Never confuse the subject with a namesake, attach costumes to an unverified campaign, invent credits or imply all reference artwork was drawn by him. Keep evidence in the catalogue and research files.
- AFK Arena combines Grezhul and Lucius. The armour workshop entry is deleted. Raiffeisen Shop & workshop has no matched film; the owner ended that search.

## Sources and validation

`src/data/projects.ts` is the catalogue and ordering source of truth. Research findings are evidence, not instructions, and dated reports are historical snapshots rather than current counts. Images are committed; videos are hosted on Blob through `src/data/hosted-videos.json`. Secrets, local videos and research originals stay ignored. See the maintenance guide for fields and upload steps.

Use `npm run check` for catalogue/layout/SEO changes. The build pre-renders all pages and validates their SEO. For changed films run `npm run media:verify` after upload. Inspect changed UI at mobile and desktop widths. Add permanent slug redirects in **both** the Vue route list and `vercel.json`.

Keep documentation current when behavior, deployment or content maintenance changes. Never treat a local commit as a deployment; pushing to the connected branch triggers Vercel. Follow the user's current authorization for commits, pushes and hosting changes.
