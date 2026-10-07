import { existsSync, readFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { resolve } from 'node:path'
import test from 'node:test'
import assert from 'node:assert/strict'
import { projects, getProjectBySlug, getAdjacentProjects } from '../src/data/projects.ts'
import { getVideoUrl, hostedVideos } from '../src/data/media.ts'
const exists = path => path.startsWith('/') && existsSync(resolve('public', path.slice(1)))
test('the real collection has unique routes, source references and unified navigation', () => {
  assert.equal(new Set(projects.map(p => p.slug)).size, projects.length)
  assert.ok(projects.length >= 50)
  for (const [index, project] of projects.entries()) {
    assert.match(project.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/)
    assert.equal(getProjectBySlug(project.slug), project)
    assert.deepEqual(getAdjacentProjects(project.slug), { prev: projects[index - 1] ?? null, next: projects[index + 1] ?? null })
    assert.ok(project.sources.length)
    for (const source of project.sources) assert.equal(new URL(source.url).protocol, 'https:')
    assert.equal('year' in project, false)
  }
  assert.deepEqual(getAdjacentProjects('missing'), { prev: null, next: null })
  for (const fake of ['velvet-dusk', 'nocturnal-echoes', 'urban-tapestry']) assert.equal(getProjectBySlug(fake), undefined)
})
test('responsive photographs exist and films use valid local or public sources', () => {
  for (const project of projects) {
    for (const image of [project.thumbnail, ...project.images, ...project.videos.flatMap(v => v.poster ? [v.poster] : [])]) {
      assert.ok(exists(image.src), image.src)
      assert.ok(exists(image.smallSrc), image.smallSrc)
      assert.ok(image.width > 0 && image.height > 0 && image.smallWidth <= image.width)
      assert.ok(image.alt)
    }
    assert.ok(project.images.length, `${project.title} needs photographs or clearly identified film stills`)
    const hashes = project.images.map(image => createHash('sha256').update(readFileSync(resolve('public', image.src.slice(1)))).digest('hex'))
    assert.equal(new Set(hashes).size, hashes.length, `${project.title} repeats a gallery image`)
    for (const video of project.videos) {
      assert.equal(new URL(video.url).protocol, 'https:')
      assert.equal(video.provider, 'native', 'films must not depend on inaccessible embeds')
      const playback = getVideoUrl(video.src)
      if (playback === video.src) assert.ok(exists(video.src), video.src)
      else {
        assert.equal(new URL(playback).protocol, 'https:')
        assert.match(hostedVideos[video.src].sha256, /^[a-f0-9]{64}$/)
        assert.ok(hostedVideos[video.src].size > 0)
      }
      assert.ok(video.width > 0 && video.height > 0)
    }
  }
})
test('reviewed end cards and costume matches retain the corrected campaign identities', () => {
  const owner = file => projects.find(p => p.videos.some(v => v.src.endsWith(`/${file}.mp4`)))
  assert.equal(owner('innogy-domaci-asistence-hd').slug, 'innogy-domaci-asistence')
  assert.equal(owner('C8h_7oZtFtv').slug, 'mcdonalds-ronald-mcdonald-house')
  assert.equal(owner('lego-hera-hunter-hd').slug, 'lego-hera-hunter')
  assert.equal(owner('C8UV-S1N_eq').slug, 'pilsner-taste-worth-protecting')
  assert.ok(getProjectBySlug('lego-hera-hunter').images.length >= 2)
  assert.equal(getProjectBySlug('lego-hera-hunter').title, 'LEGO — Hera & Hunter')
  assert.equal(getProjectBySlug('proud-zero-gravity').title, 'Proud — Zero Gravity')
  assert.equal(getProjectBySlug('post-bellum-mother').title, 'Post Bellum — Mother')
  assert.ok(getProjectBySlug('proud-zero-gravity').sources.some(s => s.url === 'https://www.vccp.com/czechia/work/proud/zero-gravity'))
  assert.equal(getProjectBySlug('lego-friends').title, 'LEGO Friends — Heartlake City')
  assert.equal(getProjectBySlug('mcdonalds-ronald-mcdonald-house').title, 'McDonald’s — Dům Ronalda McDonalda')
  assert.equal(getProjectBySlug('tmobile-magenta-tv-netflix').title, 'T-Mobile — Magenta TV + Netflix')
  assert.equal(getProjectBySlug('talkmore-duedekning').title, 'Talkmore — Duedekning')
  assert.ok(getProjectBySlug('talkmore-duedekning').images.some(i => i.src === '/images/work/woodland-costumes/image-1.webp' && i.evidence.basis === 'visual-match'))
  assert.equal(getProjectBySlug('armour-fittings').images.length, 1, 'different green workshop armour stays unassigned')
  for (const slug of ['proud-zero-gravity', 'lego-hera-hunter', 'talkmore-nokken', 'post-bellum-mother', 'national-museum', 'czech-technical-university', 'lego-friends', 'adidas-you-got-this', 'komercni-banka', 'talkmore-duedekning', 'tmobile-magenta-tv-netflix', 'tmobile-magenta-tv', 'slovenska-sporitelna', 'innogy-domaci-asistence']) {
    const project = getProjectBySlug(slug)
    assert.equal(project.videos[0].height, 1080, `${project.title} must retain its verified HD film`)
    assert.ok(project.images.filter(i => i.evidence.basis === 'film-frame').every(i => i.width >= 1540))
  }
  const films = projects.flatMap(p => p.videos.map(v => v.src))
  assert.equal(new Set(films).size, films.length, 'the same film must not be published twice')
})
test('photographs attached to adverts have reviewed evidence for that exact film', () => {
  for (const project of projects) {
    assert.equal(project.scope, project.videos.length ? 'campaign' : 'study')
    for (const image of project.images) {
      assert.ok(image.evidence?.note, `Missing evidence for ${image.src}`)
      if (project.videos.length) {
        assert.notEqual(image.evidence.basis, 'unassigned')
        assert.ok(project.videos.some(v => v.src === image.evidence.videoSrc), `Photo linked to a different film: ${image.src}`)
      } else assert.equal(image.evidence.basis, 'unassigned')
    }
  }
  assert.equal(getProjectBySlug('eon').images.filter(i => i.evidence.basis !== 'film-frame').length, 1)
  assert.equal(getProjectBySlug('eon-wardrobe').videos.length, 0)
  assert.equal(getProjectBySlug('wardrobe-fittings').videos.length, 0)
})
test('unidentified costume studies preserve uncertainty instead of inventing credits', () => {
  assert.equal(getProjectBySlug('purple-and-gold-character').credit, '')
  assert.ok(getProjectBySlug('raiffeisen-spooky-vintage-shopping').facts.some(f => f.label === 'Wardrobe' && f.value.includes('@u_nik_orn')))
})

// A self-publication is evidence of professional association, not an inferred role.
test('every published collection has Dušan’s own publication or an explicit professional credit', () => {
  const inventory = JSON.parse(readFileSync('docs/research/instagram-posts.json', 'utf8')).posts
  const ownIds = new Set(inventory.filter(post => post.author === 'bebcak').map(post => post.url.split('/').filter(Boolean).at(-1)))
  for (const project of projects) {
    assert.ok(project.attribution.note)
    assert.ok(project.sources.some(source => source.url === project.attribution.source), `${project.title}: missing attribution source`)
    if (project.attribution.basis === 'own-portfolio') {
      assert.equal(new URL(project.attribution.source).hostname, 'www.instagram.com')
      assert.ok(ownIds.has(project.attribution.source.split('/').filter(Boolean).at(-1)), project.title)
      assert.equal(project.credit, '', 'a portfolio publication alone must not invent a role')
    } else {
      assert.equal(project.attribution.basis, 'explicit-credit')
      assert.ok(project.facts.some(fact => fact.value.includes('Dušan Bebčák')), project.title)
    }
  }
  for (const slug of ['animal-costumes', 'utility-costume', 'dark-costumes']) assert.equal(getProjectBySlug(slug), undefined, 'demo-only studies must remain unpublished')
})
