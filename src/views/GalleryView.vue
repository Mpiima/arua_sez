<template>
  <div class="min-h-screen bg-slate-50 font-sans selection:bg-[#D00004] selection:text-white flex flex-col">
    <AppHeader />

    <main class="flex-grow">
      <!-- HERO SECTION -->
      <section class="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#0B0F19]">
        <div class="absolute inset-0 z-0">
          <img src="/images/hero.jpg" alt="Gallery Background" class="w-full h-full object-cover opacity-20" />
          <div class="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/80 to-transparent"></div>
        </div>
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
            Image <span class="text-[#D00004]">Gallery</span>
          </h1>
          <p class="text-lg text-gray-400 max-w-2xl mx-auto font-medium">
            Explore the visual journey of Arua Special Economic Zone. From strategic location to infrastructure and regional impact.
          </p>
        </div>
      </section>

      <!-- GALLERY SECTION (Masonry Layout) -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          <div 
            v-for="(image, index) in images" 
            :key="index"
            class="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer relative"
            @click="openLightbox(index)"
          >
            <!-- Image -->
            <img 
              :src="image.src" 
              :alt="image.title"
              class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
            />
            
            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/90 via-[#0B0F19]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 class="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{{ image.title }}</h3>
              <p class="text-gray-300 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{{ image.category }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <AppFooter />

    <!-- LIGHTBOX MODAL -->
    <Transition name="fade">
      <div v-if="lightboxOpen" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm" @click.self="closeLightbox">
        
        <!-- Close Button -->
        <button @click="closeLightbox" class="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 z-10" aria-label="Close">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        <!-- Navigation Buttons -->
        <button @click.stop="prevImage" class="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-3 transition-colors" aria-label="Previous">
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button @click.stop="nextImage" class="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-3 transition-colors" aria-label="Next">
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </button>

        <!-- Main Image -->
        <div class="relative max-w-5xl w-full max-h-[90vh] px-4 flex flex-col items-center">
          <img :src="images[currentImageIndex].src" :alt="images[currentImageIndex].title" class="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl" />
          <div class="text-center mt-6">
            <h3 class="text-white font-bold text-xl">{{ images[currentImageIndex].title }}</h3>
            <p class="text-gray-400 mt-1">{{ images[currentImageIndex].category }}</p>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

// Gallery Data using actual images from public folder
const images = [
  { src: '/images/aruasez (8).jpeg', title: 'Strategic Location', category: 'Infrastructure' },
  { src: '/images/aruasez (9).jpeg', title: 'Heavy Manufacturing Zone', category: 'Industrial' },
  { src: '/images/aruasez (10).jpeg', title: 'Cross-Border Logistics', category: 'Trade' },
  { src: '/images/aruasez (11).jpeg', title: 'Agro-Processing Hub', category: 'Agriculture' },
  { src: '/images/aruasez (12).jpeg', title: 'Regional Trade Network', category: 'Trade' },
  { src: '/images/aruasez (13).jpeg', title: 'Modern Warehousing', category: 'Infrastructure' },
  { src: '/images/aruasez (1).jpeg', title: 'SEZ Land Development', category: 'Infrastructure' },
  { src: '/images/aruasez (2).jpeg', title: 'Site Inspection', category: 'Operations' },
  { src: '/images/aruasez (4).jpeg', title: 'Stakeholder Meeting', category: 'Governance' },
  { src: '/images/aruasez (5).jpeg', title: 'Facility Planning', category: 'Infrastructure' },
  { src: '/images/aruasez (6).jpeg', title: 'Construction Progress', category: 'Development' },
  { src: '/images/aruasez (7).jpeg', title: 'Community Engagement', category: 'CSR' },
  { src: '/images/aruasez (22).jpeg', title: 'Leadership Team', category: 'Governance' },
  { src: '/images/aruasez (33).jpeg', title: 'Regional Connect', category: 'Operations' },
  { src: '/images/aruasez (34).jpeg', title: 'Regional Connect', category: 'Operations' },
  { src: '/images/aruasez (35).jpeg', title: 'Regional Connect', category: 'Operations' },
  { src: '/images/aruasez (36).jpeg', title: 'Regional Connect', category: 'Operations' },
  { src: '/images/aruasez (37).jpeg', title: 'Regional Connect', category: 'Operations' },
  { src: '/images/aruasez (38).jpeg', title: 'Regional Connect', category: 'Operations' },
  { src: '/images/aruasez (39).jpeg', title: 'Regional Connect', category: 'Operations' },
  { src: '/images/aruasez (14).jpeg', title: 'Regional Connect', category: 'Operations' },
  { src: '/images/aruasez (15).jpeg', title: 'Regional Connect', category: 'Operations' },
  { src: '/images/aruasez (16).jpeg', title: 'Regional Connect', category: 'Operations' },
  { src: '/images/aruasez (43).jpeg', title: 'Regional Connect', category: 'Operations' },
  { src: '/images/aruasez (17).jpeg', title: 'Regional Connect', category: 'Operations' },
  { src: '/images/aruasez (18).jpeg', title: 'Regional Connect', category: 'Operations' },
  { src: '/images/aruasez (19).jpeg', title: 'Regional Connect', category: 'Operations' },
  { src: '/images/aruasez (20).jpeg', title: 'Regional Connect', category: 'Operations' },
]

// Lightbox State
const lightboxOpen = ref(false)
const currentImageIndex = ref(0)

function openLightbox(index) {
  currentImageIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden' // Prevent scrolling
}

function closeLightbox() {
  lightboxOpen.value = false
  document.body.style.overflow = '' // Restore scrolling
}

function nextImage() {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length
}

function prevImage() {
  currentImageIndex.value = (currentImageIndex.value - 1 + images.length) % images.length
}

// Keyboard navigation
function handleKeydown(e) {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
