<script setup lang="ts">
import { type Project } from '../data/projects'

defineProps<{
  prev: Project | null
  next: Project | null
}>()
</script>

<template>
  <nav class="flex justify-between items-center" aria-label="Project navigation">
    <router-link
      v-if="prev"
      :to="`/project/${prev.slug}`"
      class="group flex items-center gap-3 text-muted hover:text-accent transition-colors duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 transform group-hover:-translate-x-1 transition-transform duration-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      <div class="text-left">
        <p class="text-xs font-light tracking-wider uppercase text-muted hidden sm:block">
          Previous
        </p>
        <p class="text-sm font-light text-secondary group-hover:text-accent transition-colors duration-300">
          {{ prev.title }}
        </p>
      </div>
    </router-link>
    <div v-else />

    <router-link
      v-if="next"
      :to="`/project/${next.slug}`"
      class="group flex items-center gap-3 text-muted hover:text-accent transition-colors duration-300"
    >
      <div class="text-right">
        <p class="text-xs font-light tracking-wider uppercase text-muted hidden sm:block">
          Next
        </p>
        <p class="text-sm font-light text-secondary group-hover:text-accent transition-colors duration-300">
          {{ next.title }}
        </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </router-link>
    <div v-else />
  </nav>
</template>
