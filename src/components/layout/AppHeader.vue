<template>
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 transition-all">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Brand Logo & Title -->
        <RouterLink to="/" class="flex items-center gap-3.5 group">
          <div class="w-11 h-11 rounded-xl bg-brand-navy flex items-center justify-center shadow-md shadow-brand-navy/20 group-hover:scale-105 transition-transform">
            <svg class="w-7 h-7 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div>
            <div class="font-heading font-extrabold text-xl tracking-tight text-brand-navy flex items-center gap-1.5">
              <span>ARUA</span>
              <span class="text-brand-gold">SEZ</span>
            </div>
            <p class="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Special Economic Zone</p>
          </div>
        </RouterLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <RouterLink to="/" class="text-brand-navy font-semibold hover:text-brand-gold transition-colors">
            Home
          </RouterLink>
          <a href="#about" class="hover:text-brand-navy transition-colors">About Zone</a>
          <a href="#sectors" class="hover:text-brand-navy transition-colors">Priority Sectors</a>
          <a href="#incentives" class="hover:text-brand-navy transition-colors">Incentives</a>
          <a href="#contact" class="hover:text-brand-navy transition-colors">Contact</a>
        </nav>

        <!-- Action / Admin Link -->
        <div class="hidden sm:flex items-center gap-3">
          <RouterLink 
            to="/admin" 
            class="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-brand-navy text-white hover:bg-slate-800 shadow-sm hover:shadow transition-all"
          >
            <svg class="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Admin Dashboard
          </RouterLink>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg text-slate-600 hover:text-brand-navy hover:bg-slate-100 transition-colors"
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

    <!-- Mobile Dropdown -->
    <div v-if="mobileMenuOpen" class="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
      <RouterLink to="/" @click="mobileMenuOpen = false" class="block py-2 text-base font-semibold text-brand-navy">Home</RouterLink>
      <a href="#about" @click="mobileMenuOpen = false" class="block py-2 text-base text-slate-600">About Zone</a>
      <a href="#sectors" @click="mobileMenuOpen = false" class="block py-2 text-base text-slate-600">Priority Sectors</a>
      <a href="#incentives" @click="mobileMenuOpen = false" class="block py-2 text-base text-slate-600">Incentives</a>
      <a href="#contact" @click="mobileMenuOpen = false" class="block py-2 text-base text-slate-600">Contact</a>
      <div class="pt-2">
        <RouterLink 
          to="/admin" 
          @click="mobileMenuOpen = false"
          class="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-semibold bg-brand-navy text-white"
        >
          Admin Dashboard
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
