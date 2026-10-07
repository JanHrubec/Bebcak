<script setup lang="ts">
import type { Project } from '../data/projects'
defineProps<{ prev: Project | null; next: Project | null }>()
</script>
<template>
  <nav class="project-navigation" aria-label="Project navigation">
    <router-link v-if="prev" :to="{ name: 'project', params: { slug: prev.slug } }" class="project-navigation__previous" :aria-label="`Previous project: ${prev.title}`" :title="prev.title">
      <span class="navigation-arrow" aria-hidden="true">←</span><span><span class="project-navigation__label">Previous</span><span class="project-navigation__title">{{ prev.title }}</span></span>
    </router-link>
    <span v-else class="project-navigation__disabled" aria-disabled="true"><span class="navigation-arrow" aria-hidden="true">←</span><span>Previous</span></span>
    <router-link v-if="next" :to="{ name: 'project', params: { slug: next.slug } }" class="project-navigation__next" :aria-label="`Next project: ${next.title}`" :title="next.title">
      <span><span class="project-navigation__label">Next</span><span class="project-navigation__title">{{ next.title }}</span></span><span class="navigation-arrow" aria-hidden="true">→</span>
    </router-link>
    <span v-else class="project-navigation__disabled" aria-disabled="true"><span>Next</span><span class="navigation-arrow" aria-hidden="true">→</span></span>
  </nav>
</template>
