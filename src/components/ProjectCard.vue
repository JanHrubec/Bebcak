<script setup lang="ts">
import type { Project } from '../data/projects'
import MotionImage from './MotionImage.vue'
defineProps<{ project: Project; priority?: boolean }>()
</script>
<template>
  <router-link :to="{ name: 'project', params: { slug: project.slug } }" class="project-card" :aria-label="`View project: ${project.title}`">
    <div class="project-card__image" :style="{ aspectRatio: `${project.thumbnail.width} / ${project.thumbnail.height}`, maxWidth: `${project.thumbnail.width}px` }">
      <MotionImage :src="project.thumbnail.src" :srcset="project.thumbnail.smallWidth < project.thumbnail.width ? `${project.thumbnail.smallSrc} ${project.thumbnail.smallWidth}w, ${project.thumbnail.src} ${project.thumbnail.width}w` : undefined" sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 959px) 48vw, (min-width: 1600px) 393px, 26vw" :width="project.thumbnail.width" :height="project.thumbnail.height" :alt="project.thumbnail.alt" class="h-full w-full object-contain" :loading="priority ? 'eager' : 'lazy'" :fetchpriority="priority ? 'high' : undefined" />
    </div>
    <div class="project-card__caption"><h2>{{ project.title }}</h2></div>
  </router-link>
</template>
