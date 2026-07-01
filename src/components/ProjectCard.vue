<script setup lang="ts">
import type { Project } from '../data/projects'
import MotionImage from './MotionImage.vue'

defineProps<{
  project: Project
}>()
</script>

<template>
  <router-link
    :to="{ name: 'project', params: { slug: project.slug }, query: { view: project.role } }"
    class="group block"
    :aria-label="`View project: ${project.title}`"
  >
    <div class="relative aspect-[3/4] overflow-hidden bg-surface">
      <MotionImage
        :src="project.thumbnail"
        :alt="project.title"
        class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
        loading="lazy"
      />

      <div class="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/10 to-transparent p-5">
        <div class="translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
          <h3 class="mb-2 text-lg font-light tracking-wide text-primary">
            {{ project.title }}
          </h3>
          <div v-if="project.cardMeta?.length" class="space-y-1">
            <p
              v-for="item in project.cardMeta"
              :key="item"
              class="text-sm font-light text-secondary"
            >
              {{ item }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>
