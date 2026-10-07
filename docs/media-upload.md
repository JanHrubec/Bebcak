# Upload the portfolio films to Vercel Blob

The website images stay in Git. Only the 50 films currently used by the catalogue are uploaded. Local videos and downloaded research originals remain on this computer as backups but are ignored by Git.

1. Open the existing portfolio project in Vercel. In **Storage**, choose **Create Storage → Blob**. Choose **Public** access, name the store, and connect it to the portfolio project for **Development, Preview and Production**. Public access lets the native players load films without an authenticated API.
2. In a terminal, open this repository and run:

   ```sh
   npx vercel link
   ```

   Log in if prompted and select the **existing** Vercel portfolio project. The local `.vercel` folder is ignored by Git.
3. Pull its Development environment into the ignored local file:

   ```sh
   npx vercel env pull .env.local --environment=development
   ```

   The connected Blob store supplies the SDK credentials. If they are missing, check the store’s project connection includes Development and pull again. Do not paste credentials into chat or use a `VITE_` prefix for secrets.

   If the pull shows only `VERCEL_OIDC_TOKEN`, login worked but Blob storage is not connected to Development. Open the Public Blob store’s **Projects** tab, connect `bebcak`, or choose **⋯ → Update Project Connection**, and enable **Development**. Pull again; the SDK needs `BLOB_STORE_ID` with OIDC, or `BLOB_READ_WRITE_TOKEN`. You do not need to repeat `vercel link`.
4. Upload the films:

   ```sh
   npm run media:upload
   ```

   Keep the terminal open until all 50 films are ready. The command uses multipart uploads and immutable content-hash paths, saves each public URL in `src/data/hosted-videos.json`, and resumes safely if interrupted. It neither deletes local originals nor overwrites remote files. It does not upload research material or unused films.
5. Verify public availability and run the project checks:

   ```sh
   npm run media:verify
   npm run check
   ```

   Verification checks all 50 public URLs, response content types and sizes, plus checksums against the local files. The Vercel build fails if a catalogue film has neither a public URL nor a local file, so an incomplete migration cannot silently publish broken players.
6. In Vercel’s **Settings → Environment Variables**, set `VITE_SITE_URL` to the confirmed website origin for Production and Preview. This is a public domain value, not a secret. The video URLs are already stored in the committed manifest; they need no browser-facing credential.
7. Review and commit the complete portfolio, then push to the connected branch:

   ```sh
   git add -A
   git diff --cached --stat
   git commit -m "Finalize portfolio and host videos on Vercel Blob"
   git push origin main
   ```

   The repository’s current branch is `main`. Verify Vercel’s **Settings → Git → Production Branch** also uses `main` before the push. A local commit alone does not trigger deployment; the push does.
8. Watch the automatic deployment in Vercel. The committed `vercel.json` sets the build to `npm run build`, output to `dist`, clean URLs and permanent legacy-project redirects. Open the production portfolio and test a video and a direct project URL.

Source: [Vercel’s Blob setup and SDK documentation](https://vercel.com/docs/vercel-blob/using-blob-sdk).

## Later updates

After replacing or adding a local film, rerun `npm run media:upload` and `npm run media:verify`, then commit the updated catalogue and public-URL manifest. Changed bytes receive a new immutable URL, avoiding stale cached videos. Existing remote films are retained; obsolete Blob objects can be reviewed separately before deletion.

Local previews use hosted URLs once recorded. A fresh clone therefore does not need to download the original film collection. Keep a separate backup of `public/videos` and `docs/research/assets` before removing them from this computer. The ignored `.env.local` is never committed.
