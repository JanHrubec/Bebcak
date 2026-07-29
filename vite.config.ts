import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Sitemap from 'vite-plugin-sitemap'
import { projects } from './src/data/projects'

export default defineConfig({
  plugins: [
    vue(),
    Sitemap({
      hostname: 'https://bebcak.com',
      dynamicRoutes: projects.map((project) => `/project/${project.slug}`),
    }),
  ],
})
