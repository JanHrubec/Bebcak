<script setup lang="ts">


const props = defineProps<{
  src: string
}>()

</script>


<template>
  <div class="relative aspect-video bg-surface overflow-hidden">
<video
      :src="src"
      class="w-full h-full object-cover"

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
