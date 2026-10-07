<script setup lang="ts">
import ProjectNavigation from './ProjectNavigation.vue'
import ContactDetails from './ContactDetails.vue'
import { getAdjacentProjects, type Project } from '../data/projects'
defineProps<{ project?: Project }>()
</script>
<template>
  <aside class="site-sidebar" aria-label="Portfolio">
    <div class="sidebar-top">
      <router-link :to="{ name: 'home' }" class="site-identity" aria-label="Dušan Bebčák — all work"><span class="site-identity__name">Dušan Bebčák</span></router-link>
      <nav class="site-nav" aria-label="Main navigation">
        <router-link :to="{ name: 'home' }" :aria-current="$route.name === 'home' ? 'page' : $route.name === 'project' ? 'true' : undefined">Work</router-link>
        <router-link :to="{ name: 'about' }" :aria-current="$route.name === 'about' ? 'page' : undefined">About & contact</router-link>
      </nav>
    </div>
    <ProjectNavigation v-if="project" :prev="getAdjacentProjects(project.slug).prev" :next="getAdjacentProjects(project.slug).next" />
    <div v-if="project" class="sidebar-project">
      <Transition name="sidebar-copy" mode="out-in">
        <div :key="project.slug">
          <h2 data-page-heading tabindex="-1">{{ project.title }}</h2>
          <dl v-if="project.facts.length" class="project-credits">
            <div v-for="fact in project.facts" :key="fact.label"><dt>{{ fact.label }}</dt><dd>{{ fact.value }}</dd></div>
          </dl>
        </div>
      </Transition>
    </div>
    <section v-if="$route.name === 'home'" class="sidebar-contact" aria-label="Contact">
      <h2>Get in touch</h2>
      <ContactDetails />
    </section>
  </aside>
</template>
