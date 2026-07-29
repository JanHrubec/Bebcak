<script setup lang="ts">
import type { Project } from '../data/projects'
import ProjectCard from './ProjectCard.vue'

defineProps<{
  projects: Project[]
}>()
</script>

<template>
  <div class="project-grid mx-auto max-w-6xl">
    <div
      v-for="(project, index) in projects"
      :key="project.id"
      class="project-grid__item"
    >
      <ProjectCard :project="project" :priority="index < 2" />
    </div>
  </div>
</template>
