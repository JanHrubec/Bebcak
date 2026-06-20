<script setup lang="ts">
import { getProjectsByYear } from '../data/projects'
import YearSection from '../components/YearSection.vue'

const projectsByYear = getProjectsByYear()
</script>

<template>
  <div class="py-10 md:py-14">
    <div v-for="[year, projects] in projectsByYear" :key="year">
      <YearSection :year="year" :projects="projects" />
    </div>
  </div>
</template>
