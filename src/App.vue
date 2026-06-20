<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRouter, RouterView, useRoute } from 'vue-router'
import SiteSidebar from './components/SiteSidebar.vue'
import AboutPanel from './components/AboutPanel.vue'

const router = useRouter()
const route = useRoute()
const sidebarCollapsed = ref(false)
const showAboutPanel = ref(false)

const isProjectPage = computed(() => route.name === 'project')

watch(isProjectPage, (isProject) => {
  sidebarCollapsed.value = isProject
}, { immediate: true })

const openAbout = () => {
  showAboutPanel.value = true
}

const closeAbout = () => {
  showAboutPanel.value = false
}

const navigateHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen bg-background">
    <!-- Mobile Layout -->
    <div class="md:hidden">
      <div class="px-5 py-6 border-b border-white/10">
        <SiteSidebar 
          :collapsed="false" 
          @open-about="openAbout" 
        />
      </div>
      <main class="px-5 py-6">
        <RouterView v-slot="{ Component }">
          <Transition name="fade" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </main>
    </div>

    <!-- Desktop Layout -->
    <div class="hidden md:flex min-h-screen">
      <!-- Sidebar - No border -->
      <aside 
        class="relative z-20 transition-all duration-500 ease-out flex-shrink-0"
        :class="sidebarCollapsed ? 'w-20 p-6' : 'w-[28%] min-w-[280px] max-w-[400px] p-12'"
      >
        <div 
          class="sticky top-12"
          :class="sidebarCollapsed ? 'flex justify-center w-full' : ''"
        >
          <!-- Home Icon when collapsed -->
          <button
            v-if="sidebarCollapsed"
            @click="navigateHome"
            class="flex items-center justify-center w-12 h-12 hover:text-accent transition-colors duration-300"
            aria-label="Back to projects"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </button>
          
          <!-- Full Sidebar -->
          <SiteSidebar 
            v-else
            @open-about="openAbout" 
          />
        </div>
      </aside>

      <!-- Main Content - Full Width -->
      <main class="flex-1 overflow-y-auto px-5 py-6">
        <RouterView v-slot="{ Component }">
          <Transition name="fade" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </main>
    </div>

    <!-- About Panel -->
    <AboutPanel 
      :is-open="showAboutPanel" 
      @close="closeAbout" 
    />
  </div>
</template>
