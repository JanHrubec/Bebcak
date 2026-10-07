import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { projects } from './src/data/projects'
import { legacyProjectRoutes } from './src/data/legacyRoutes'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

// Preview must serve each pre-rendered page rather than the SPA home fallback.
const prerenderedPreview: Plugin = {
  name: 'prerendered-portfolio-preview',
  configurePreviewServer(server) {
    const pages = new Set(['/about', ...projects.map(project => `/project/${project.slug}`), ...legacyProjectRoutes.map(route => route.path)])
    server.middlewares.use((request, response, next) => {
      const url = new URL(request.url ?? '/', 'http://localhost')
      const path = url.pathname.replace(/\/+$/, '') || '/'
      if (pages.has(path)) request.url = `${path}/index.html${url.search}`
      else if (path !== '/' && !path.split('/').at(-1)?.includes('.')) {
        void readFile(resolve(server.config.root, server.config.build.outDir, '404.html'), 'utf8').then(html => {
          response.statusCode = 404
          response.setHeader('Content-Type', 'text/html; charset=utf-8')
          response.end(html)
        }).catch(next)
        return
      }
      next()
    })
  },
}
export default defineConfig({ plugins: [vue(), prerenderedPreview] })
