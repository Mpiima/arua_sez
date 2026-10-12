<template>
  <div class="min-h-screen flex flex-col bg-white font-sans text-slate-800">
    <AppHeader />

    <main class="flex-grow">
      <!-- Hero -->
      <section class="bg-[#0B0F19] py-20 border-b-4 border-[#D00004]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl">
            <div class="text-xs font-extrabold tracking-widest text-[#F59E0B] uppercase mb-3">Our Offers</div>
            <h1 class="font-heading font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-4">Infrastructure Development</h1>
            <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
              Arua SEZ delivers a fully serviced, plug-and-play industrial environment — so your business can begin operations from day one without the burden of building from scratch.
            </p>
          </div>
        </div>
      </section>

      <!-- 4 Core Pillars with Real Photos -->
      <section class="py-20 bg-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-2xl mb-12">
            <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">Infrastructure</div>
            <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">What We Provide</h2>
            <p class="mt-3 text-slate-600 text-sm leading-relaxed">
              Every plot at Arua SEZ comes backed by core infrastructure designed for industrial-scale operations.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article
              v-for="(pillar, i) in pillars"
              :key="pillar.title"
              class="group flex flex-col rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-[#D00004]/40 transition-all duration-300"
            >
              <!-- Real Photo -->
              <div class="relative h-56 sm:h-64 overflow-hidden bg-slate-900">
                <img
                  :src="pillar.image"
                  :alt="pillar.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none"></div>
                <div class="absolute top-4 left-4 px-3 py-1 rounded-md bg-[#0B0F19]/85 backdrop-blur text-white text-[11px] font-bold uppercase tracking-wider">
                  Phase {{ String(i + 1).padStart(2, '0') }}
                </div>
              </div>

              <!-- Body -->
              <div class="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 class="font-heading font-extrabold text-xl text-slate-900 mb-2">{{ pillar.title }}</h3>
                  <p class="text-slate-600 text-sm leading-relaxed mb-6">{{ pillar.description }}</p>
                </div>

                <ul class="pt-5 border-t border-gray-100 space-y-2.5">
                  <li v-for="pt in pillar.points" :key="pt" class="flex items-start gap-3 text-sm text-slate-700">
                    <span class="mt-2 w-1.5 h-1.5 rounded-full bg-[#D00004] flex-shrink-0"></span>
                    <span>{{ pt }}</span>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Site Inspection & Development Showcase -->
      <section class="py-16 bg-[#F8FAFC] border-t border-gray-200">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-5 space-y-4">
              <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase">Site Readiness</div>
              <h3 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 leading-tight">
                Ongoing Field Work &amp; Demarcation
              </h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                Our site development team actively coordinates boundary surveys, road clearance, and civil engineering inspections to maintain ready-to-allocate acreage.
              </p>
              <div class="pt-2">
                <RouterLink to="/get-started" class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#D00004] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B30003] transition-colors">
                  <span>Schedule Site Inspection</span>
                  <span>→</span>
                </RouterLink>
              </div>
            </div>

            <div class="lg:col-span-7 grid grid-cols-2 gap-4">
              <div class="rounded-xl overflow-hidden shadow-md border border-gray-200 h-48 sm:h-56 bg-slate-900 group">
                <img src="/images/aruasez (2).jpeg" alt="Site Inspection" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div class="rounded-xl overflow-hidden shadow-md border border-gray-200 h-48 sm:h-56 bg-slate-900 group">
                <img src="/images/aruasez (6).jpeg" alt="Civil Construction Progress" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-14 bg-[#0B0F19]">
        <div class="max-w-3xl mx-auto text-center px-4">
          <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-4">Secure Your Plot at Arua SEZ</h2>
          <p class="text-slate-400 text-sm mb-8 leading-relaxed">
            Limited serviced plots are available. Talk to our investment team today about sizing, lease terms, and infrastructure specifications.
          </p>
          <div class="flex flex-col sm:flex-row gap-3 justify-center">
            <RouterLink to="/get-started" class="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-[#D00004] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B30003] transition-colors">Get Started Now</RouterLink>
            <RouterLink to="/contact" class="inline-flex items-center justify-center px-7 py-3 rounded-lg border border-slate-600 text-slate-300 text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors">Contact Us</RouterLink>
          </div>
        </div>
      </section>
    </main>

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

const pillars = [
  {
    title: 'Serviced Industrial Plots',
    description: 'Demarcated, surveyed, and fully serviced plots ranging from 0.5 to 5+ acres — ready for immediate construction and industrial use with no clearing or utility installation delays.',
    image: '/images/aruasez (1).jpeg',
    points: plots,
  },
  {
    title: 'Reliable Power & Water Access',
    description: 'Dedicated power connections from the national grid, supported by backup generation. Industrial-grade water supply and wastewater management systems ensure uninterrupted operations.',
    image: '/images/aruasez (5).jpeg',
    points: power,
  },
  {
    title: 'Logistics & Warehousing Facilities',
    description: 'Shared and dedicated warehousing infrastructure, internal haul roads, and loading bays built to handle high-volume goods movement for processing, distribution, and export.',
    image: '/images/aruasez (13).jpeg',
    points: logistics,
  },
  {
    title: 'Secure Perimeter & Customs Support',
    description: 'A fully fenced and monitored zone perimeter with 24/7 security. An on-site Uganda Revenue Authority (URA) customs office enables fast, streamlined import and export clearance for all tenants.',
    image: '/images/aruasez (20).jpeg',
    points: security,
  },
]
</script>
