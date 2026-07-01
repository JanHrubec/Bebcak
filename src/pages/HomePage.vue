<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ProjectGrid from '../components/ProjectGrid.vue'
import { defaultView, getProjectsByView, isPortfolioView } from '../data/projects'

const route = useRoute()

const activeView = computed(() => {
  const requestedView = route.query.view
  return isPortfolioView(requestedView) ? requestedView : defaultView
})

const projects = computed(() => getProjectsByView(activeView.value))
</script>

<template>
  <div class="py-10 md:py-14">
    <div class="mb-10 max-w-2xl">
      <p class="text-sm font-light leading-relaxed text-secondary">
        {{ activeView === 'costume-designer'
          ? 'A selection of costume-driven work focused on character, silhouette, and material storytelling.'
          : 'A selection of wardrobe styling work for commercial productions and advertising campaigns.' }}
      </p>
    </div>

    <Transition name="view-switch" mode="out-in" :duration="380">
      <div :key="activeView">
        <ProjectGrid :projects="projects" />
      </div>
    </Transition>
  </div>
</template>
