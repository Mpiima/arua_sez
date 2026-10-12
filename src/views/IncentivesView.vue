<template>
  <div class="min-h-screen flex flex-col bg-white font-sans text-slate-800">
    <AppHeader />

    <main class="flex-grow">
      <!-- Hero -->
      <section class="bg-[#0B0F19] py-20 border-b-4 border-[#D00004]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl">
            <div class="text-xs font-extrabold tracking-widest text-[#F59E0B] uppercase mb-3">The 19-Point Framework</div>
            <h1 class="font-heading font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-4">
              Infrastructure &amp; <span class="text-[#F59E0B]">Investor Incentives</span>
            </h1>
            <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
              Arua SEZ provides a highly competitive, investor-friendly environment. Our statutory 19-point framework combines decisive fiscal exemptions, world-class physical infrastructure, and a complete social ecosystem.
            </p>
          </div>
        </div>
      </section>

      <!-- Live, Work, Produce with Real Photography -->
      <section class="py-16 bg-white border-b border-gray-200">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-2xl mb-10">
            <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">Competitive Benchmark</div>
            <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 leading-tight mb-3">
              A "Live, Work, &amp; Produce" Ecosystem
            </h2>
            <p class="text-slate-600 text-sm leading-relaxed">
              Drawing inspiration from successful models like Tatu City in Kenya, Arua SEZ is a comprehensive ecosystem adapted to the West Nile and cross-border trade context, seamlessly integrating industrial zones, residential areas, and critical social infrastructure.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              v-for="card in ecosystemCards"
              :key="card.title"
              class="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div class="relative h-48 overflow-hidden bg-slate-900">
                <img
                  :src="card.image"
                  :alt="card.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>
                <div class="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-[#D00004] text-white text-[11px] font-bold uppercase tracking-wider">
                  {{ card.title }}
                </div>
              </div>
              <div class="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 class="font-heading font-bold text-base text-slate-900 mb-1">{{ card.subtitle }}</h4>
                  <p class="text-xs text-slate-600 leading-relaxed">{{ card.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 19-Point Framework -->
      <section class="py-20 bg-[#F8FAFC]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-2xl mb-12">
            <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">The Framework</div>
            <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mb-3">The 19-Point Offer Framework</h2>
            <p class="text-slate-600 text-sm leading-relaxed">
              A structured breakdown of the physical, operational, and strategic advantages guaranteed to investors within the Arua Special Economic Zone.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article
              v-for="cat in categories"
              :key="cat.title"
              class="flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
            >
              <div class="h-1 bg-[#D00004]"></div>
              <div class="p-7 flex-grow">
                <h3 class="font-heading font-extrabold text-lg text-slate-900 mb-5">{{ cat.title }}</h3>
                <ul class="space-y-3.5">
                  <li v-for="pt in cat.points" :key="pt.n" class="flex items-start gap-3">
                    <span class="flex-shrink-0 w-6 h-6 rounded-full bg-red-50 text-[#D00004] flex items-center justify-center text-xs font-bold">{{ pt.n }}</span>
                    <span class="text-sm text-slate-700 leading-snug pt-0.5">{{ pt.text }}</span>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Visual Showcase of On-Ground Infrastructure -->
      <section class="py-16 bg-white border-t border-gray-200">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-2xl mb-8">
            <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">On-Site Assets</div>
            <h3 class="font-heading font-extrabold text-2xl text-slate-900">Infrastructure in Place</h3>
            <p class="text-slate-600 text-sm mt-1">Direct photographic records of serviced land, internal corridors, and facilities ready for occupancy.</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div v-for="item in assetPhotos" :key="item.src" class="group bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm flex flex-col">
              <div class="relative h-48 overflow-hidden bg-slate-900">
                <img :src="item.src" :alt="item.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div class="p-4 flex-1">
                <h4 class="font-heading font-bold text-sm text-slate-900 mb-1">{{ item.title }}</h4>
                <p class="text-xs text-slate-500 leading-relaxed">{{ item.subtitle }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Fiscal Highlights -->
      <section class="py-20 bg-[#F8FAFC] border-t border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-2xl mb-12">
            <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">Statutory Fiscal Framework</div>
            <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">Unmatched Tax &amp; Capital Freedom</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="m in fiscal" :key="m.title" class="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
              <div class="font-heading font-extrabold text-4xl text-[#D00004] mb-2">{{ m.value }}</div>
              <h4 class="font-bold text-base text-slate-900 mb-2">{{ m.title }}</h4>
              <p class="text-sm text-slate-600 leading-relaxed">{{ m.text }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-14 bg-[#0B0F19]">
        <div class="max-w-3xl mx-auto text-center px-4">
          <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-4">Ready to Accelerate Your Industrial Venture?</h2>
          <p class="text-slate-400 text-sm mb-8 leading-relaxed">
            Contact the Arua SEZ Development Office today to schedule a confidential briefing, obtain plot specifications, and discuss tailored fiscal facilitation.
          </p>
          <div class="flex flex-col sm:flex-row gap-3 justify-center">
            <RouterLink to="/contact" class="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-[#D00004] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B30003] transition-colors">Apply for Incentives &amp; Plots</RouterLink>
            <RouterLink to="/sectors" class="inline-flex items-center justify-center px-7 py-3 rounded-lg border border-slate-600 text-slate-300 text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors">Explore Priority Sectors</RouterLink>
          </div>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

const ecosystemCards = [
  {
    title: 'Work',
    subtitle: 'Industrial & Manufacturing',
    description: 'Designated plots for light and heavy fabrication, assembly lines, and high-intensity production.',
    image: '/images/aruasez (9).jpeg',
  },
  {
    title: 'Produce',
    subtitle: 'Agro & Value Addition',
    description: 'Grain processing, commercial oils, and beverage facilities converting raw materials locally.',
    image: '/images/aruasez (26).jpeg',
  },
  {
    title: 'Live',
    subtitle: 'Integrated Community',
    description: 'Staff housing, executive accommodations, secure urban zoning, and recreational amenities.',
    image: '/images/aruasez (2).jpeg',
  },
]

const assetPhotos = [
  {
    src: '/images/aruasez (1).jpeg',
    title: 'Serviced Plots',
    subtitle: 'Graded and surveyed acreage with paved road demarcation.',
  },
  {
    src: '/images/aruasez (10).jpeg',
    title: 'Cross-Border Logistics',
    subtitle: 'Direct freight handling for DRC and South Sudan distribution.',
  },
  {
    src: '/images/aruasez (13).jpeg',
    title: 'Transit Warehousing',
    subtitle: 'Dedicated storage space for raw inputs and finished goods.',
  },
]

const categories = [
  {
    title: 'Physical & Utility Infrastructure',
    points: [
      { n: 1, text: 'Serviced industrial land for development' },
      { n: 2, text: 'Reliable water supply with backup boreholes' },
      { n: 3, text: 'Power availability with emphasis on solar/green energy' },
      { n: 4, text: 'Internal road network within the zone' },
    ],
  },
  {
    title: 'Business & Operational Advantages',
    points: [
      { n: 5, text: 'Competitive labour costs' },
      { n: 6, text: 'Government support for ease of doing business' },
      { n: 7, text: 'Tax incentives and SEZ rebates (Uganda SEZ framework)' },
      { n: 8, text: 'Fast-tracked licensing and approvals' },
    ],
  },
  {
    title: 'Strategic Location Benefits',
    points: [
      { n: 9, text: 'Close proximity to DR Congo and South Sudan borders' },
      { n: 10, text: 'Emerging one-stop border systems (similar to Malaba model)' },
      { n: 11, text: 'Reduced customs and logistics delays' },
    ],
  },
  {
    title: 'Social & Ecosystem Advantages',
    points: [
      { n: 12, text: 'Access to quality schools within a 10 km radius' },
      { n: 13, text: 'Safe and growing urban environment in Arua City' },
      { n: 14, text: 'Availability of skilled and semi-skilled labour' },
    ],
  },
  {
    title: 'Cross-Border Expansion Capability',
    points: [
      { n: 15, text: 'Access to cooperative enterprise zones in Congo' },
      { n: 16, text: 'Storage and distribution linkages across borders' },
      { n: 17, text: 'Regional trade facilitation networks' },
    ],
  },
  {
    title: 'Agricultural & Financial Ecosystem',
    points: [
      { n: 18, text: 'Abundant agricultural raw materials in the region' },
      { n: 19, text: 'Strong access to agro-processing financing and development funding' },
    ],
  },
]

const fiscal = [
  { value: '10 Yrs', title: 'Corporate Tax Holiday', text: 'Complete exemption from corporate income tax for enterprises exporting 80%+ outside the EAC.' },
  { value: '0%', title: 'Import Duty & VAT', text: 'Duty-free and VAT-exempt importation of industrial equipment, plants, and specialized machinery.' },
  { value: '100%', title: 'Capital Repatriation', text: 'Freely repatriate 100% of net profits, dividends, and principal loan repayments without exchange barriers.' },
  { value: 'WHT', title: 'Withholding Tax Relief', text: 'Concessional withholding tax rates on interest payments for foreign loans and management fees.' },
]
</script>
