<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MotionImage from '../components/MotionImage.vue'
import ProjectNavigation from '../components/ProjectNavigation.vue'
import VideoPlayer from '../components/VideoPlayer.vue'
import { getAdjacentProjects, getProjectBySlug } from '../data/projects'

const route = useRoute()

const project = computed(() => getProjectBySlug(route.params.slug as string))

const adjacent = computed(() => {
  if (!project.value) {
    return { prev: null, next: null }
  }

  return getAdjacentProjects(project.value.slug, project.value.role)
})
</script>

<template>
  <div v-if="project" class="w-full">
    <div class="relative z-10 pb-28 pt-0 md:pb-20">
      <div class="w-full pb-8 pt-4 md:pt-6">
        <div class="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)] lg:gap-10">
          <div>
            <p class="mb-3 text-xs font-light uppercase tracking-[0.22em] text-muted">
              {{ project.role === 'costume-designer' ? 'Costume designer' : 'Wardrobe stylist' }}
            </p>
            <h1 class="mb-4 text-2xl font-light tracking-wide text-primary md:text-3xl">
              {{ project.title }}
            </h1>
            <p v-if="project.intro" class="max-w-2xl text-sm font-light leading-relaxed text-secondary">
              {{ project.intro }}
            </p>
          </div>

          <div v-if="project.facts?.length" class="space-y-4">
            <div
              v-for="fact in project.facts"
              :key="`${fact.label}-${fact.value}`"
              class="border-t border-white/10 pt-3"
            >
              <p class="mb-1 text-xs font-light uppercase tracking-[0.18em] text-muted">
                {{ fact.label }}
              </p>
              <p class="text-sm font-light leading-relaxed text-secondary">
                {{ fact.value }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="project.textSections?.length" class="mb-8 grid gap-5 lg:max-w-4xl lg:grid-cols-2">
        <section
          v-for="section in project.textSections"
          :key="`${section.heading ?? 'body'}-${section.body}`"
          class="border-t border-white/10 pt-4"
        >
          <h2 v-if="section.heading" class="mb-2 text-xs font-light uppercase tracking-[0.18em] text-muted">
            {{ section.heading }}
          </h2>
          <p class="text-sm font-light leading-relaxed text-secondary">
            {{ section.body }}
          </p>
        </section>
      </div>

      <div v-if="project.images.length" class="pb-8 md:pb-10">
        <div class="project-gallery mx-auto max-w-6xl">
          <div
            v-for="(image, index) in project.images"
            :key="image"
            class="project-gallery__item"
          >
            <MotionImage
              :src="image"
              :alt="`${project.title} image ${index + 1}`"
              class="h-auto w-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div v-if="project.video" class="mx-auto w-full max-w-5xl">
        <VideoPlayer :src="project.video" />
      </div>
    </div>

    <footer class="project-footer fixed bottom-0 left-0 right-0 z-30 w-full border-t border-white/5 bg-background/95 shadow-[0_-1px_0_rgba(255,255,255,0.05)] backdrop-blur-md">
      <div class="px-4 py-3 sm:px-8 sm:py-4">
        <ProjectNavigation :prev="adjacent.prev" :next="adjacent.next" />
      </div>
    </footer>
  </div>

  <div v-else class="flex min-h-[60vh] items-center justify-center">
    <div class="text-center">
      <h1 class="mb-4 text-xl font-light text-primary">
        Project not found
      </h1>
      <router-link
        :to="{ name: 'home' }"
        class="text-sm font-light text-muted transition-colors duration-300 hover:text-accent"
      >
        Return to homepage
      </router-link>
    </div>
  </div>
</template>
