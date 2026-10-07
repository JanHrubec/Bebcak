<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import MotionImage from './MotionImage.vue'
import type { PortfolioImage } from '../data/projects'
const props = defineProps<{ images: PortfolioImage[] }>()
const dialog = ref<HTMLDialogElement>()
const selected = ref(0)
const image = computed(() => props.images[selected.value])
const isOpen = ref(false)
let previousOverflow = ''
const open = (index: number) => {
  selected.value = index
  previousOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
  isOpen.value = true
  dialog.value?.showModal()
}
const close = () => dialog.value?.close()
const closed = () => { document.body.style.overflow = previousOverflow; isOpen.value = false }
const move = (direction: number) => {
  selected.value = (selected.value + direction + props.images.length) % props.images.length
  dialog.value?.querySelector('.viewer-scroll')?.scrollTo(0, 0)
}
const keydown = (event: KeyboardEvent) => {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault()
    move(event.key === 'ArrowRight' ? 1 : -1)
  }
}
onBeforeUnmount(() => { if (isOpen.value) { dialog.value?.close(); closed() } })
</script>
<template>
  <div class="project-gallery" :class="{ 'project-gallery--single': images.length === 1 }">
    <figure v-for="(photo, index) in images" :key="photo.src" class="project-gallery__item" :class="{ 'project-gallery__item--wide': photo.width / photo.height > 2.25 || (index === 0 && photo.width > photo.height) }" :style="{ maxWidth: `${photo.width}px` }">
      <button type="button" class="gallery-open" :aria-label="`Enlarge: ${photo.alt}`" @click="open(index)">
        <MotionImage :src="photo.src" :srcset="photo.smallWidth < photo.width ? `${photo.smallSrc} ${photo.smallWidth}w, ${photo.src} ${photo.width}w` : undefined" :sizes="photo.width / photo.height > 2.25 || (index === 0 && photo.width > photo.height) || images.length === 1 ? `(min-width: 1600px) ${Math.min(photo.width, images.length === 1 ? 760 : 1200)}px, (min-width: 960px) 75vw, calc(100vw - 32px)` : '(max-width: 639px) calc(100vw - 32px), (min-width: 1600px) 592px, (min-width: 960px) 38vw, 48vw'" :width="photo.width" :height="photo.height" :alt="photo.alt" loading="lazy" />
        <span class="gallery-enlarge" aria-hidden="true">↗</span>
      </button>
    </figure>
  </div>
  <dialog ref="dialog" class="image-viewer" aria-label="Costume photograph" @close="closed" @keydown="keydown">
    <div class="viewer-toolbar">
      <span>{{ selected + 1 }} / {{ images.length }}</span>
      <button type="button" class="viewer-close" aria-label="Close photograph" @click="close">Close <span aria-hidden="true">×</span></button>
    </div>
    <div class="viewer-scroll">
      <img v-if="image && isOpen" :src="image.src" :alt="image.alt" :width="image.width" :height="image.height" />
    </div>
    <div class="viewer-footer">
      <button type="button" aria-label="Previous photograph" :disabled="images.length === 1" @click="move(-1)">←</button>
      <span class="viewer-spacer" aria-hidden="true" />
      <button type="button" aria-label="Next photograph" :disabled="images.length === 1" @click="move(1)">→</button>
    </div>
  </dialog>
</template>
