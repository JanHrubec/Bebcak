import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import App from './App.vue'
import { createPortfolioRouter, legacyProjectRoutes } from './router'
import { projects } from './data/projects'
import { pageMetadata } from './seo'
import { siteUrl } from './data/site'
import { getVideoUrl } from './data/media'

export const paths = ['/', '/about', ...projects.map(project => `/project/${project.slug}`)]
export { pageMetadata, siteUrl, legacyProjectRoutes }
export const videos = projects.flatMap(project => project.videos.map(video => ({ source: video.src, url: getVideoUrl(video.src) })))
export async function render(path: string) {
  const router = createPortfolioRouter(true)
  const app = createSSRApp(App).use(router)
  await router.push(path)
  await router.isReady()
  return renderToString(app)
}
