<script setup lang="ts">
import AboutContent from './AboutContent.vue'

defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
}>()
</script>

<template>
  <!-- Desktop Slide-over Panel - slides from LEFT -->
  <Teleport to="body">
    <Transition name="slide-left">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50"
        @click="emit('close')"
      >

        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        
        <!-- Panel - slides from left -->
        <div
          class="absolute left-0 top-0 h-full w-full md:w-[520px] bg-surface overflow-y-auto"
          @click.stop
        >

          <div class="px-8 md:px-12 pt-18 md:pt-18 pr-8 md:pr-12">
            <button
              @click="emit('close')"
              class="absolute top-8 right-8 text-muted hover:text-primary transition-colors duration-300"
              aria-label="Close about panel"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <AboutContent />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active {
  transition: opacity 0.3s ease;
}

.slide-left-enter-active > div:last-child,
.slide-left-leave-active > div:last-child {
  transition: transform 0.3s ease;
}

.slide-left-enter-from,
.slide-left-leave-to {
  opacity: 0;
}

/* Mobile: slide in/out from TOP */
.slide-left-enter-from > div:last-child,
.slide-left-leave-to > div:last-child {
  transform: translateY(-100%);
}

/* Desktop (md+): keep existing LEFT slide */
@media (min-width: 768px) {
  .slide-left-enter-from > div:last-child,
  .slide-left-leave-to > div:last-child {
    transform: translateX(-100%);
  }
}
</style>
