<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ProjectGallery from '../components/ProjectGallery.vue'
import VideoPlayer from '../components/VideoPlayer.vue'
import { getProjectBySlug } from '../data/projects'
const route = useRoute()
const project = computed(() => getProjectBySlug(route.params.slug as string))
</script>
<template>
  <article v-if="project" class="project-page">
    <header class="project-introduction">
      <h1 data-page-heading tabindex="-1">{{ project.title }}</h1>
      <details v-if="project.facts.length" class="mobile-credits">
        <summary>Credits</summary>
        <dl class="project-credits"><div v-for="fact in project.facts" :key="fact.label"><dt>{{ fact.label }}</dt><dd>{{ fact.value }}</dd></div></dl>
      </details>
    </header>
    <div class="project-media">
      <VideoPlayer v-for="video in project.videos" :key="video.src" :video="video" :poster="video.poster ?? project.thumbnail" />
      <ProjectGallery v-if="project.images.length" :images="project.images" />
    </div>
  </article>
  <div v-else class="py-16">
    <h1 class="mb-6 text-2xl" data-page-heading tabindex="-1">Project not found</h1>
    <router-link :to="{ name: 'home' }" class="back-link">Return to work</router-link>
  </div>
</template>
