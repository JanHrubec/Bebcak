<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import type { ProjectVideo, PortfolioImage } from '../data/projects'
import { getVideoUrl } from '../data/media'
const props = defineProps<{ video: ProjectVideo; poster: PortfolioImage }>()
const player = ref<HTMLVideoElement>()
const loaded = ref(false)
const failed = ref(false)
const needsPlay = ref(false)
let observer: IntersectionObserver | undefined
let visible = false
let shouldResume = true

const play = async () => {
  if (!player.value || !visible) return
  try {
    await player.value.play()
    needsPlay.value = false
  } catch (error) {
    // Low-power mode and browser settings can still prevent muted autoplay.
    if (visible && error instanceof DOMException && error.name === 'NotAllowedError') needsPlay.value = true
  }
}
const retry = () => {
  failed.value = false
  player.value?.load()
  void play()
}
const playing = () => {
  needsPlay.value = false
  if (!visible) player.value?.pause()
}
onMounted(() => {
  if (!player.value) return
  player.value.muted = true
  if (!('IntersectionObserver' in window)) {
    visible = true
    loaded.value = true
    return
  }
  observer = new IntersectionObserver(([entry]) => {
    if (!entry || entry.isIntersecting === visible) return
    visible = entry.isIntersecting
    if (visible) {
      loaded.value = true
      if (shouldResume) void play()
    } else {
      shouldResume = !player.value?.paused
      player.value?.pause()
    }
  }, { threshold: 0.1 })
  observer.observe(player.value)
})
onBeforeUnmount(() => { observer?.disconnect(); player.value?.pause() })
</script>
<template>
  <div class="film-block" :style="{ '--media-ratio': props.video.width / props.video.height, '--media-width': `${props.video.width}px` }">
    <div class="film-stage" :style="{ aspectRatio: `${props.video.width} / ${props.video.height}` }">
      <video ref="player" :src="loaded ? getVideoUrl(props.video.src) : undefined" :poster="poster.src" controls playsinline autoplay muted preload="none" :aria-label="props.video.title" @loadedmetadata="play" @play="playing" @error="failed = true" />
      <button v-if="failed" type="button" class="film-cover film-retry" @click="retry">Unable to play. Try again</button>
      <button v-else-if="needsPlay" type="button" class="film-start" :aria-label="`Play ${props.video.title}`" @click="play">
        <span class="film-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor" /></svg></span>
      </button>
    </div>
  </div>
</template>
