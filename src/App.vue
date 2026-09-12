<template>
  <div id="app-root" class="min-h-screen flex flex-col font-sans">
    <RouterView />
    <WhatsAppWidget phone-number="256701117851" />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import WhatsAppWidget from '@/components/WhatsAppWidget.vue'
</script>
