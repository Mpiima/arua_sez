<template>
  <Transition name="back-top">
    <button
      v-if="visible"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-[#D00004] text-white shadow-lg hover:bg-[#B30003] hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Back to top"
      title="Back to top"
    >
      <svg class="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7"/>
      </svg>
      <!-- Pulse ring -->
      <span class="absolute inset-0 rounded-full bg-[#D00004] animate-ping opacity-20 pointer-events-none"></span>
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 320
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.back-top-enter-active,
.back-top-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.back-top-enter-from,
.back-top-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(0.8);
}
</style>
