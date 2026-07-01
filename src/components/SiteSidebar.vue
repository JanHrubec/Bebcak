<script setup lang="ts">
import type { PortfolioView } from '../data/projects'
import { viewOptions } from '../data/projects'
import ViewSwitcher from './ViewSwitcher.vue'

defineProps<{
  activeView: PortfolioView
}>()

const emit = defineEmits<{
  openAbout: []
  switchView: [view: PortfolioView]
}>()
</script>

<template>
  <aside class="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-5 gap-y-2 md:flex md:h-full md:flex-col md:justify-between">
    <div class="min-w-0">
      <div class="md:mb-12">
        <h1 class="text-base font-light tracking-wide text-primary sm:text-lg md:text-2xl">
          Dusan Bebcak
        </h1>
        <div class="mt-2 border-l border-white/10 pl-3 md:mt-4 md:pl-4">
          <ViewSwitcher
            :active-view="activeView"
            :options="viewOptions"
            @switch-view="emit('switchView', $event)"
          />
        </div>
      </div>

      <nav class="hidden space-y-4 md:block">
        <button
          type="button"
          class="block text-sm font-light tracking-wide text-muted transition-colors duration-300 hover:text-accent"
          @click="emit('openAbout')"
        >
          About
        </button>
      </nav>
    </div>

    <div class="flex min-w-0 flex-col items-end gap-2 pt-0.5 text-right md:block md:pt-0 md:text-left">
      <button
        type="button"
        class="block text-xs font-light tracking-wide text-muted transition-colors duration-300 hover:text-accent md:hidden"
        @click="emit('openAbout')"
      >
        About
      </button>
      <a
        href="mailto:dusan@bebcak.com"
        class="max-w-[42vw] truncate text-xs font-light tracking-wide text-muted transition-colors duration-300 hover:text-accent md:max-w-none md:text-sm"
      >
        dusan@bebcak.com
      </a>
    </div>
  </aside>
</template>
