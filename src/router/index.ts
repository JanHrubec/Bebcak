import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ProjectPage from '../pages/ProjectPage.vue'
import AboutPage from '../pages/AboutPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import { waitForPageTransition } from './transition'
import { legacyProjectRoutes } from '../data/legacyRoutes'
export { legacyProjectRoutes }

const routes = [
  ...legacyProjectRoutes,
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
  },
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/project/:slug',
    name: 'project',
    component: ProjectPage,
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundPage },
]

export function createPortfolioRouter(server = false) {
  const router = createRouter({
    history: server ? createMemoryHistory() : createWebHistory(),
    routes,
    async scrollBehavior(to, from, savedPosition) {
      if (from.matched.length && to.path !== from.path) {
        await waitForPageTransition()
        if (router.currentRoute.value.fullPath !== to.fullPath) return false
      }
      if (savedPosition) {
        return savedPosition
      }
      if (to.path === from.path) {
        return false
      }
      return { top: 0 }
    },
  })
  return router
}

export default createPortfolioRouter(typeof window === 'undefined')
