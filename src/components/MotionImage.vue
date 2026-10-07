<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

defineOptions({ inheritAttrs: false })
const props = withDefaults(defineProps<{
  src: string
  alt?: string
  loading?: 'eager' | 'lazy'
  reveal?: 'soft' | 'background'
  ariaHidden?: boolean | 'true' | 'false'
}>(), { alt: '', loading: 'lazy' })

const failed = ref(false)
const loaded = ref(false)
const element = ref<HTMLImageElement>()
onMounted(() => {
  if (element.value?.complete) {
    loaded.value = element.value.naturalWidth > 0
    failed.value = !loaded.value
  }
})
watch(() => props.src, () => { failed.value = false; loaded.value = false })
</script>

<template>
  <div v-if="failed" v-bind="$attrs" class="image-fallback" role="img" :aria-label="`${alt || 'Project image'} unavailable`" :aria-hidden="ariaHidden">
    <span>Image unavailable</span>
  </div>
  <img
    v-else
    ref="element"
    v-bind="$attrs"
    :src="src"
    :alt="alt"
    :loading="loading"
    :aria-hidden="ariaHidden"
    decoding="async"
    class="motion-image"
    :class="{ 'motion-image--loaded': loaded }"
    @load="loaded = true"
    @error="failed = true"
  />
</template>
