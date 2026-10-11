<script setup lang="ts">
import type { Project } from '../data/projects'
import PortfolioPhoto from './PortfolioPhoto.vue'
import { computed } from 'vue'
import { imageDimensions } from '../utils/galleryLayout'
const props = defineProps<{ project: Project; priority?: boolean }>()
const dimensions = computed(() => imageDimensions(props.project.thumbnail))
</script>
<template>
  <router-link :to="{ name: 'project', params: { slug: project.slug } }" class="project-card" :aria-label="`View project: ${project.title}`">
    <div class="project-card__image" :style="{ aspectRatio: `${dimensions.width} / ${dimensions.height}`, maxWidth: `${dimensions.width}px` }">
      <PortfolioPhoto :photo="project.thumbnail" sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 959px) 48vw, (min-width: 1600px) 393px, 26vw" class="h-full w-full object-contain" :loading="priority ? 'eager' : 'lazy'" :fetchpriority="priority ? 'high' : undefined" />
    </div>
    <div class="project-card__caption"><h2>{{ project.title }}</h2></div>
  </router-link>
</template>
