<template>
  <div class="min-h-screen flex flex-col bg-white font-sans text-slate-800">
    <AppHeader />

    <main class="flex-grow">
      <!-- Hero -->
      <section class="bg-[#0B0F19] py-20 border-b-4 border-[#D00004]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl">
            <div class="text-xs font-extrabold tracking-widest text-[#F59E0B] uppercase mb-3">Our Offers</div>
            <h1 class="font-heading font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-4">Strategic Location</h1>
            <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
              Arua SEZ sits at the crossroads of four nations — putting your business within reach of over
              <strong class="text-white">100 million consumers</strong> in one of Africa's fastest-growing frontier markets.
            </p>
          </div>
        </div>
      </section>

      <!-- Key Stats -->
      <section class="bg-white border-b border-gray-200">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-200 text-center">
            <div v-for="s in stats" :key="s.label" class="py-8 px-4">
              <div class="font-heading font-extrabold text-3xl text-[#D00004]">{{ s.value }}</div>
              <div class="text-xs font-semibold uppercase tracking-wider mt-1 text-slate-500">{{ s.label }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Detail Sections with Real Photos -->
      <section class="py-16 bg-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div
            v-for="(block, i) in blocks"
            :key="block.title"
            class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            <!-- Content Column -->
            <div :class="i % 2 === 1 ? 'lg:col-span-6 lg:order-2' : 'lg:col-span-6'">
              <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">{{ block.tag }}</div>
              <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mb-3">{{ block.title }}</h2>
              <p class="text-slate-600 text-sm leading-relaxed mb-6">{{ block.body }}</p>

              <ul class="rounded-xl border border-gray-200 bg-[#F8FAFC] divide-y divide-gray-200">
                <li v-for="pt in block.points" :key="pt" class="flex items-start gap-3 px-5 py-3.5 text-sm text-slate-700">
                  <span class="mt-2 w-1.5 h-1.5 rounded-full bg-[#D00004] flex-shrink-0"></span>
                  <span>{{ pt }}</span>
                </li>
              </ul>
            </div>

            <!-- Image Column -->
            <div :class="i % 2 === 1 ? 'lg:col-span-6 lg:order-1' : 'lg:col-span-6'">
              <div class="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-slate-900 group">
                <img
                  :src="block.image"
                  :alt="block.title"
                  class="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>
                <div class="absolute bottom-4 left-4 right-4 text-white">
                  <span class="text-[11px] font-extrabold tracking-wider uppercase bg-[#D00004] px-2.5 py-1 rounded text-white inline-block mb-1.5">
                    {{ block.captionTag }}
                  </span>
                  <div class="text-xs font-medium text-slate-200">{{ block.caption }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- On-Site Corridor Highlights Strip -->
      <section class="py-14 bg-[#F8FAFC] border-t border-gray-200">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-2xl mb-8">
            <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">Regional Connectivity</div>
            <h3 class="font-heading font-extrabold text-2xl text-slate-900">Direct Border Corridors</h3>
            <p class="text-slate-600 text-sm mt-1">On-ground operations directly connected to key crossing routes into DRC and South Sudan.</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div v-for="photo in corridorPhotos" :key="photo.src" class="group bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm flex flex-col">
              <div class="relative h-48 overflow-hidden bg-slate-100">
                <img :src="photo.src" :alt="photo.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div class="p-4 flex-1">
                <h4 class="font-heading font-bold text-sm text-slate-900 mb-1">{{ photo.title }}</h4>
                <p class="text-xs text-slate-500 leading-relaxed">{{ photo.subtitle }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-14 bg-[#0B0F19]">
        <div class="max-w-3xl mx-auto text-center px-4">
          <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3">Ready to Invest in This Location?</h2>
          <p class="text-slate-400 text-sm mb-8 leading-relaxed">Talk to our investment team about securing your plot at Arua SEZ today.</p>
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
    image: '/images/aruasez (8).jpeg',
    captionTag: 'Strategic Position',
    caption: 'Direct gateway connecting West Nile to cross-border commercial routes.',
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
    image: '/images/aruasez (10).jpeg',
    captionTag: 'Transit Logistics',
    caption: 'Direct cross-border transit avoiding central corridor congestion.',
    points: [
      'No transit through congested Kampala corridor',
      'Direct cross-border export routes to DRC & South Sudan',
      'Local sourcing reduces import dependency',
      'Zone-bonded customs reduces delays at border posts',
    ],
  },
]

const corridorPhotos = [
  {
    src: '/images/aruasez (12).jpeg',
    title: 'Trade Network',
    subtitle: 'Connecting local manufacturers directly with cross-border wholesalers.',
  },
  {
    src: '/images/aruasez (1).jpeg',
    title: 'SEZ Land Development',
    subtitle: 'Strategically cleared and surveyed industrial acreage on site.',
  },
  {
    src: '/images/aruasez (13).jpeg',
    title: 'Transit & Warehousing',
    subtitle: 'Secure handling facilities for incoming cargo and bulk consignments.',
  },
]
</script>
