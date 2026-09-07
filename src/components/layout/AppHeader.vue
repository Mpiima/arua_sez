<template>
  <header class="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm transition-all">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Brand Logo -->
        <RouterLink to="/" class="flex items-center gap-3 group">
          <!-- Logo Emblem -->
          <div class="relative w-11 h-11 flex-shrink-0 flex items-center justify-center">
            <svg class="w-11 h-11" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Outer gear in green -->
              <path d="M24 6V2M24 46V42M6 24H2M46 24H42M11.3 11.3L8.5 8.5M39.5 39.5L36.7 36.7M11.3 36.7L8.5 39.5M39.5 11.3L36.7 14.1" stroke="#166534" stroke-width="3" stroke-linecap="round"/>
              <circle cx="24" cy="24" r="16" stroke="#166534" stroke-width="2.5" fill="#FFFFFF"/>
              <!-- Factory / leaves in gold & green -->
              <path d="M16 32V24L22 28V22L28 26V18H32V32H16Z" fill="#D97706"/>
              <path d="M22 32C22 26 27 23 30 22C29 27 26 31 22 32Z" fill="#166534"/>
            </svg>
          </div>

          <!-- Logo Text -->
          <div class="leading-none">
            <div class="flex items-baseline gap-1 font-heading font-extrabold text-xl tracking-tight">
              <span class="text-[#0E5832]">ARUA</span>
              <span class="text-[#D97706]">SEZ</span>
            </div>
            <div class="text-[9px] font-bold text-gray-500 tracking-[0.2em] uppercase mt-0.5">
              Special Economic Zone
            </div>
          </div>
        </RouterLink>

        <!-- Desktop Navigation Links -->
        <nav class="hidden xl:flex items-center gap-7">
          <RouterLink 
            to="/" 
            class="relative py-2 text-[13px] font-bold tracking-wider text-[#0E5832] transition-colors"
          >
            HOME
            <span class="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0E5832] rounded-full"></span>
          </RouterLink>

          <a href="#about" class="text-[13px] font-semibold tracking-wider text-gray-700 hover:text-[#0E5832] transition-colors">
            ABOUT
          </a>

          <a href="#invest" class="text-[13px] font-semibold tracking-wider text-gray-700 hover:text-[#0E5832] transition-colors">
            INVEST
          </a>

          <a href="#the-zone" class="text-[13px] font-semibold tracking-wider text-gray-700 hover:text-[#0E5832] transition-colors">
            THE ZONE
          </a>

          <a href="#industries" class="text-[13px] font-semibold tracking-wider text-gray-700 hover:text-[#0E5832] transition-colors">
            INDUSTRIES
          </a>

          <a href="#trade" class="text-[13px] font-semibold tracking-wider text-gray-700 hover:text-[#0E5832] transition-colors">
            EXPORT &amp; TRADE
          </a>

          <a href="#resources" class="text-[13px] font-semibold tracking-wider text-gray-700 hover:text-[#0E5832] transition-colors">
            RESOURCES
          </a>

          <a href="#news" class="text-[13px] font-semibold tracking-wider text-gray-700 hover:text-[#0E5832] transition-colors">
            NEWS
          </a>

          <a href="#contact" class="text-[13px] font-semibold tracking-wider text-gray-700 hover:text-[#0E5832] transition-colors">
            CONTACT
          </a>
        </nav>

        <!-- Right Side: INVEST NOW Button -->
        <div class="hidden sm:flex items-center gap-3">
          <RouterLink 
            to="/admin" 
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase text-white bg-[#0F3924] hover:bg-[#092919] shadow-sm hover:shadow transition-all"
          >
            <span>INVEST NOW</span>
            <span class="text-sm">→</span>
          </RouterLink>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="xl:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
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
    <div v-if="mobileMenuOpen" class="xl:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3 shadow-lg">
      <RouterLink to="/" @click="mobileMenuOpen = false" class="block py-1.5 text-sm font-bold text-[#0E5832]">HOME</RouterLink>
      <a href="#about" @click="mobileMenuOpen = false" class="block py-1.5 text-sm font-semibold text-gray-700">ABOUT</a>
      <a href="#invest" @click="mobileMenuOpen = false" class="block py-1.5 text-sm font-semibold text-gray-700">INVEST</a>
      <a href="#the-zone" @click="mobileMenuOpen = false" class="block py-1.5 text-sm font-semibold text-gray-700">THE ZONE</a>
      <a href="#industries" @click="mobileMenuOpen = false" class="block py-1.5 text-sm font-semibold text-gray-700">INDUSTRIES</a>
      <a href="#trade" @click="mobileMenuOpen = false" class="block py-1.5 text-sm font-semibold text-gray-700">EXPORT &amp; TRADE</a>
      <a href="#resources" @click="mobileMenuOpen = false" class="block py-1.5 text-sm font-semibold text-gray-700">RESOURCES</a>
      <a href="#news" @click="mobileMenuOpen = false" class="block py-1.5 text-sm font-semibold text-gray-700">NEWS</a>
      <a href="#contact" @click="mobileMenuOpen = false" class="block py-1.5 text-sm font-semibold text-gray-700">CONTACT</a>
      <div class="pt-2">
        <RouterLink 
          to="/admin" 
          @click="mobileMenuOpen = false"
          class="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg text-xs font-bold tracking-wider uppercase text-white bg-[#0F3924]"
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
