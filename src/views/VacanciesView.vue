<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />

    <!-- Hero -->
    <section class="relative h-72 sm:h-96 overflow-hidden">
      <img src="/images/vacancies_hero.jpg" alt="Join Our Team" class="absolute inset-0 w-full h-full object-cover object-center" />
      <div class="absolute inset-0 bg-gradient-to-r from-[#0B0F19]/80 via-[#0B0F19]/50 to-transparent"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12">
        <div class="text-xs font-extrabold tracking-widest text-[#F59E0B] uppercase mb-2">Jobs & Tenders</div>
        <h1 class="font-heading font-extrabold text-3xl sm:text-5xl text-white leading-tight">Vacancies</h1>
        <p class="mt-2 text-sm sm:text-base text-slate-300 max-w-lg">Join a team driving industrial transformation across West Nile and the Great Lakes region.</p>
      </div>
    </section>

    <!-- Why Join Us -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">Why Arua SEZ</div>
          <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">Join Our Team</h2>
          <p class="mt-3 text-slate-500 text-sm max-w-xl mx-auto leading-relaxed">Be part of Uganda's most ambitious industrial development — creating jobs, transforming livelihoods, and connecting the region to global markets.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div v-for="perk in perks" :key="perk.title" class="p-6 rounded-2xl border border-gray-100 bg-[#F8FAFC] text-center hover:shadow-md transition-shadow">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" :class="perk.iconBg" v-html="perk.icon"></div>
            <div class="font-heading font-bold text-slate-900 mb-1">{{ perk.title }}</div>
            <div class="text-xs text-slate-500 leading-relaxed">{{ perk.desc }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Open Positions -->
    <section class="py-16 bg-[#F8FAFC]">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-8">
          <div>
            <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-1">Current Openings</div>
            <h2 class="font-heading font-extrabold text-2xl text-slate-900">Open Positions</h2>
          </div>
        </div>

        <!-- Empty State -->
        <div class="bg-white rounded-2xl border border-dashed border-gray-200 py-16 px-6 text-center">
          <div class="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 class="font-heading font-bold text-slate-700 mb-2">No Vacancies Currently Available</h3>
          <p class="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">There are no open positions at this time. Please check back regularly — we are growing fast.</p>
          <div class="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:info@aruasez.com" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0B0F19] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1E293B] transition-colors">
              Submit Your CV <span>→</span>
            </a>
            <RouterLink to="/contact" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 text-slate-700 text-xs font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors">
              Contact HR Team
            </RouterLink>
          </div>
        </div>

        <!-- Notify Me -->
        <div class="mt-8 p-6 rounded-2xl bg-gradient-to-br from-[#0B0F19] to-[#1E293B] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div class="font-heading font-bold text-base mb-1">Stay Notified</div>
            <p class="text-slate-400 text-xs">Send your email to be notified when new positions open.</p>
          </div>
          <a href="mailto:info@aruasez.com?subject=Job Alert Subscription" class="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#D00004] hover:bg-[#B30003] text-white text-xs font-bold uppercase tracking-wider transition-colors">
            Notify Me
          </a>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import { RouterLink } from 'vue-router'

const perks = [
  {
    title: 'Impact-Driven Work',
    desc: 'Your work directly supports industrialisation, job creation, and economic growth in West Nile.',
    iconBg: 'bg-red-50 text-[#D00004]',
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>',
  },
  {
    title: 'Growth & Learning',
    desc: 'Work alongside regional and international experts in a fast-growing special economic zone.',
    iconBg: 'bg-amber-50 text-amber-600',
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>',
  },
  {
    title: 'Competitive Package',
    desc: 'Fair remuneration, professional development, and a purpose-led working environment.',
    iconBg: 'bg-emerald-50 text-emerald-600',
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
  },
]
</script>
