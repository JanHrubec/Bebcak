<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import PortfolioPhoto from './PortfolioPhoto.vue'
import type { PortfolioImage } from '../data/projects'
import { galleryRows, imageDimensions } from '../utils/galleryLayout'
const props = defineProps<{ images: PortfolioImage[] }>()
const gallery = ref<HTMLDivElement>()
const availableWidth = ref(960)
const rows = computed(() => galleryRows(props.images, availableWidth.value).map(row => ({
  ...row,
  photos: row.indexes.map(index => {
    const photo = props.images[index]!
    const dimensions = imageDimensions(photo)
    return { index, photo, width: row.height * dimensions.width / dimensions.height }
  }),
})))
let observer: ResizeObserver | undefined
onMounted(() => {
  if (!gallery.value) return
  availableWidth.value = gallery.value.clientWidth
  observer = new ResizeObserver(([entry]) => {
    if (entry) availableWidth.value = entry.contentRect.width
  })
  observer.observe(gallery.value)
})
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
onBeforeUnmount(() => { observer?.disconnect(); if (isOpen.value) { dialog.value?.close(); closed() } })
</script>
<template>
  <div ref="gallery" class="project-gallery">
    <div v-for="row in rows" :key="row.indexes[0]" class="project-gallery__row" :style="{ width: `${row.width}px` }">
      <figure v-for="{ index, photo, width } in row.photos" :key="`${photo.src}-${index}`" class="project-gallery__item" :style="{ width: `${width}px` }">
        <button type="button" class="gallery-open" :aria-label="`Enlarge: ${photo.alt}`" @click="open(index)">
          <PortfolioPhoto :photo="photo" :sizes="`${Math.ceil(width)}px`" loading="lazy" />
          <span class="gallery-enlarge" aria-hidden="true">↗</span>
        </button>
      </figure>
    </div>
  </div>
  <dialog ref="dialog" class="image-viewer" aria-label="Costume photograph" @close="closed" @keydown="keydown">
    <div class="viewer-toolbar">
      <span>{{ selected + 1 }} / {{ images.length }}</span>
      <button type="button" class="viewer-close" aria-label="Close photograph" @click="close">Close <span aria-hidden="true">×</span></button>
    </div>
    <div class="viewer-scroll">
      <PortfolioPhoto v-if="image && isOpen" :photo="image" loading="eager" />
    </div>
    <div class="viewer-footer">
      <button type="button" aria-label="Previous photograph" :disabled="images.length === 1" @click="move(-1)">←</button>
      <span class="viewer-spacer" aria-hidden="true" />
      <button type="button" aria-label="Next photograph" :disabled="images.length === 1" @click="move(1)">→</button>
    </div>
  </dialog>
</template>
