<script setup lang="ts">
import ProjectGrid from '../components/ProjectGrid.vue'
import { projects } from '../data/projects'
</script>
<template>
  <div>
    <h1 class="sr-only" data-page-heading tabindex="-1">My work</h1>
    <ProjectGrid :projects="projects" />
  </div>
</template>
