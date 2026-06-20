<script setup lang="ts">



const emit = defineEmits<{
  openAbout: []
}>()


const openAbout = () => {
  emit('openAbout')
}
</script>

<template>
  <aside class="flex flex-col justify-between h-full">
    <div>
      <!-- Designer Identity -->
      <div class="mb-8 md:mb-12">
        <h1 class="text-xl md:text-2xl font-light tracking-wide text-primary">
          Dušan Bebčák
        </h1>
        <p class="text-sm font-light tracking-widest uppercase text-secondary mt-2">
          Costume Designer
        </p>
      </div>

      <!-- Navigation -->
      <nav class="space-y-4">
        <button
          @click="openAbout"
          class="block text-sm font-light text-muted hover:text-accent transition-colors duration-300 tracking-wide"
        >
          About
        </button>
      </nav>
    </div>

    <!-- Contact -->
    <div class="mt-0">
      <a
        href="mailto:dusan@bebcak.com"
        class="text-sm font-light text-muted hover:text-accent transition-colors duration-300 tracking-wide"
      >
        dusan@bebcak.com
      </a>
    </div>
  </aside>
</template>
