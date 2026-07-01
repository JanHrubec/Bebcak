<script setup lang="ts">
defineProps<{
  src: string
}>()
</script>

<template>
  <div class="relative aspect-video overflow-hidden bg-surface">
    <video
      :src="src"
      class="h-full w-full object-cover"
      controls
      controlsList="nodownload"
      playsinline
    />
  </div>
</template>

<style scoped>
video::-webkit-media-controls {
  display: flex !important;
}

video::-webkit-media-controls-enclosure {
  background: transparent;
}
</style>
