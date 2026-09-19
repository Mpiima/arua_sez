<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />

    <!-- Hero -->
    <section class="relative h-72 sm:h-96 overflow-hidden">
      <img src="/images/vacancies_hero.jpg" alt="Workforce Development at Arua SEZ" class="absolute inset-0 w-full h-full object-cover object-center" />
      <div class="absolute inset-0 bg-gradient-to-r from-[#0B0F19]/90 via-[#0B0F19]/60 to-transparent"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12">
        <div class="text-xs font-extrabold tracking-widest text-[#F59E0B] uppercase mb-2">Our Offers</div>
        <h1 class="font-heading font-extrabold text-3xl sm:text-5xl text-white leading-tight">Workforce Development</h1>
        <p class="mt-3 text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
          Building a skilled, motivated local workforce that powers Arua SEZ — and delivers competitive advantage to every investor in the zone.
        </p>
      </div>
    </section>

    <!-- Intro stat bar -->
    <section class="bg-[#D00004] py-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white">
          <div v-for="s in stats" :key="s.label">
            <div class="font-heading font-extrabold text-3xl">{{ s.value }}</div>
            <div class="text-xs font-semibold uppercase tracking-wider mt-1 text-red-100">{{ s.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3 Content Pillars -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">Workforce Strategy</div>
          <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">Our Approach to Building Talent</h2>
          <p class="mt-3 text-slate-500 text-sm max-w-xl mx-auto leading-relaxed">
            Arua SEZ connects investors with a structured, growing pool of local talent through three key workforce development pillars.
          </p>
        </div>

        <div class="space-y-10">

          <!-- Pillar 1: Local Employment Pipelines -->
          <div class="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div class="bg-[#0B0F19] p-10 flex flex-col justify-center">
              <div class="w-14 h-14 rounded-2xl bg-[#D00004]/20 border border-[#D00004]/30 flex items-center justify-center mb-5">
                <svg class="w-7 h-7 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div class="text-xs font-extrabold tracking-widest text-[#F59E0B] uppercase mb-2">Pillar 01</div>
              <h3 class="font-heading font-extrabold text-xl text-white leading-tight">Local Employment Pipelines</h3>
            </div>
            <div class="bg-[#F8FAFC] p-10 flex flex-col justify-center">
              <p class="text-slate-600 text-sm leading-relaxed mb-5">
                Arua SEZ actively partners with local government, community leaders, and employment agencies to build structured pipelines of vetted, work-ready candidates from the West Nile region — reducing recruitment time and cost for zone investors.
              </p>
              <ul class="space-y-2.5">
                <li v-for="pt in employment" :key="pt" class="flex items-start gap-3 text-sm text-slate-700">
                  <span class="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {{ pt }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Pillar 2: Technical Skills Partnerships -->
          <div class="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div class="bg-[#F8FAFC] p-10 flex flex-col justify-center lg:order-2">
              <p class="text-slate-600 text-sm leading-relaxed mb-5">
                Through formal agreements with vocational training institutes, BTVET centres, and universities in the region, Arua SEZ facilitates technical skills training aligned directly to the needs of zone industries — from machine operation to quality control and logistics management.
              </p>
              <ul class="space-y-2.5">
                <li v-for="pt in technical" :key="pt" class="flex items-start gap-3 text-sm text-slate-700">
                  <span class="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {{ pt }}
                </li>
              </ul>
            </div>
            <div class="bg-[#0B0F19] p-10 flex flex-col justify-center lg:order-1">
              <div class="w-14 h-14 rounded-2xl bg-[#D00004]/20 border border-[#D00004]/30 flex items-center justify-center mb-5">
                <svg class="w-7 h-7 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <div class="text-xs font-extrabold tracking-widest text-[#F59E0B] uppercase mb-2">Pillar 02</div>
              <h3 class="font-heading font-extrabold text-xl text-white leading-tight">Technical Skills Partnerships</h3>
            </div>
          </div>

          <!-- Pillar 3: Youth Enterprise Incubation -->
          <div class="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div class="bg-[#0B0F19] p-10 flex flex-col justify-center">
              <div class="w-14 h-14 rounded-2xl bg-[#D00004]/20 border border-[#D00004]/30 flex items-center justify-center mb-5">
                <svg class="w-7 h-7 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <div class="text-xs font-extrabold tracking-widest text-[#F59E0B] uppercase mb-2">Pillar 03</div>
              <h3 class="font-heading font-extrabold text-xl text-white leading-tight">Youth Enterprise Incubation</h3>
            </div>
            <div class="bg-[#F8FAFC] p-10 flex flex-col justify-center">
              <p class="text-slate-600 text-sm leading-relaxed mb-5">
                Arua SEZ supports a youth enterprise incubation programme that empowers young entrepreneurs from West Nile to develop agro-processing and trade businesses — creating a supplier and service ecosystem that directly benefits zone investors.
              </p>
              <ul class="space-y-2.5">
                <li v-for="pt in youth" :key="pt" class="flex items-start gap-3 text-sm text-slate-700">
                  <span class="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {{ pt }}
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-14 bg-[#0B0F19]">
      <div class="max-w-3xl mx-auto text-center px-4">
        <div class="text-xs font-extrabold tracking-widest text-[#F59E0B] uppercase mb-3">Let's Talk</div>
        <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-4">Tell Us Your Workforce Requirements</h2>
        <p class="text-slate-400 text-sm mb-8 leading-relaxed">
          Our team will match you with the right talent pipeline and training support available through Arua SEZ's network of partners.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <RouterLink to="/get-started" class="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-[#D00004] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B30003] transition-colors">
            Get Started →
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

const stats = [
  { value: '60%', label: 'Population Under 30' },
  { value: '3+', label: 'Training Partners' },
  { value: 'English', label: 'Working Language' },
  { value: 'Local First', label: 'Hiring Policy' },
]

const employment = [
  'Pre-screened candidate pools from West Nile communities',
  'Coordination with district and city labour offices',
  'Gender-inclusive hiring — women and youth prioritised',
  'Reduced cost-of-hire for zone investors through structured referrals',
]

const technical = [
  'Partnerships with Arua Technical Institute and BTVET centres',
  'Curriculum co-designed with zone investors to match real skill needs',
  'On-the-job training schemes with government co-financing available',
  'Short-course certifications in machine operation, food processing & logistics',
]

const youth = [
  'Dedicated incubation space and mentorship within the zone',
  'Business development support for youth-led agro-enterprises',
  'Linkages to zone investors as suppliers, service providers, and contractors',
  'Access to youth enterprise financing schemes from partner institutions',
]
</script>
