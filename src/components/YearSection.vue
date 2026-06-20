<script setup lang="ts">
import { type Project } from '../data/projects'
import ProjectGrid from './ProjectGrid.vue'

defineProps<{
  year: number
  projects: Project[]
}>()
</script>

<template>
  <section class="mb-6 md:mb-8">
    <h2 class="text-xs font-light tracking-[0.2em] uppercase text-muted mb-2 md:mb-3">
      {{ year }}
    </h2>
    <ProjectGrid :projects="projects" />
  </section>
</template>
