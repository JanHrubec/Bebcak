<script setup lang="ts">
import ContactDetails from './ContactDetails.vue'
import MotionImage from './MotionImage.vue'
import { aboutParagraphs, aboutPortrait } from '../data/about'
</script>
<template>
  <div class="about-content">
    <section class="about-biography" aria-label="About me">
      <div class="about-introduction" :style="{ '--portrait-width': `${Math.min(aboutPortrait.width, 180)}px` }">
        <figure class="about-portrait">
          <MotionImage :src="aboutPortrait.src" :width="aboutPortrait.width" :height="aboutPortrait.height" :alt="aboutPortrait.alt" loading="eager" />
        </figure>
        <p class="about-lead">{{ aboutParagraphs[0] }}</p>
      </div>
      <p v-for="paragraph in aboutParagraphs.slice(1)" :key="paragraph">{{ paragraph }}</p>
    </section>
    <section class="about-contact">
      <h2>Get in touch</h2>
      <ContactDetails />
    </section>
  </div>
</template>
