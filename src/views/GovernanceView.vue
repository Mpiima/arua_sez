<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />

    <!-- Hero -->
    <section class="relative h-72 sm:h-96 overflow-hidden">
      <img src="/images/governance_hero.jpg" alt="Board of Directors" class="absolute inset-0 w-full h-full object-cover object-center" />
      <div class="absolute inset-0 bg-gradient-to-r from-[#0B0F19]/85 via-[#0B0F19]/50 to-transparent"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12">
        <div class="text-xs font-extrabold tracking-widest text-[#F59E0B] uppercase mb-2">About Us</div>
        <h1 class="font-heading font-extrabold text-3xl sm:text-5xl text-white leading-tight">Governance</h1>
        <p class="mt-2 text-sm sm:text-base text-slate-300 max-w-lg">Guided by integrity, accountability, and a shared vision for Uganda's industrial future.</p>
      </div>
    </section>

    <!-- Governance Overview -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">Our Structure</div>
            <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mb-4">Leadership & Governance</h2>
            <p class="text-slate-500 text-sm leading-relaxed mb-4">
              Arua SEZ operates under a robust governance framework that ensures transparency, accountability, and strategic alignment with Uganda's national development goals.
            </p>
            <p class="text-slate-500 text-sm leading-relaxed mb-4">
              The Board of Directors provides strategic oversight to the management team, ensuring that Arua SEZ delivers on its mandate as a catalyst for industrial development and regional trade across the Great Lakes Region.
            </p>
            <p class="text-slate-500 text-sm leading-relaxed">
              The zone operates in compliance with the Uganda Free Zones Act and is supervised by the Uganda Free Zones and Export Promotions Authority (UFZEPA).
            </p>
          </div>
          <div class="space-y-4">
            <div v-for="pillar in pillars" :key="pillar.title" class="flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-[#F8FAFC]">
              <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" :class="pillar.iconBg" v-html="pillar.icon"></div>
              <div>
                <div class="font-heading font-bold text-slate-800 text-sm">{{ pillar.title }}</div>
                <div class="text-xs text-slate-500 mt-0.5 leading-relaxed">{{ pillar.desc }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Board of Directors -->
    <section class="py-16 bg-[#F8FAFC]">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">Leadership</div>
          <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">Board of Directors</h2>
          <p class="mt-3 text-slate-500 text-sm max-w-xl mx-auto">Our board comprises distinguished leaders from industry, government, and civil society committed to the growth of Arua SEZ.</p>
        </div>

        <!-- Coming Soon State -->
        <div class="bg-white rounded-2xl border border-dashed border-gray-200 py-16 px-6 text-center">
          <div class="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <h3 class="font-heading font-bold text-slate-700 mb-2">Board Profiles Coming Soon</h3>
          <p class="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">Individual board member profiles and governance documents will be published here shortly.</p>
          <div class="mt-6">
            <RouterLink to="/about" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 text-slate-700 text-xs font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors">
              Learn About Arua SEZ
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Compliance Banner -->
    <section class="py-10 bg-[#0B0F19]">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="text-xs font-extrabold tracking-widest text-[#F59E0B] uppercase mb-2">Regulatory Compliance</div>
        <p class="text-slate-300 text-sm leading-relaxed">Arua SEZ operates under the Uganda Free Zones Act and is regulated by <span class="text-white font-semibold">UFZEPA</span> — Uganda Free Zones and Export Promotions Authority.</p>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import { RouterLink } from 'vue-router'

const pillars = [
  {
    title: 'Transparency',
    desc: 'All decisions and financial reports are made available to relevant stakeholders and the public.',
    iconBg: 'bg-amber-50 text-amber-600',
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>',
  },
  {
    title: 'Accountability',
    desc: 'The Board is accountable to the Government of Uganda, investors, and the communities of West Nile.',
    iconBg: 'bg-emerald-50 text-emerald-600',
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
  },
  {
    title: 'Strategic Oversight',
    desc: 'The Board sets policy direction, approves plans, and monitors performance against national objectives.',
    iconBg: 'bg-indigo-50 text-indigo-600',
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>',
  },
]
</script>
