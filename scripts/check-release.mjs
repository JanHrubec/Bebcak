import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { projects } from '../src/data/projects.ts'
import { legacyProjectRoutes } from '../src/data/legacyRoutes.ts'

// Validate the HTML search engines receive, not only client-side metadata.
const read = path => readFileSync(path, 'utf8')
const paths = ['/', '/about', ...projects.map(project => `/project/${project.slug}`)]
const htmlAt = path => read(path === '/' ? 'dist/index.html' : `dist${path}/index.html`)
const canonical = html => html.match(/<link rel="canonical" href="([^"]+)"/)?.[1]
const schema = html => JSON.parse(html.match(/<script id="page-schema" type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1] ?? 'null')
const origin = new URL(canonical(htmlAt('/'))).origin
const indexable = !htmlAt('/').includes('content="noindex, follow"')
const titles = new Set()
for (const path of paths) {
  const html = htmlAt(path)
  assert.equal(canonical(html), origin + path, `Canonical mismatch: ${path}`)
  const title = html.match(/<title>(.*?)<\/title>/)?.[1]
  assert.ok(title?.includes('Dušan Bebčák'), `Missing page title: ${path}`)
  assert.ok(!titles.has(title), `Duplicate title: ${path}`)
  titles.add(title)
  assert.match(html, /<meta name="description" content="[^"]+">/)
  const socialImage = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1]
  assert.equal(new URL(socialImage).origin, origin)
  assert.ok(existsSync(`dist${new URL(socialImage).pathname}`), `Missing social image: ${path}`)
  assert.ok(schema(html)?.['@graph']?.length)
  assert.ok(!html.includes('<!--page-head-->'), `Unrendered metadata: ${path}`)
  assert.match(html, /<h1[\s>]/)
  const project = projects.find(p => path === `/project/${p.slug}`)
  if (project) {
    const page = schema(html)['@graph'].find(node => node['@type'] === 'WebPage')
    assert.equal(page.mainEntity.name, project.title)
    assert.equal(page.breadcrumb.itemListElement.at(-1).item, origin + path)
  }
}
const missing = read('dist/404.html')
assert.match(missing, /content="noindex, follow"/)
assert.equal(canonical(missing), undefined, '404 must not claim a canonical project URL')
for (const { path, redirect } of legacyProjectRoutes) assert.equal(canonical(htmlAt(path)), origin + redirect)
const robots = read('dist/robots.txt')
assert.match(robots, /Allow: \//)
if (indexable) {
  const sitemap = read('dist/sitemap.xml')
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1])
  assert.deepEqual(urls, paths.map(path => origin + path))
  assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`))
} else {
  assert.ok(!existsSync('dist/sitemap.xml'), 'Preview must not emit an indexable sitemap')
  assert.ok(!robots.includes('Sitemap:'))
  for (const path of paths) assert.match(htmlAt(path), /content="noindex, follow"/)
}
for (const asset of ['favicon.svg', 'favicon.ico', 'favicon-32.png', 'apple-touch-icon.png', 'social-preview.png']) assert.ok(existsSync(`dist/${asset}`), asset)
assert.ok(!existsSync('dist/videos'), 'Release must use the hosted manifest rather than ship the video archive')
console.log(`Release checks passed: ${paths.length} pages, canonical/social metadata, structured data, redirects, ${indexable ? 'sitemap' : 'preview noindex'}, icons and hosted media.`)
