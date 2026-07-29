<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'
import AboutPanel from './components/AboutPanel.vue'
import ProjectBackdrop from './components/ProjectBackdrop.vue'
import SiteSidebar from './components/SiteSidebar.vue'
import { defaultView, getProjectBySlug, isPortfolioView, type PortfolioView } from './data/projects'

const router = useRouter()
const route = useRoute()
const sidebarCollapsed = ref(false)
const showAboutPanel = ref(false)
const desktopMediaQuery = typeof window === 'undefined'
  ? undefined
  : window.matchMedia('(min-width: 768px)')
const isDesktop = ref(desktopMediaQuery?.matches ?? false)
let headingFocusTimer = 0

const isProjectPage = computed(() => route.name === 'project')

const activeProject = computed(() => {
  if (!isProjectPage.value) {
    return undefined
  }

  return getProjectBySlug(route.params.slug as string)
})

const activeView = computed<PortfolioView>(() => {
  const requestedView = route.query.view
  return isPortfolioView(requestedView) ? requestedView : defaultView
})

const routeTransitionName = computed(() => {
  return isProjectPage.value ? 'project-open' : 'home-fade'
})

const routeTransitionDuration = computed(() => {
  return isProjectPage.value ? 440 : 320
})

const routeViewKey = computed(() => {
  if (isProjectPage.value) {
    return route.fullPath
  }

  return String(route.name ?? route.fullPath)
})

const updateDesktopLayout = (event: MediaQueryListEvent) => {
  isDesktop.value = event.matches
}

const updateDocumentMetadata = () => {
  const project = activeProject.value
  const projectNotFound = isProjectPage.value && !project
  const isWardrobeView = activeView.value === 'wardrobe-stylist'
  const title = projectNotFound
    ? 'Project Not Found | Dušan Bebčák'
    : project
    ? `${project.title} | Dušan Bebčák`
    : isWardrobeView
      ? 'Wardrobe Stylist | Dušan Bebčák'
      : 'Costume Designer | Dušan Bebčák'
  const description = projectNotFound
    ? 'The requested portfolio project could not be found.'
    : project?.intro
    ?? (isWardrobeView
      ? 'Wardrobe styling portfolio by Dušan Bebčák for commercial productions and advertising campaigns.'
      : 'Costume design portfolio by Dušan Bebčák, focused on character, silhouette, texture, and visual storytelling.')
  const canonicalUrl = project
    ? `https://bebcak.com/project/${project.slug}`
    : projectNotFound
      ? `https://bebcak.com${route.path}`
      : 'https://bebcak.com/'

  document.title = title
  document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', description)
  document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.setAttribute('content', title)
  document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute('content', description)
  document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.setAttribute('content', canonicalUrl)
  document.querySelector<HTMLMetaElement>('meta[name="robots"]')?.setAttribute(
    'content',
    projectNotFound ? 'noindex, follow' : 'index, follow',
  )
  document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', canonicalUrl)
}

const focusCurrentPageHeading = async () => {
  await nextTick()

  window.clearTimeout(headingFocusTimer)
  headingFocusTimer = window.setTimeout(() => {
    const headingType = isProjectPage.value ? 'project' : 'home'
    const headings = Array.from(
      document.querySelectorAll<HTMLElement>(`[data-page-heading="${headingType}"]`),
    ).filter((heading) => heading.offsetParent !== null)

    headings.at(-1)?.focus({ preventScroll: true })
  }, routeTransitionDuration.value + 30)
}

watch(
  isProjectPage,
  (isProject) => {
    sidebarCollapsed.value = isProject
  },
  { immediate: true },
)

watch(
  [() => route.name, activeProject, activeView],
  updateDocumentMetadata,
  { immediate: true },
)

watch(
  () => route.fullPath,
  () => {
    showAboutPanel.value = false
  },
)

watch(
  () => route.path,
  () => {
    void focusCurrentPageHeading()
  },
)

onMounted(() => {
  desktopMediaQuery?.addEventListener('change', updateDesktopLayout)
})

onBeforeUnmount(() => {
  window.clearTimeout(headingFocusTimer)
  desktopMediaQuery?.removeEventListener('change', updateDesktopLayout)
})

const openAbout = () => {
  showAboutPanel.value = true
}

const closeAbout = () => {
  showAboutPanel.value = false
}

const switchView = (view: PortfolioView) => {
  router.push({
    name: 'home',
    query: { view },
  })
}

const navigateHome = () => {
  router.push({
    name: 'home',
    query: { view: activeView.value },
  })
}
</script>

<template>
  <div class="min-h-screen bg-background">
    <ProjectBackdrop :src="activeProject?.thumbnail" />

    <div
      v-if="!isDesktop"
      class="app-shell"
      :class="{ 'app-shell--blurred': showAboutPanel }"
      :aria-hidden="showAboutPanel ? 'true' : undefined"
      :inert="showAboutPanel"
    >
      <div
        class="mobile-header sticky top-0 flex items-center border-b border-white/10 bg-background/92 px-4 py-3 shadow-[0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md"
        :class="showAboutPanel ? 'z-10' : 'z-[60]'"
      >
        <Transition name="sidebar-swap" mode="out-in" :duration="280">
          <button
            v-if="sidebarCollapsed"
            key="mobile-home"
            type="button"
            class="relative z-[60] flex h-11 w-11 items-center justify-center transition-colors duration-300 hover:text-accent"
            aria-label="Back to projects"
            @click="navigateHome"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </button>

          <div v-else key="mobile-sidebar" class="flex-1">
            <SiteSidebar
              :active-view="activeView"
              @open-about="openAbout"
              @switch-view="switchView"
            />
          </div>
        </Transition>
      </div>

      <main class="mobile-main px-4 py-5 sm:px-5 sm:py-6">
        <div class="route-stage">
          <RouterView v-slot="{ Component }">
            <Transition :name="routeTransitionName" :duration="routeTransitionDuration" appear>
              <component :is="Component" :key="routeViewKey" />
            </Transition>
          </RouterView>
        </div>
      </main>
    </div>

    <div
      v-else
      class="app-shell flex min-h-screen"
      :class="{ 'app-shell--blurred': showAboutPanel }"
      :aria-hidden="showAboutPanel ? 'true' : undefined"
      :inert="showAboutPanel"
    >
      <aside
        class="relative z-20 flex-shrink-0 transition-all duration-500 ease-out"
        :class="sidebarCollapsed ? 'w-20 p-4' : 'w-[28%] min-w-[280px] max-w-[400px] p-12'"
      >
        <div class="sticky top-12" :class="sidebarCollapsed ? 'flex w-full justify-center' : ''">
          <Transition name="sidebar-swap" mode="out-in" :duration="280">
            <button
              v-if="sidebarCollapsed"
              key="desktop-home"
              type="button"
              class="flex h-12 w-12 items-center justify-center transition-colors duration-300 hover:text-accent"
              aria-label="Back to projects"
              @click="navigateHome"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </button>

            <SiteSidebar
              v-else
              key="desktop-sidebar"
              :active-view="activeView"
              @open-about="openAbout"
              @switch-view="switchView"
            />
          </Transition>
        </div>
      </aside>

      <main class="flex-1 overflow-y-auto px-5 py-6 lg:px-8">
        <div class="route-stage">
          <RouterView v-slot="{ Component }">
            <Transition :name="routeTransitionName" :duration="routeTransitionDuration" appear>
              <component :is="Component" :key="routeViewKey" />
            </Transition>
          </RouterView>
        </div>
      </main>
    </div>

    <AboutPanel :is-open="showAboutPanel" @close="closeAbout" />
  </div>
</template>
