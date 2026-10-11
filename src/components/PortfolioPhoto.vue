<script setup lang="ts">
import { computed } from 'vue'
import MotionImage from './MotionImage.vue'
import type { PortfolioImage } from '../data/projects'
import { imageDimensions } from '../utils/galleryLayout'

defineOptions({ inheritAttrs: false })
const props = withDefaults(defineProps<{ photo: PortfolioImage; sizes?: string; loading?: 'eager' | 'lazy' }>(), { sizes: '100vw', loading: 'lazy' })
const dimensions = computed(() => imageDimensions(props.photo))
const frameStyle = computed(() => ({
  aspectRatio: `${dimensions.value.width} / ${dimensions.value.height}`,
  '--photo-width': `${dimensions.value.width}px`,
  '--photo-ratio': dimensions.value.width / dimensions.value.height,
}))
const cropStyle = computed(() => {
  const crop = props.photo.crop
  if (!crop) return undefined
  return {
    width: `${props.photo.width / crop.width * 100}%`,
    height: `${props.photo.height / crop.height * 100}%`,
    left: `${-crop.x / crop.width * 100}%`,
    top: `${-crop.y / crop.height * 100}%`,
  }
})
</script>
<template>
  <div v-if="photo.crop" v-bind="$attrs" class="portfolio-photo" :style="frameStyle">
    <MotionImage :src="photo.src" :width="photo.width" :height="photo.height" :alt="photo.alt" :loading="loading" :style="cropStyle" />
  </div>
  <MotionImage v-else v-bind="$attrs" :src="photo.src" :srcset="photo.smallWidth < photo.width ? `${photo.smallSrc} ${photo.smallWidth}w, ${photo.src} ${photo.width}w` : undefined" :sizes="sizes" :width="photo.width" :height="photo.height" :alt="photo.alt" :loading="loading" />
</template>
