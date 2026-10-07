import { access, mkdir, readFile, writeFile, rm } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { build } from 'vite'

const temporary = resolve('node_modules/.tmp/portfolio-ssr')
await build({ build: { ssr: 'src/entry-server.ts', outDir: temporary, emptyOutDir: true } })
try {
  const { render, paths, pageMetadata, siteUrl, legacyProjectRoutes, videos } = await import(pathToFileURL(`${temporary}/entry-server.js`).href)
  for (const video of videos) {
    if (video.url.startsWith('https://')) continue
    try { await access(resolve('public', video.source.slice(1))) }
    catch { throw new Error(`Missing film ${video.source}. Run npm run media:upload and commit src/data/hosted-videos.json before deploying.`) }
  }
  if (videos.every(video => video.url.startsWith('https://'))) {
    await rm('dist/videos', { recursive: true, force: true })
  }
  const template = await readFile('dist/index.html', 'utf8')
  const escape = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])
  const metadata = path => {
    const meta = pageMetadata(path)
    const named = { description: meta.description, robots: meta.robots, 'twitter:card': 'summary_large_image', 'twitter:title': meta.title, 'twitter:description': meta.description, 'twitter:image': meta.image, 'twitter:image:alt': meta.imageAlt }
    const properties = { 'og:title': meta.title, 'og:description': meta.description, 'og:site_name': 'Dušan Bebčák', 'og:type': 'website', 'og:url': meta.url, 'og:image': meta.image, 'og:image:width': meta.imageWidth, 'og:image:height': meta.imageHeight, 'og:image:alt': meta.imageAlt }
    return `<title>${escape(meta.title)}</title>\n` + Object.entries(named).map(([name, value]) => `<meta name="${name}" content="${escape(value)}">`).join('\n') + '\n' + Object.entries(properties).filter(([,value])=>value !== '').map(([name,value])=>`<meta property="${name}" content="${escape(value)}">`).join('\n') + (meta.url ? `\n<link rel="canonical" href="${escape(meta.url)}">` : '') + `\n<script id="page-schema" type="application/ld+json">${JSON.stringify(meta.structuredData).replace(/</g, '\\u003c')}</script>`
  }
  for (const path of [...paths, '/404']) {
    const app = await render(path)
    const html = template.replace('<!--page-head-->', metadata(path)).replace('<div id="app"></div>', `<div id="app">${app}</div>`)
    const output = path === '/404' ? 'dist/404.html' : path === '/' ? 'dist/index.html' : `dist${path}/index.html`
    await mkdir(dirname(output), { recursive: true })
    await writeFile(output, html)
  }
  for (const { path, redirect } of legacyProjectRoutes) {
    const html = template.replace('<!--page-head-->', metadata(redirect) + `
<meta http-equiv="refresh" content="0; url=${escape(redirect)}">`).replace('<div id="app"></div>', `<div id="app">${await render(redirect)}</div>`)
    const output = `dist${path}/index.html`
    await mkdir(dirname(output), { recursive: true })
    await writeFile(output, html)
  }
  if (siteUrl) {
    const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + paths.map(path => `  <url><loc>${escape(siteUrl + path)}</loc></url>`).join('\n') + '\n</urlset>\n'
    await writeFile('dist/sitemap.xml', xml)
  }
  await writeFile('dist/robots.txt', 'User-agent: *\nAllow: /\n' + (siteUrl ? `\nSitemap: ${siteUrl}/sitemap.xml\n` : ''))
  console.log(`Prerendered ${paths.length} portfolio pages, ${legacyProjectRoutes.length} legacy redirects and a noindex 404 page.`)
  if (!siteUrl) console.log('VITE_SITE_URL is unset: canonical links and sitemap await the confirmed public domain.')
} finally {
  await rm(temporary, { recursive: true, force: true })
}
