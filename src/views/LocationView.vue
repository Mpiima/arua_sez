<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />

    <!-- Hero -->
    <section class="relative bg-[#0B0F19] py-24 overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <svg class="w-full h-full" viewBox="0 0 800 400" fill="none"><circle cx="700" cy="50" r="250" fill="#D00004"/><circle cx="100" cy="350" r="180" fill="#F59E0B"/></svg>
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-xs font-extrabold tracking-widest text-[#F59E0B] uppercase mb-3">Our Offers</div>
        <h1 class="font-heading font-extrabold text-4xl sm:text-6xl text-white leading-tight mb-4">Strategic Location</h1>
        <p class="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">Arua SEZ sits at the crossroads of four nations — putting your business within reach of over <strong class="text-white">100 million consumers</strong> in one of Africa's fastest-growing frontier markets.</p>
      </div>
    </section>

    <!-- Key Stats -->
    <section class="py-12 bg-[#D00004]">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white">
          <div v-for="s in stats" :key="s.label">
            <div class="font-heading font-extrabold text-3xl sm:text-4xl">{{ s.value }}</div>
            <div class="text-xs font-semibold uppercase tracking-wider mt-1 text-red-100">{{ s.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Detail Sections -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <div v-for="(block, i) in blocks" :key="block.title" class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center" :class="i % 2 === 1 ? 'lg:flex-row-reverse' : ''">
          <div :class="i % 2 === 1 ? 'lg:order-2' : ''">
            <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">{{ block.tag }}</div>
            <h2 class="font-heading font-extrabold text-2xl text-slate-900 mb-3">{{ block.title }}</h2>
            <p class="text-slate-500 text-sm leading-relaxed">{{ block.body }}</p>
          </div>
          <div :class="i % 2 === 1 ? 'lg:order-1' : ''" class="rounded-2xl overflow-hidden bg-[#F8FAFC] p-8 border border-gray-100">
            <div class="space-y-3">
              <div v-for="pt in block.points" :key="pt" class="flex items-start gap-3">
                <div class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">✓</div>
                <span class="text-sm text-slate-700">{{ pt }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-14 bg-[#F8FAFC]">
      <div class="max-w-3xl mx-auto text-center px-4">
        <h2 class="font-heading font-extrabold text-2xl text-slate-900 mb-3">Ready to Invest in This Location?</h2>
        <p class="text-slate-500 text-sm mb-8">Talk to our investment team about securing your plot at Arua SEZ today.</p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <RouterLink to="/get-started" class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#D00004] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B30003] transition-colors">Get Started Now →</RouterLink>
          <RouterLink to="/contact" class="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-200 text-slate-700 text-xs font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors">Contact Us</RouterLink>
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

const stats = [
  { value: '100M+', label: 'Consumers in Reach' },
  { value: '4', label: 'Countries Bordering' },
  { value: '20%', label: 'Lower Logistics Cost' },
  { value: '100km', label: 'Corridor Radius' },
]

const blocks = [
  {
    tag: 'Geographic Advantage',
    title: 'At the Heart of the Great Lakes',
    body: 'Arua City, West Nile sits at the convergence of Uganda, Democratic Republic of Congo, South Sudan, and the Central African Republic — making it a natural hub for regional trade and manufacturing.',
    points: [
      'Direct road access to Eastern DRC and South Sudan',
      'Proximity to Entebbe International Airport via Arua Airport',
      'Connection to the Northern Corridor trade route',
      'Fastest route to 100M+ consumers in the sub-region',
    ],
  },
  {
    tag: 'Logistics Edge',
    title: '20% Lower Logistics Costs',
    body: 'Goods manufactured at Arua SEZ reach regional markets at significantly lower logistics costs than those shipped from Nairobi, Mombasa, or even Kampala — giving our investors a decisive competitive advantage.',
    points: [
      'No transit through congested Kampala corridor',
      'Direct cross-border export routes to DRC & South Sudan',
      'Local sourcing reduces import dependency',
      'Zone-bonded customs reduces delays at border posts',
    ],
  },
]
</script>
