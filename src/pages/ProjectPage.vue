<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getProjectBySlug, getAdjacentProjects } from '../data/projects'
import ProjectNavigation from '../components/ProjectNavigation.vue'
import VideoPlayer from '../components/VideoPlayer.vue'

const route = useRoute()

const project = computed(() => {
  return getProjectBySlug(route.params.slug as string)
})

const adjacent = computed(() => {
  if (!project.value) return { prev: null, next: null }
  return getAdjacentProjects(project.value.id)
})

// Preload the background blur image when navigating between projects
watch(
  () => project.value?.slug,
  (slug) => {
    if (!slug) return
    const img = project.value?.images?.[0]
    if (!img) return
    const preloader = new Image()
    preloader.decoding = 'async'
    preloader.src = img
  },
  { immediate: true },
)

</script>


<template>
  <div v-if="project" class="w-full bg-background">
    <!-- Background blur - behind content (avoid global img fade flicker) -->
    <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <img
        :src="project.images[0]"
        alt=""
        class="project-bg-blur w-full h-full object-cover scale-125 blur-xl opacity-60"
        aria-hidden="true"
      />
      <!-- Gradient overlay to prevent flash -->
      <div class="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50" />
    </div>

    <!-- Main Content -->
    <div class="relative z-10 pt-0 pb-28 md:pb-20">
      <!-- Project Information -->
      <div class="pt-4 md:pt-6 pb-4 md:pb-6 w-full">
        <div class="w-full">
          <h1 class="text-2xl md:text-3xl font-light tracking-wide text-primary mb-2">
            {{ project.title }}
          </h1>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            <div>
              <div class="space-y-2 text-sm font-light text-secondary">
                <p>{{ project.client }}</p>
                <p>{{ project.year }}</p>
                <p v-if="project.director">{{ project.director }}</p>
              </div>
            </div>
            <div>
              <p class="text-sm font-light leading-relaxed text-secondary">
                {{ project.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Gallery Grid -->
      <div class="pb-6 md:pb-8">
        <div class="w-full mx-auto">
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            <img
              v-for="(image, index) in project.images"
              :key="index"
              :src="image"
              :alt="`${project.title} - Image ${index + 1}`"
              class="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>


      <!-- Video Section -->
      <div class="pb-1 md:pb-1"></div>
        <div class="w-[80%] justify-center mx-auto">
          <VideoPlayer :src="`/images/projects/${project.slug}/video.mp4`" />
        </div>
      </div>

    <!-- Sticky Footer Navigation -->
    <footer class="fixed bottom-0 left-0 right-0 z-30 w-full bg-background/95 backdrop-blur-md border-t border-white/5 shadow-[0_-1px_0_rgba(255,255,255,0.05)]">
      <div class="px-8 py-4">
        <ProjectNavigation :prev="adjacent.prev" :next="adjacent.next" />
      </div>
    </footer>
  </div>

  <!-- Project Not Found -->
  <div v-else class="flex items-center justify-center min-h-[60vh]">
    <div class="text-center">
      <h1 class="text-xl font-light text-primary mb-4">Project not found</h1>
      <router-link
        to="/"
        class="text-sm font-light text-muted hover:text-accent transition-colors duration-300"
      >
        Return to homepage
      </router-link>
    </div>
  </div>
</template>
