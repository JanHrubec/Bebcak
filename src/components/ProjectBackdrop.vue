<script setup lang="ts">
import MotionImage from './MotionImage.vue'

defineProps<{
  src?: string
}>()
</script>

<template>
  <div
    class="project-backdrop"
    :class="{ 'project-backdrop--visible': src }"
    aria-hidden="true"
  >
    <div class="project-backdrop__base" />

    <Transition name="project-backdrop-image" :duration="700">
      <MotionImage
        v-if="src"
        :key="src"
        :src="src"
        alt=""
        class="project-backdrop__image"
        reveal="background"
        loading="eager"
        fetchpriority="high"
        aria-hidden="true"
      />
    </Transition>

    <div class="project-backdrop__shade" />
  </div>
</template>
