export const siteName = 'Dušan Bebčák'
export const siteDescription = 'Costume design and wardrobe styling by Dušan Bebčák. Explore commercials, films, music videos and costume photographs.'
export const instagramUrl = 'https://www.instagram.com/bebcak/'

// Configure the confirmed public domain before publishing; preview hosts are not canonical URLs.
export function normalizeSiteUrl(value: string | undefined): string {
  if (!value?.trim()) return ''
  const url = new URL(value.trim())
  if (!['http:', 'https:'].includes(url.protocol) || url.pathname !== '/' || url.search || url.hash || url.username || url.password) {
    throw new Error('VITE_SITE_URL must be an http(s) origin, without a path, query or credentials.')
  }
  return url.origin
}
export const siteUrl = normalizeSiteUrl(import.meta.env.VITE_SITE_URL)
