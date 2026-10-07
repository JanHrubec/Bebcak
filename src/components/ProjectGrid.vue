<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import type { Project } from '../data/projects'
import ProjectCard from './ProjectCard.vue'
const props = defineProps<{ projects: Project[] }>()
const columnCount = ref(3)
let tablet: MediaQueryList | undefined
let wide: MediaQueryList | undefined
const updateColumns = () => { columnCount.value = wide?.matches ? 3 : tablet?.matches ? 2 : 1 }
onMounted(() => {
  tablet = window.matchMedia('(min-width: 640px)')
  wide = window.matchMedia('(min-width: 960px)')
  updateColumns()
  tablet.addEventListener('change', updateColumns)
  wide.addEventListener('change', updateColumns)
})
onBeforeUnmount(() => { tablet?.removeEventListener('change', updateColumns); wide?.removeEventListener('change', updateColumns) })
// Place the curated sequence into the shortest column. The first projects stay
// at the top instead of CSS columns bringing projects from the end to the top.
const columns = computed(() => {
  const result: { project: Project; priority: boolean }[][] = Array.from({ length: columnCount.value }, () => [])
  const heights = Array(columnCount.value).fill(0)
  props.projects.forEach((project, index) => {
    const column = heights.indexOf(Math.min(...heights))
    result[column]!.push({ project, priority: index < 3 })
    heights[column] += project.thumbnail.height / project.thumbnail.width + .3
  })
  return result
})
</script>
<template>
  <div class="project-grid">
    <div v-for="(column, index) in columns" :key="index" class="project-grid__column">
      <ProjectCard v-for="entry in column" :key="entry.project.id" :project="entry.project" :priority="entry.priority" />
    </div>
  </div>
</template>
