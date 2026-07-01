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
  <Teleport to="body">
    <Transition name="about-panel" :duration="{ enter: 520, leave: 420 }">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50"
        @click="emit('close')"
      >
        <div class="about-panel__overlay absolute inset-0 bg-black/55 backdrop-blur-md" />

        <div
          class="about-panel__sheet absolute left-0 top-0 h-full w-full overflow-y-auto border-r border-white/10 bg-surface/95 shadow-[32px_0_80px_rgba(0,0,0,0.35)] md:w-[520px]"
          @click.stop
        >
          <div class="px-6 pb-8 pt-[4.5rem] sm:px-8 md:px-12">
            <button
              type="button"
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
.about-panel-enter-active,
.about-panel-leave-active {
  transition: opacity 0.42s cubic-bezier(0.22, 1, 0.36, 1);
}

.about-panel__overlay,
.about-panel__sheet {
  will-change: opacity, transform, filter;
}

.about-panel-enter-active .about-panel__overlay,
.about-panel-leave-active .about-panel__overlay {
  transition:
    opacity 0.42s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.42s cubic-bezier(0.22, 1, 0.36, 1);
}

.about-panel-enter-active .about-panel__sheet,
.about-panel-leave-active .about-panel__sheet {
  transition:
    transform 0.52s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.42s ease,
    filter 0.52s cubic-bezier(0.22, 1, 0.36, 1);
}

.about-panel-enter-from,
.about-panel-leave-to {
  opacity: 0;
}

.about-panel-enter-from .about-panel__overlay,
.about-panel-leave-to .about-panel__overlay {
  opacity: 0;
  filter: blur(8px);
}

.about-panel-enter-from .about-panel__sheet,
.about-panel-leave-to .about-panel__sheet {
  opacity: 0;
  transform: translate3d(0, 18px, 0);
  filter: blur(10px);
}

.about-panel-enter-to .about-panel__overlay,
.about-panel-leave-from .about-panel__overlay,
.about-panel-enter-to .about-panel__sheet,
.about-panel-leave-from .about-panel__sheet {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  filter: blur(0);
}

@media (min-width: 768px) {
  .about-panel-enter-from .about-panel__sheet,
  .about-panel-leave-to .about-panel__sheet {
    transform: translate3d(-42px, 0, 0);
  }
}

@media (max-width: 767px) {
  .about-panel-enter-from .about-panel__sheet,
  .about-panel-leave-to .about-panel__sheet,
  .about-panel-enter-to .about-panel__sheet,
  .about-panel-leave-from .about-panel__sheet {
    transform: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .about-panel-enter-active,
  .about-panel-leave-active,
  .about-panel-enter-active .about-panel__overlay,
  .about-panel-leave-active .about-panel__overlay,
  .about-panel-enter-active .about-panel__sheet,
  .about-panel-leave-active .about-panel__sheet {
    transition-duration: 0.01ms;
  }

  .about-panel-enter-from .about-panel__overlay,
  .about-panel-leave-to .about-panel__overlay,
  .about-panel-enter-from .about-panel__sheet,
  .about-panel-leave-to .about-panel__sheet {
    transform: none;
    filter: none;
  }
}
</style>
