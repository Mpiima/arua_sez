<template>
  <div class="min-h-screen flex flex-col bg-white font-sans text-slate-800">
    <AppHeader />

    <main class="flex-grow">
      <!-- Hero -->
      <section class="bg-[#0B0F19] py-20 border-b-4 border-[#D00004]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl">
            <div class="text-xs font-extrabold tracking-widest text-[#F59E0B] uppercase mb-3">Our Offers</div>
            <h1 class="font-heading font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-4">Workforce Development</h1>
            <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
              Building a skilled, motivated local workforce that powers Arua SEZ — and delivers competitive advantage to every investor in the zone.
            </p>
          </div>
        </div>
      </section>

      <!-- Stats -->
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

      <!-- 3 Pillars with Real Photographs (Alternating Layout) -->
      <section class="py-20 bg-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-2xl mb-16">
            <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">Workforce Strategy</div>
            <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">Our Approach to Building Talent</h2>
            <p class="mt-3 text-slate-600 text-sm leading-relaxed">
              Arua SEZ connects investors with a structured, growing pool of local talent through three key workforce development pillars.
            </p>
          </div>

          <div class="space-y-16">
            <article
              v-for="(pillar, i) in pillars"
              :key="pillar.title"
              class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              <!-- Content -->
              <div :class="i % 2 === 1 ? 'lg:col-span-6 lg:order-2' : 'lg:col-span-6'">
                <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">Pillar {{ String(i + 1).padStart(2, '0') }}</div>
                <h3 class="font-heading font-extrabold text-2xl text-slate-900 mb-3 leading-tight">{{ pillar.title }}</h3>
                <p class="text-slate-600 text-sm leading-relaxed mb-6">{{ pillar.description }}</p>

                <ul class="rounded-xl border border-gray-200 bg-[#F8FAFC] divide-y divide-gray-200">
                  <li v-for="pt in pillar.points" :key="pt" class="flex items-start gap-3 px-5 py-3.5 text-sm text-slate-700">
                    <span class="mt-2 w-1.5 h-1.5 rounded-full bg-[#D00004] flex-shrink-0"></span>
                    <span>{{ pt }}</span>
                  </li>
                </ul>
              </div>

              <!-- Image -->
              <div :class="i % 2 === 1 ? 'lg:col-span-6 lg:order-1' : 'lg:col-span-6'">
                <div class="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-slate-900 group">
                  <img
                    :src="pillar.image"
                    :alt="pillar.title"
                    class="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>
                  <div class="absolute bottom-4 left-4 right-4 text-white">
                    <span class="text-[11px] font-extrabold tracking-wider uppercase bg-[#D00004] px-2.5 py-1 rounded text-white inline-block mb-1.5">
                      {{ pillar.tag }}
                    </span>
                    <div class="text-xs font-medium text-slate-200">{{ pillar.caption }}</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Leadership & Capacity Coordination Section -->
      <section class="py-16 bg-[#F8FAFC] border-t border-gray-200">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-7">
              <div class="rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-slate-900 h-64 sm:h-80 group">
                <img
                  src="/images/aruasez (22).jpeg"
                  alt="Arua SEZ Leadership Team and Advisory"
                  class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div class="lg:col-span-5 space-y-4">
              <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase">Operations &amp; Governance</div>
              <h3 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 leading-tight">
                Dedicated Zone Management Team
              </h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                Our management team acts as an on-the-ground liaison between tenant human resource managers, vocational training institutions, and local administrative offices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-14 bg-[#0B0F19]">
        <div class="max-w-3xl mx-auto text-center px-4">
          <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-4">Tell Us Your Workforce Requirements</h2>
          <p class="text-slate-400 text-sm mb-8 leading-relaxed">
            Our team will match you with the right talent pipeline and training support available through Arua SEZ's network of partners.
          </p>
          <div class="flex flex-col sm:flex-row gap-3 justify-center">
            <RouterLink to="/get-started" class="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-[#D00004] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B30003] transition-colors">Get Started</RouterLink>
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

const pillars = [
  {
    title: 'Local Employment Pipelines',
    description: 'Arua SEZ actively partners with local government, community leaders, and employment agencies to build structured pipelines of vetted, work-ready candidates from the West Nile region — reducing recruitment time and cost for zone investors.',
    image: '/images/aruasez (7).jpeg',
    tag: 'Community Integration',
    caption: 'Direct outreach programs engaging regional youth and job seekers.',
    points: employment,
  },
  {
    title: 'Technical Skills Partnerships',
    description: 'Through formal agreements with vocational training institutes, BTVET centres, and universities in the region, Arua SEZ facilitates technical skills training aligned directly to the needs of zone industries — from machine operation to quality control and logistics management.',
    image: '/images/aruasez (15).jpeg',
    tag: 'Technical Accreditation',
    caption: 'Co-designing operational skills with accredited technical schools.',
    points: technical,
  },
  {
    title: 'Youth Enterprise Incubation',
    description: 'Arua SEZ supports a youth enterprise incubation programme that empowers young entrepreneurs from West Nile to develop agro-processing and trade businesses — creating a supplier and service ecosystem that directly benefits zone investors.',
    image: '/images/aruasez (4).jpeg',
    tag: 'Enterprise Support',
    caption: 'Building upstream supplier cooperatives for zone industries.',
    points: youth,
  },
]
</script>
