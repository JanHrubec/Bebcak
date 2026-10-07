<script setup lang="ts">
defineProps<{ src?: string }>()
</script>
<template>
  <div class="project-backdrop" aria-hidden="true">
    <Transition name="backdrop">
      <img v-if="src" :key="src" :src="src" alt="" class="project-backdrop__image" />
    </Transition>
    <div class="project-backdrop__shade" />
  </div>
</template>
