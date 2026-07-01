<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<{
  src: string
  alt?: string
  loading?: 'eager' | 'lazy'
  reveal?: 'soft' | 'background'
  ariaHidden?: boolean | 'true' | 'false'
}>(), {
  alt: '',
  loading: 'lazy',
  reveal: 'soft',
  ariaHidden: undefined,
})

const imageRef = ref<HTMLImageElement | null>(null)
const isLoaded = ref(false)
let revealFrame = 0

const revealImage = () => {
  window.cancelAnimationFrame(revealFrame)

  revealFrame = window.requestAnimationFrame(() => {
    revealFrame = window.requestAnimationFrame(() => {
      isLoaded.value = true
    })
  })
}

const revealCachedImage = async () => {
  await nextTick()

  const image = imageRef.value
  if (image?.complete && image.naturalWidth > 0) {
    revealImage()
  }
}

watch(
  () => props.src,
  () => {
    window.cancelAnimationFrame(revealFrame)
    isLoaded.value = false
    void revealCachedImage()
  },
)

onMounted(() => {
  void revealCachedImage()
})

onBeforeUnmount(() => {
  window.cancelAnimationFrame(revealFrame)
})
</script>

<template>
  <img
    ref="imageRef"
    v-bind="$attrs"
    :src="src"
    :alt="alt"
    :loading="loading"
    decoding="async"
    :aria-hidden="ariaHidden"
    class="motion-image"
    :class="[
      `motion-image--${reveal}`,
      { 'motion-image--loaded': isLoaded },
    ]"
    @load="revealImage"
  />
</template>
