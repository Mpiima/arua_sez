<template>
  <div class="min-h-screen flex flex-col bg-white font-sans text-slate-800">
    <AppHeader />

    <main class="flex-grow">
      <!-- Hero with Side-by-Side Split: 100% Clear & Bright Photo -->
      <section class="bg-[#0B0F19] py-14 sm:py-20 border-b-4 border-[#D00004]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            <!-- Left: Clear Text & Actions -->
            <div class="lg:col-span-6 space-y-5">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-wider uppercase text-amber-300">
                <span>Jobs &amp; Careers</span>
              </div>
              <h1 class="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                Career Opportunities at Arua SEZ
              </h1>
              <p class="text-base sm:text-lg text-slate-300 leading-relaxed">
                Join our dedicated team driving industrial transformation, modern infrastructure, and cross-border trade in West Nile and the Great Lakes region.
              </p>
              <div class="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#openings"
                  class="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#D00004] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B30003] transition-colors"
                >
                  View Openings
                </a>
                <a
                  href="mailto:info@aruasez.com?subject=Unsolicited CV Submission"
                  class="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-600 text-slate-200 text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors"
                >
                  Submit Your CV
                </a>
              </div>
            </div>

            <!-- Right: Unobstructed, Bright Real Team Photograph -->
            <div class="lg:col-span-6">
              <div class="rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-700 bg-slate-900 group">
                <img
                  src="/images/aruasez (22).jpeg"
                  alt="Arua SEZ Leadership and Operational Team"
                  class="w-full h-[320px] sm:h-[420px] object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
                <div class="p-4 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <div class="text-xs font-bold text-white">Arua SEZ On-Ground Team</div>
                    <div class="text-[11px] text-slate-400">Strategic management &amp; site execution staff</div>
                  </div>
                  <span class="text-[10px] font-extrabold uppercase tracking-widest text-[#F59E0B] bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                    Arua SEZ
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- Why Join Us -->
      <section class="py-16 bg-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-2xl mb-12">
            <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">Work at Arua SEZ</div>
            <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">Why Build Your Career Here</h2>
            <p class="mt-3 text-slate-600 text-sm leading-relaxed">
              Be part of Uganda's premier special economic zone — creating sustainable employment, strengthening value chains, and connecting regional enterprises to global markets.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div
              v-for="(perk, i) in perks"
              :key="perk.title"
              class="p-7 rounded-xl border border-gray-200 bg-white hover:border-[#D00004]/30 hover:shadow-md transition-all flex flex-col"
            >
              <div class="text-xs font-extrabold tracking-widest text-[#D00004] mb-3">{{ String(i + 1).padStart(2, '0') }}</div>
              <h3 class="font-heading font-bold text-lg text-slate-900 mb-2">{{ perk.title }}</h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">{{ perk.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Real Team & Operations Showcase (Clear, High-Res Photos) -->
      <section class="py-16 bg-[#F8FAFC] border-y border-gray-200">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-2xl mb-8">
            <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">Life at Arua SEZ</div>
            <h3 class="font-heading font-extrabold text-2xl text-slate-900">Our Team in Action</h3>
            <p class="text-slate-600 text-sm mt-1">
              Field surveys, stakeholder engagement, technical planning, and community development across the zone.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div
              v-for="item in teamPhotos"
              :key="item.src"
              class="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              <!-- Unobstructed Bright Image -->
              <div class="relative h-60 sm:h-64 overflow-hidden bg-slate-100">
                <img
                  :src="item.src"
                  :alt="item.title"
                  class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div class="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 class="font-heading font-bold text-base text-slate-900 mb-1">{{ item.title }}</h4>
                  <p class="text-xs text-slate-600 leading-relaxed">{{ item.subtitle }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Open Positions Anchor -->
      <section id="openings" class="py-16 bg-white scroll-mt-20">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="mb-8">
            <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-1">Current Openings</div>
            <h2 class="font-heading font-extrabold text-2xl text-slate-900">Open Positions</h2>
          </div>

          <!-- Clean Notice Box -->
          <div class="bg-[#F8FAFC] rounded-2xl border border-gray-200 py-14 px-6 text-center">
            <h3 class="font-heading font-bold text-lg text-slate-800 mb-2">No Vacancies Currently Available</h3>
            <p class="text-slate-500 text-sm max-w-md mx-auto leading-relaxed mb-6">
              There are no active postings at this time. However, our operations are scaling rapidly across engineering, administration, logistics, and planning.
            </p>
            <div class="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:info@aruasez.com?subject=Unsolicited CV Submission"
                class="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#D00004] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B30003] transition-colors"
              >
                Submit Your CV
              </a>
              <RouterLink
                to="/contact"
                class="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 text-slate-700 text-xs font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors"
              >
                Contact HR Office
              </RouterLink>
            </div>
          </div>

          <!-- Alert Notification Strip -->
          <div class="mt-8 p-6 rounded-xl bg-[#0B0F19] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div class="font-heading font-bold text-base mb-1">Stay Notified for Future Openings</div>
              <p class="text-slate-400 text-xs">Reach out directly to receive email notifications when new job postings go live.</p>
            </div>
            <a
              href="mailto:info@aruasez.com?subject=Subscribe to Job Alerts"
              class="flex-shrink-0 inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-[#F59E0B] text-slate-950 hover:bg-amber-400 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Subscribe to Alerts
            </a>
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

const perks = [
  {
    title: 'Impact-Driven Mission',
    desc: 'Contribute directly to sustainable industrialisation, economic transformation, and dignified job creation in West Nile.',
  },
  {
    title: 'Professional Growth',
    desc: 'Collaborate with multidisciplinary engineering, trade, and governance professionals on large-scale infrastructure projects.',
  },
  {
    title: 'Competitive Packages',
    desc: 'Fair remuneration, clear career pathways, and an inclusive work environment aligned with international standards.',
  },
]

const teamPhotos = [
  {
    src: '/images/aruasez (4).jpeg',
    title: 'Strategy & Governance',
    subtitle: 'Cross-functional alignment with regional leadership and stakeholders.',
  },
  {
    src: '/images/aruasez (15).jpeg',
    title: 'Operations & Engineering',
    subtitle: 'Field team driving on-site infrastructure and survey activities.',
  },
  {
    src: '/images/aruasez (7).jpeg',
    title: 'Community Engagement',
    subtitle: 'Connecting local talent and youth groups with zone opportunities.',
  },
]
</script>
