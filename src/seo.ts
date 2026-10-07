import { getProjectBySlug } from './data/projects'
import { instagramUrl, siteDescription, siteName, siteUrl } from './data/site'
import { getVideoUrl } from './data/media'
import { contact } from './data/contact'

export function pageMetadata(path: string) {
  path = path.replace(/\/+$/, '') || '/'
  const project = path.startsWith('/project/') ? getProjectBySlug(path.slice('/project/'.length)) : undefined
  const missing = !project && path !== '/' && path !== '/about'
  const about = path === '/about'
  const title = missing ? `Page not found | ${siteName}` : project ? `${project.title} | ${siteName}` : about ? `About & contact | ${siteName}` : `${siteName} | Costume design & wardrobe styling`
  const description = missing ? 'This portfolio page could not be found.' : project ? `${project.title}. Films and photographs from Dušan Bebčák’s costume and wardrobe portfolio.` : about ? 'I’m Dušan Bebčák, a costume designer and wardrobe stylist working on commercials, films and music videos. Read about my work and get in touch.' : siteDescription
  const url = siteUrl ? `${siteUrl}${path}` : ''
  const imagePath = project?.thumbnail.src ?? '/social-preview.png'
  const image = siteUrl ? `${siteUrl}${imagePath}` : imagePath
  const person = { '@type': 'Person', name: siteName, jobTitle: 'Costume designer and wardrobe stylist', sameAs: [instagramUrl], ...(contact.email ? { email: contact.email } : {}), ...(contact.telephone ? { telephone: contact.telephone } : {}), ...(siteUrl ? { '@id': `${siteUrl}/#person`, url: siteUrl } : {}) }
  const work = project ? { '@type': 'CreativeWork', name: project.title, image, ...(url ? { url } : {}), ...(project.attribution.basis === 'explicit-credit' ? { contributor: person } : { about: person }), ...(siteUrl && project.videos.length ? { encoding: project.videos.map(video => ({ '@type': 'MediaObject', contentUrl: new URL(getVideoUrl(video.src), siteUrl).href, encodingFormat: 'video/mp4', width: video.width, height: video.height })) } : {}) } : undefined
  const structuredData = { '@context': 'https://schema.org', '@graph': [person, { '@type': about ? 'AboutPage' : project || missing ? 'WebPage' : 'CollectionPage', name: title, description, inLanguage: 'en', ...(url ? { url } : {}), ...(work ? { mainEntity: work } : { about: person }) }] }
  return { title, description, url, image, imageWidth: project?.thumbnail.width ?? 1200, imageHeight: project?.thumbnail.height ?? 630, imageAlt: project?.thumbnail.alt ?? 'Dušan Bebčák — costume design and wardrobe styling', robots: missing ? 'noindex, follow' : 'index, follow, max-image-preview:large', structuredData }
}

export function applyPageMetadata(path: string) {
  const meta = pageMetadata(path)
  document.title = meta.title
  const setMeta = (attribute: 'name' | 'property', key: string, value: string) => {
    let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
    if (!value) { tag?.remove(); return }
    if (!tag) { tag = document.createElement('meta'); tag.setAttribute(attribute, key); document.head.append(tag) }
    tag.content = value
  }
  setMeta('name', 'description', meta.description)
  setMeta('name', 'robots', meta.robots)
  setMeta('property', 'og:title', meta.title)
  setMeta('property', 'og:description', meta.description)
  setMeta('property', 'og:site_name', siteName)
  setMeta('property', 'og:type', 'website')
  setMeta('property', 'og:url', meta.url)
  setMeta('property', 'og:image', meta.image)
  setMeta('property', 'og:image:width', String(meta.imageWidth))
  setMeta('property', 'og:image:height', String(meta.imageHeight))
  setMeta('property', 'og:image:alt', meta.imageAlt)
  setMeta('name', 'twitter:card', 'summary_large_image')
  setMeta('name', 'twitter:title', meta.title)
  setMeta('name', 'twitter:description', meta.description)
  setMeta('name', 'twitter:image', meta.image)
  setMeta('name', 'twitter:image:alt', meta.imageAlt)
  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (meta.url) {
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.append(canonical) }
    canonical.href = meta.url
  } else canonical?.remove()
  let schema = document.getElementById('page-schema')
  if (!schema) { schema = document.createElement('script'); schema.id = 'page-schema'; schema.setAttribute('type', 'application/ld+json'); document.head.append(schema) }
  schema.textContent = JSON.stringify(meta.structuredData)
}
