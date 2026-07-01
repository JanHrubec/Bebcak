<script setup lang="ts">
import type { Project } from '../data/projects'

defineProps<{
  prev: Project | null
  next: Project | null
}>()
</script>

<template>
  <nav class="grid grid-cols-2 items-center gap-4" aria-label="Project navigation">
    <router-link
      v-if="prev"
      :to="{ name: 'project', params: { slug: prev.slug }, query: { view: prev.role } }"
      class="group flex min-w-0 items-center gap-3 justify-self-start text-muted transition-colors duration-300 hover:text-accent"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1"
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
      <div class="min-w-0 text-left">
        <p class="hidden text-xs font-light uppercase tracking-wider text-muted sm:block">
          Previous
        </p>
        <p class="truncate text-sm font-light text-secondary transition-colors duration-300 group-hover:text-accent">
          {{ prev.title }}
        </p>
      </div>
    </router-link>
    <div v-else />

    <router-link
      v-if="next"
      :to="{ name: 'project', params: { slug: next.slug }, query: { view: next.role } }"
      class="group flex min-w-0 items-center gap-3 justify-self-end text-muted transition-colors duration-300 hover:text-accent"
    >
      <div class="min-w-0 text-right">
        <p class="hidden text-xs font-light uppercase tracking-wider text-muted sm:block">
          Next
        </p>
        <p class="truncate text-sm font-light text-secondary transition-colors duration-300 group-hover:text-accent">
          {{ next.title }}
        </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
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
