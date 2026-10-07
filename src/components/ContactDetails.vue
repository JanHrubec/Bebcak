<script setup lang="ts">
import { contact } from '../data/contact'
</script>
<template>
  <dl class="contact-details">
    <div><dt>Email</dt><dd><a v-if="contact.email" :href="`mailto:${contact.email}`">{{ contact.email }}</a><span v-else class="contact-space" aria-label="Email to be added">—</span></dd></div>
    <div><dt>Telephone</dt><dd><a v-if="contact.telephone" :href="`tel:${contact.telephone.replace(/\s/g, '')}`">{{ contact.telephone }}</a><span v-else class="contact-space" aria-label="Telephone to be added">—</span></dd></div>
    <div><dt>Instagram</dt><dd><a href="https://www.instagram.com/bebcak/" target="_blank" rel="noopener noreferrer">@bebcak ↗</a></dd></div>
  </dl>
</template>
