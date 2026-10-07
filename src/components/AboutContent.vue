<script setup lang="ts">
import ContactDetails from './ContactDetails.vue'
import { aboutParagraphs } from '../data/about'
</script>
<template>
  <div class="about-content">
    <section class="about-biography" aria-label="About me">
      <p v-for="(paragraph, index) in aboutParagraphs" :key="paragraph" :class="{ 'about-lead': index === 0 }">{{ paragraph }}</p>
    </section>
    <section class="about-contact">
      <h2>Get in touch</h2>
      <ContactDetails />
    </section>
  </div>
</template>
