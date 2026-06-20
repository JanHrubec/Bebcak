<script setup lang="ts">
import { type Project } from '../data/projects'

defineProps<{
  project: Project
}>()
</script>

<template>
  <router-link
    :to="`/project/${project.slug}`"
    class="group block"
    :aria-label="`View project: ${project.title}`"
  >
    <div class="relative overflow-hidden aspect-[3/4] bg-surface">
      <!-- Image -->
      <img
        :src="project.thumbnail"
        :alt="`${project.title} - Costume design for ${project.client}`"
        class="w-full h-full object-cover transition-all duration-300 ease-out group-hover:scale-105"
        loading="lazy"
      />
      
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div class="text-center px-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 class="text-lg font-light tracking-wide text-primary mb-4">
            {{ project.title }}
          </h3>
          <p class="text-sm font-light text-secondary">
            {{ project.client }}
          </p>
          <p class="text-sm font-light text-secondary">
            {{ project.director }}
          </p>
        </div>
      </div>
    </div>
  </router-link>
</template>
