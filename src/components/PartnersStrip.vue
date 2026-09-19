<template>
  <section class="py-20 bg-white border-b border-slate-100 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
      <p class="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase">
        Backed &amp; Recognised By
      </p>
    </div>

    <div class="max-w-7xl mx-auto px-2">
      <div class="flex flex-wrap items-center justify-center gap-x-12 sm:gap-x-16 gap-y-10">
        <div v-for="(logo, i) in partners" :key="i"
          class="flex items-center justify-center grayscale opacity-130 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
          <img :src="logo" alt="Partner Logo" class="h-12 md:h-14 w-auto object-contain" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const partners = [
  '/logos/logo1.png',
  '/logos/logo2.png',
  '/logos/logo4.png',
  '/logos/logo5.png',
  '/logos/logo6.png',
  '/logos/logo7.png',
    '/logos/logo7.jpg',
]
</script>
