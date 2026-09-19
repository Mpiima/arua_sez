<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />

    <!-- Hero -->
    <section class="relative bg-[#0B0F19] py-24 overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <svg class="w-full h-full" viewBox="0 0 800 400" fill="none">
          <rect x="500" y="-50" width="400" height="500" rx="40" fill="#F59E0B"/>
          <rect x="-100" y="200" width="300" height="300" rx="40" fill="#D00004"/>
        </svg>
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-xs font-extrabold tracking-widest text-[#F59E0B] uppercase mb-3">Our Offers</div>
        <h1 class="font-heading font-extrabold text-4xl sm:text-6xl text-white leading-tight mb-4">Infrastructure Development</h1>
        <p class="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
          Arua SEZ delivers a fully serviced, plug-and-play industrial environment — so your business can begin operations from day one without the burden of building from scratch.
        </p>
      </div>
    </section>

    <!-- 4 Core Pillars -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">Infrastructure</div>
          <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">What We Provide</h2>
          <p class="mt-3 text-slate-500 text-sm max-w-xl mx-auto leading-relaxed">
            Every plot at Arua SEZ comes backed by core infrastructure designed for industrial-scale operations.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

          <!-- Serviced industrial plots -->
          <div class="group p-8 rounded-2xl border border-gray-100 bg-[#F8FAFC] hover:border-[#D00004]/20 hover:shadow-lg transition-all duration-300">
            <div class="flex items-start gap-5">
              <div class="w-14 h-14 rounded-2xl bg-[#0B0F19] flex items-center justify-center flex-shrink-0 group-hover:bg-[#D00004] transition-colors duration-300">
                <svg class="w-7 h-7 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="font-heading font-extrabold text-lg text-slate-900 mb-2">Serviced Industrial Plots</h3>
                <p class="text-slate-500 text-sm leading-relaxed mb-4">
                  Demarcated, surveyed, and fully serviced plots ranging from 0.5 to 5+ acres — ready for immediate construction and industrial use with no clearing or utility installation delays.
                </p>
                <ul class="space-y-2">
                  <li v-for="pt in plots" :key="pt" class="flex items-start gap-2.5 text-sm text-slate-700">
                    <span class="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                    {{ pt }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Reliable Power & Water -->
          <div class="group p-8 rounded-2xl border border-gray-100 bg-[#F8FAFC] hover:border-[#D00004]/20 hover:shadow-lg transition-all duration-300">
            <div class="flex items-start gap-5">
              <div class="w-14 h-14 rounded-2xl bg-[#0B0F19] flex items-center justify-center flex-shrink-0 group-hover:bg-[#D00004] transition-colors duration-300">
                <svg class="w-7 h-7 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="font-heading font-extrabold text-lg text-slate-900 mb-2">Reliable Power &amp; Water Access</h3>
                <p class="text-slate-500 text-sm leading-relaxed mb-4">
                  Dedicated power connections from the national grid, supported by backup generation. Industrial-grade water supply and wastewater management systems ensure uninterrupted operations.
                </p>
                <ul class="space-y-2">
                  <li v-for="pt in power" :key="pt" class="flex items-start gap-2.5 text-sm text-slate-700">
                    <span class="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                    {{ pt }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Logistics & Warehousing -->
          <div class="group p-8 rounded-2xl border border-gray-100 bg-[#F8FAFC] hover:border-[#D00004]/20 hover:shadow-lg transition-all duration-300">
            <div class="flex items-start gap-5">
              <div class="w-14 h-14 rounded-2xl bg-[#0B0F19] flex items-center justify-center flex-shrink-0 group-hover:bg-[#D00004] transition-colors duration-300">
                <svg class="w-7 h-7 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="font-heading font-extrabold text-lg text-slate-900 mb-2">Logistics &amp; Warehousing Facilities</h3>
                <p class="text-slate-500 text-sm leading-relaxed mb-4">
                  Shared and dedicated warehousing infrastructure, internal haul roads, and loading bays built to handle high-volume goods movement for processing, distribution, and export.
                </p>
                <ul class="space-y-2">
                  <li v-for="pt in logistics" :key="pt" class="flex items-start gap-2.5 text-sm text-slate-700">
                    <span class="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                    {{ pt }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Secure Perimeter & Customs -->
          <div class="group p-8 rounded-2xl border border-gray-100 bg-[#F8FAFC] hover:border-[#D00004]/20 hover:shadow-lg transition-all duration-300">
            <div class="flex items-start gap-5">
              <div class="w-14 h-14 rounded-2xl bg-[#0B0F19] flex items-center justify-center flex-shrink-0 group-hover:bg-[#D00004] transition-colors duration-300">
                <svg class="w-7 h-7 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="font-heading font-extrabold text-lg text-slate-900 mb-2">Secure Perimeter &amp; Customs Support</h3>
                <p class="text-slate-500 text-sm leading-relaxed mb-4">
                  A fully fenced and monitored zone perimeter with 24/7 security. An on-site Uganda Revenue Authority (URA) customs office enables fast, streamlined import and export clearance for all tenants.
                </p>
                <ul class="space-y-2">
                  <li v-for="pt in security" :key="pt" class="flex items-start gap-2.5 text-sm text-slate-700">
                    <span class="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                    {{ pt }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="py-14 bg-[#0B0F19]">
      <div class="max-w-3xl mx-auto text-center px-4">
        <div class="text-xs font-extrabold tracking-widest text-[#F59E0B] uppercase mb-3">Ready to Set Up</div>
        <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-4">Secure Your Plot at Arua SEZ</h2>
        <p class="text-slate-400 text-sm mb-8 leading-relaxed">
          Limited serviced plots are available. Talk to our investment team today about sizing, lease terms, and infrastructure specifications.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <RouterLink to="/get-started" class="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-[#D00004] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B30003] transition-colors">
            Get Started Now →
          </RouterLink>
          <RouterLink to="/contact" class="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-slate-600 text-slate-300 text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors">
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

const plots = [
  'Plots from 0.5 to 5+ acres, fully demarcated and surveyed',
  'Paved internal road network connecting all plots to the main gate',
  'Plots graded and cleared — construction-ready from day one',
  'Flexible lease and ownership arrangements for investors',
]

const power = [
  'Grid power connection to every plot with industrial-rated supply',
  'Standby generator infrastructure for critical operations',
  'Clean industrial water supply from a dedicated borehole network',
  'Wastewater treatment and drainage systems in place',
]

const logistics = [
  'On-site shared warehousing available for zone tenants',
  'Wide internal haul roads accommodating heavy goods vehicles',
  'Truck turnaround bays and loading dock facilities',
  'Direct access to the Arua–Kampala highway and border crossings',
]

const security = [
  'Perimeter wall and razor-wire fencing around the entire zone',
  '24/7 manned security with CCTV surveillance',
  'Controlled single-entry gate for all vehicles and personnel',
  'On-site URA customs office for fast import/export clearance',
]
</script>
