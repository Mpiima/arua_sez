<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />

    <!-- Hero -->
    <section class="relative h-72 sm:h-96 overflow-hidden">
      <img src="/images/tenders_hero.jpg" alt="Tenders & Procurement" class="absolute inset-0 w-full h-full object-cover object-center" />
      <div class="absolute inset-0 bg-gradient-to-r from-[#0B0F19]/85 via-[#0B0F19]/55 to-transparent"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12">
        <div class="text-xs font-extrabold tracking-widest text-[#F59E0B] uppercase mb-2">Jobs & Tenders</div>
        <h1 class="font-heading font-extrabold text-3xl sm:text-5xl text-white leading-tight">Tenders</h1>
        <p class="mt-2 text-sm sm:text-base text-slate-300 max-w-lg">Transparent procurement. Fair competition. Opportunities for local and international suppliers.</p>
      </div>
    </section>

    <!-- About Procurement -->
    <section class="py-14 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">Our Commitment</div>
            <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mb-4 leading-tight">Transparent & Competitive Procurement</h2>
            <p class="text-slate-500 text-sm leading-relaxed mb-4">Arua SEZ is committed to a fair, open, and transparent procurement process aligned with Uganda's Public Procurement and Disposal of Public Assets Authority (PPDA) framework.</p>
            <p class="text-slate-500 text-sm leading-relaxed">All tenders are published on this page as they become available. Suppliers are encouraged to register their interest by contacting our procurement office.</p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="stat in procStats" :key="stat.label" class="p-5 rounded-2xl border border-gray-100 bg-[#F8FAFC] text-center">
              <div class="font-heading font-extrabold text-2xl text-[#D00004] mb-1">{{ stat.value }}</div>
              <div class="text-xs text-slate-500 font-medium">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Active Tenders -->
    <section class="py-14 bg-[#F8FAFC]">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-1">Procurement</div>
          <h2 class="font-heading font-extrabold text-2xl text-slate-900">Active Tenders</h2>
        </div>

        <!-- Empty State -->
        <div class="bg-white rounded-2xl border border-dashed border-gray-200 py-16 px-6 text-center">
          <div class="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>
          <h3 class="font-heading font-bold text-slate-700 mb-2">No Tenders Currently Open</h3>
          <p class="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">There are no active procurement opportunities at this time. New tenders are published here as they become available.</p>
          <div class="mt-6">
            <a href="mailto:info@aruasez.com?subject=Supplier Registration" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0B0F19] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1E293B] transition-colors">
              Register as Supplier <span>→</span>
            </a>
          </div>
        </div>

        <!-- Guidelines -->
        <div class="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div v-for="tip in guidelines" :key="tip.title" class="p-5 rounded-xl bg-white border border-gray-100">
            <div class="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-1">{{ tip.label }}</div>
            <div class="font-semibold text-slate-800 text-sm">{{ tip.title }}</div>
          </div>
        </div>

        <!-- Contact -->
        <div class="mt-8 p-6 rounded-2xl bg-gradient-to-br from-[#0B0F19] to-[#1E293B] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div class="font-heading font-bold text-base mb-1">Procurement Office</div>
            <p class="text-slate-400 text-xs">For enquiries contact: <span class="text-[#F59E0B]">info@aruasez.com</span> &nbsp;|&nbsp; <span class="text-slate-300">+256 701 117 851</span></p>
          </div>
          <RouterLink to="/contact" class="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#D00004] hover:bg-[#B30003] text-white text-xs font-bold uppercase tracking-wider transition-colors">
            Contact Us
          </RouterLink>
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

const procStats = [
  { value: 'PPDA', label: 'Compliance Framework' },
  { value: '100%', label: 'Open Competition' },
  { value: '30 days', label: 'Standard Bid Period' },
  { value: 'Local', label: 'Supplier Priority' },
]

const guidelines = [
  { label: 'Step 1', title: 'Download tender documents from this page when available.' },
  { label: 'Step 2', title: 'Submit bids before the closing date to the procurement office.' },
  { label: 'Step 3', title: 'Evaluation results are published transparently on this page.' },
]
</script>
