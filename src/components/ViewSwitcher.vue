<script setup lang="ts">
import type { PortfolioView, ViewOption } from '../data/projects'

defineProps<{
  activeView: PortfolioView
  options: ViewOption[]
}>()

const emit = defineEmits<{
  switchView: [view: PortfolioView]
}>()
</script>

<template>
  <div class="space-y-1.5 md:space-y-2">
    <button
      v-for="option in options"
      :key="option.id"
      type="button"
      class="block text-left transition-colors duration-300"
      :class="activeView === option.id ? 'text-primary' : 'text-muted hover:text-accent'"
      :aria-pressed="activeView === option.id"
      :disabled="activeView === option.id"
      @click="emit('switchView', option.id)"
    >
      <span class="text-[0.68rem] font-light uppercase tracking-[0.18em] md:text-sm md:tracking-widest">
        {{ option.label }}
      </span>
    </button>
  </div>
</template>
