<template>
  <header class="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm transition-all">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Brand Logo -->
        <RouterLink to="/" class="flex items-center gap-3 group py-1" title="Arua Special Economic Zone">
          <img 
            src="/arua_sez_logo.svg" 
            alt="Arua SEZ Logo" 
            class="h-12 sm:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]" 
          />
          <div class="hidden md:flex flex-col justify-center border-l border-gray-200 pl-3 leading-tight">
            <span class="text-[10px] font-extrabold text-[#D17F00] tracking-wider uppercase">Uganda</span>
            <span class="text-[9px] font-semibold text-gray-400 tracking-[0.16em] uppercase">Special Economic Zone</span>
          </div>
        </RouterLink>

        <!-- Desktop Navigation Links -->
        <nav class="hidden lg:flex items-center gap-7 xl:gap-8">
          <RouterLink 
            to="/" 
            class="relative py-2 text-[13px] tracking-wider transition-colors"
            :class="$route.path === '/' ? 'text-[#D00004] font-bold' : 'text-gray-700 font-semibold hover:text-[#D00004]'"
          >
            HOME
            <span v-if="$route.path === '/'" class="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#D00004] rounded-full"></span>
          </RouterLink>

          <RouterLink 
            to="/about" 
            class="relative py-2 text-[13px] tracking-wider transition-colors"
            :class="$route.path === '/about' ? 'text-[#D00004] font-bold' : 'text-gray-700 font-semibold hover:text-[#D00004]'"
          >
            ABOUT
            <span v-if="$route.path === '/about'" class="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#D00004] rounded-full"></span>
          </RouterLink>

          <RouterLink 
            to="/sectors" 
            class="relative py-2 text-[13px] tracking-wider transition-colors"
            :class="$route.path === '/sectors' ? 'text-[#D00004] font-bold' : 'text-gray-700 font-semibold hover:text-[#D00004]'"
          >
            SECTORS
            <span v-if="$route.path === '/sectors'" class="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#D00004] rounded-full"></span>
          </RouterLink>

          <RouterLink 
            to="/incentives" 
            class="relative py-2 text-[13px] tracking-wider transition-colors"
            :class="$route.path === '/incentives' ? 'text-[#D00004] font-bold' : 'text-gray-700 font-semibold hover:text-[#D00004]'"
          >
            INCENTIVES
            <span v-if="$route.path === '/incentives'" class="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#D00004] rounded-full"></span>
          </RouterLink>

          <RouterLink 
            to="/contact" 
            class="relative py-2 text-[13px] tracking-wider transition-colors"
            :class="$route.path === '/contact' ? 'text-[#D00004] font-bold' : 'text-gray-700 font-semibold hover:text-[#D00004]'"
          >
            CONTACT &amp; PARTNER
            <span v-if="$route.path === '/contact'" class="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#D00004] rounded-full"></span>
          </RouterLink>
        </nav>

        <!-- Right Side: INVEST NOW Button -->
        <div class="hidden sm:flex items-center gap-3">
          <RouterLink 
            to="/contact" 
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase text-white bg-[#D00004] hover:bg-[#B30003] shadow-sm hover:shadow transition-all"
          >
            <span>INVEST NOW</span>
            <span class="text-sm">→</span>
          </RouterLink>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          aria-label="Toggle navigation"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Drawer -->
    <div v-if="mobileMenuOpen" class="lg:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3 shadow-lg">
      <RouterLink to="/" @click="mobileMenuOpen = false" class="block py-1.5 text-sm font-bold text-gray-800 hover:text-[#D00004]">HOME</RouterLink>
      <RouterLink to="/about" @click="mobileMenuOpen = false" class="block py-1.5 text-sm font-semibold text-gray-700 hover:text-[#D00004]">ABOUT</RouterLink>
      <RouterLink to="/sectors" @click="mobileMenuOpen = false" class="block py-1.5 text-sm font-semibold text-gray-700 hover:text-[#D00004]">SECTORS</RouterLink>
      <RouterLink to="/incentives" @click="mobileMenuOpen = false" class="block py-1.5 text-sm font-semibold text-gray-700 hover:text-[#D00004]">INCENTIVES</RouterLink>
      <RouterLink to="/contact" @click="mobileMenuOpen = false" class="block py-1.5 text-sm font-semibold text-gray-700 hover:text-[#D00004]">CONTACT &amp; PARTNER</RouterLink>
      <div class="pt-2">
        <RouterLink 
          to="/contact" 
          @click="mobileMenuOpen = false"
          class="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg text-xs font-bold tracking-wider uppercase text-white bg-[#D00004] hover:bg-[#B30003]"
        >
          INVEST NOW →
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const mobileMenuOpen = ref(false)
</script>
