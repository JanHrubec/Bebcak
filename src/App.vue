<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { Analytics } from '@vercel/analytics/vue'
import SiteSidebar from './components/SiteSidebar.vue'
import ProjectBackdrop from './components/ProjectBackdrop.vue'
import { finishPageTransition } from './router/transition'
import { getProjectBySlug, projects } from './data/projects'
import { applyPageMetadata } from './seo'

const route = useRoute()
const activeProject = computed(() => route.name === 'project'
  ? getProjectBySlug(route.params.slug as string)
  : undefined)

const pageDirection = ref(1)
watch(activeProject, (next, previous) => {
  const nextIndex = projects.findIndex(project => project.slug === next?.slug)
  const previousIndex = projects.findIndex(project => project.slug === previous?.slug)
  pageDirection.value = nextIndex >= 0 && previousIndex >= 0 && nextIndex < previousIndex ? -1 : 1
})

if (typeof document !== 'undefined') {
  watch(() => route.path, path => applyPageMetadata(path), { immediate: true })
}

const onPageEntered = () => {
  Array.from(document.querySelectorAll<HTMLElement>('[data-page-heading]')).find(heading => heading.offsetParent !== null)?.focus({ preventScroll: true })
  finishPageTransition()
}
</script>

<template>
  <div class="site-shell" :style="{ '--page-direction': pageDirection }">
    <Analytics />
    <ProjectBackdrop :src="activeProject?.thumbnail.smallSrc" />
    <a class="skip-link" href="#main-content">Skip to content</a>
    <SiteSidebar :project="activeProject" />
    <main id="main-content" class="site-main">
      <RouterView v-slot="{ Component, route: currentRoute }">
        <Transition name="page" mode="out-in" @after-enter="onPageEntered">
          <component :is="Component" :key="currentRoute.path" />
        </Transition>
      </RouterView>
    </main>
  </div>
</template>
