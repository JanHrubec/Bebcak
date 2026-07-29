<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'
import AboutContent from './AboutContent.vue'

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const sheetRef = ref<HTMLElement | null>(null)
const closeButtonRef = ref<HTMLButtonElement | null>(null)
let previouslyFocusedElement: HTMLElement | null = null
let previousBodyOverflow = ''
let previousBodyPaddingRight = ''

const closePanel = () => {
  emit('close')
}

const getFocusableElements = () => {
  if (!sheetRef.value) {
    return []
  }

  return Array.from(
    sheetRef.value.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  )
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    event.preventDefault()
    closePanel()
    return
  }

  if (event.key !== 'Tab') {
    return
  }

  const focusableElements = getFocusableElements()
  const firstElement = focusableElements[0]
  const lastElement = focusableElements.at(-1)

  if (!firstElement || !lastElement) {
    event.preventDefault()
    sheetRef.value?.focus()
    return
  }

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault()
    lastElement.focus()
  } else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault()
    firstElement.focus()
  }
}

const releaseModalState = () => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = previousBodyOverflow
  document.body.style.paddingRight = previousBodyPaddingRight
}

watch(
  () => props.isOpen,
  async (isOpen) => {
    if (isOpen) {
      previouslyFocusedElement = document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null
      previousBodyOverflow = document.body.style.overflow
      previousBodyPaddingRight = document.body.style.paddingRight

      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.overflow = 'hidden'
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`
      }

      document.addEventListener('keydown', handleKeydown)
      await nextTick()
      closeButtonRef.value?.focus()
      return
    }

    releaseModalState()
    previouslyFocusedElement?.focus()
    previouslyFocusedElement = null
  },
)

onBeforeUnmount(() => {
  releaseModalState()
})
</script>

<template>
  <Teleport to="body">
    <Transition name="about-panel" :duration="{ enter: 520, leave: 420 }">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50"
        @click="closePanel"
      >
        <div class="about-panel__overlay absolute inset-0 bg-black/55 backdrop-blur-md" />

        <div
          ref="sheetRef"
          class="about-panel__sheet absolute left-0 top-0 h-full w-full overflow-y-auto border-r border-white/10 bg-surface/95 shadow-[32px_0_80px_rgba(0,0,0,0.35)] md:w-[520px]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="about-panel-title"
          tabindex="-1"
          @click.stop
        >
          <div class="about-panel__content">
            <h2 id="about-panel-title" class="sr-only">
              About Dušan Bebčák
            </h2>
            <button
              ref="closeButtonRef"
              type="button"
              class="about-panel__close absolute flex h-11 w-11 items-center justify-center text-muted transition-colors duration-300 hover:text-primary"
              aria-label="Close about panel"
              @click="closePanel"
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

.about-panel__content {
  padding:
    calc(4.5rem + env(safe-area-inset-top))
    max(1.5rem, env(safe-area-inset-right))
    calc(2rem + env(safe-area-inset-bottom))
    max(1.5rem, env(safe-area-inset-left));
}

.about-panel__close {
  top: calc(1.25rem + env(safe-area-inset-top));
  right: max(1.25rem, env(safe-area-inset-right));
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
  .about-panel__content {
    padding-right: max(3rem, env(safe-area-inset-right));
    padding-left: max(3rem, env(safe-area-inset-left));
  }

  .about-panel-enter-from .about-panel__sheet,
  .about-panel-leave-to .about-panel__sheet {
    transform: translate3d(-42px, 0, 0);
  }
}

@media (min-width: 640px) and (max-width: 767px) {
  .about-panel__content {
    padding-right: max(2rem, env(safe-area-inset-right));
    padding-left: max(2rem, env(safe-area-inset-left));
  }

  .about-panel__close {
    top: calc(1.75rem + env(safe-area-inset-top));
    right: max(1.75rem, env(safe-area-inset-right));
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
