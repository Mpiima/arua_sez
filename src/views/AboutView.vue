<template>
  <div class="min-h-screen flex flex-col bg-white font-sans text-slate-800">
    <AppHeader />

    <main class="flex-grow">
      <!-- Page Banner Header -->
      <section class="relative py-20 bg-[#0B0F19] text-white overflow-hidden">
        <div class="absolute inset-0 z-0 opacity-20">
          <img src="/images/hero.jpg" alt="Arua SEZ Aerial" class="w-full h-full object-cover"/>
        </div>
        <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40 z-0"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-wider uppercase text-amber-300 mb-4">
              <span>About Arua SEZ</span>
            </div>
            <h1 class="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
              A Free Economic Zone for West Nile, Uganda
            </h1>
            <p class="text-base sm:text-lg text-slate-300 leading-relaxed">
              Unlocking Trade. Powering Industry. Creating Opportunity. A purpose-built industrial and commercial platform catalyzing regional integration and sustainable prosperity.
            </p>
          </div>
        </div>
      </section>

      <!-- Vision & Mission -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <!-- Vision -->
            <div class="rounded-3xl p-10 bg-[#0B0F19] text-white relative overflow-hidden shadow-xl border border-slate-800 flex flex-col justify-between">
              <div>
                <div class="w-12 h-12 rounded-xl bg-amber-500/15 text-[#F59E0B] flex items-center justify-center mb-6">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                </div>
                <div class="text-xs font-extrabold tracking-widest text-[#F59E0B] uppercase mb-3">OUR VISION</div>
                <h3 class="text-2xl font-black text-white mb-4 leading-snug">
                  Inclusive Prosperity &amp; Regional Integration
                </h3>
                <p class="text-base font-medium leading-relaxed text-slate-300">
                  "To establish West Nile as a competitive industrial and trade hub that drives inclusive prosperity and regional integration."
                </p>
              </div>
              <div class="mt-8 pt-6 border-t border-slate-800 text-xs text-slate-400">
                Strategic focus across Uganda, South Sudan, DRC, and CAR.
              </div>
            </div>

            <!-- Mission -->
            <div class="rounded-3xl p-10 bg-gradient-to-br from-[#D00004] to-[#990003] text-white relative overflow-hidden shadow-xl flex flex-col justify-between">
              <div>
                <div class="w-12 h-12 rounded-xl bg-white/20 text-white flex items-center justify-center mb-6">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
                </div>
                <div class="text-xs font-extrabold tracking-widest text-amber-200 uppercase mb-3">OUR MISSION</div>
                <h3 class="text-2xl font-black text-white mb-4 leading-snug">
                  World-Class Infrastructure &amp; Investor Efficiency
                </h3>
                <p class="text-base font-medium leading-relaxed text-white">
                  "To provide world-class infrastructure, investor incentives, and regulatory efficiency that attract responsible investment and create dignified employment for the people of West Nile."
                </p>
              </div>
              <div class="mt-8 pt-6 border-t border-red-400/30 text-xs text-red-100">
                Full alignment with the Uganda Investment Authority (UIA).
              </div>
            </div>
          </div>

          <!-- Why West Nile Section -->
          <div class="mb-20">
            <div class="text-center max-w-3xl mx-auto mb-14">
              <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">REGIONAL CONTEXT</div>
              <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                Why West Nile?
              </h2>
              <p class="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                West Nile is one of Uganda’s most strategically located regions. With direct proximity to multiple international borders and rapidly surging regional consumer demand, it presents untapped potential across five key dimensions:
              </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all">
                <div class="w-10 h-10 rounded-lg bg-amber-500/10 text-[#D17F00] flex items-center justify-center font-bold text-sm mb-4">01</div>
                <h4 class="font-heading font-bold text-base text-slate-900 mb-2">Agro-Processing &amp; Value Addition</h4>
                <p class="text-xs text-slate-600 leading-relaxed">Transforming raw agricultural commodities—groundnuts, rice, coffee, cassava, oilseeds, and shea butter—into packaged, refined consumer goods.</p>
              </div>

              <div class="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all">
                <div class="w-10 h-10 rounded-lg bg-red-500/10 text-[#D00004] flex items-center justify-center font-bold text-sm mb-4">02</div>
                <h4 class="font-heading font-bold text-base text-slate-900 mb-2">Cross-Border Trade &amp; Logistics</h4>
                <p class="text-xs text-slate-600 leading-relaxed">Serving as the primary trade gateway between Uganda, South Sudan, the Eastern Democratic Republic of Congo, and the Central African Republic.</p>
              </div>

              <div class="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all">
                <div class="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-sm mb-4">03</div>
                <h4 class="font-heading font-bold text-base text-slate-900 mb-2">Manufacturing &amp; Light Industry</h4>
                <p class="text-xs text-slate-600 leading-relaxed">Local production of ethanol, confectionery, soaps, steel construction lines, and building supplies that deliver products up to 20% cheaper than distant imports.</p>
              </div>

              <div class="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all">
                <div class="w-10 h-10 rounded-lg bg-amber-500/10 text-[#D17F00] flex items-center justify-center font-bold text-sm mb-4">04</div>
                <h4 class="font-heading font-bold text-base text-slate-900 mb-2">Renewable Energy Solutions</h4>
                <p class="text-xs text-slate-600 leading-relaxed">Harnessing abundant solar and clean power resources to assemble decentralized mini-grid equipment and ensure green industrial operations.</p>
              </div>

              <div class="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all">
                <div class="w-10 h-10 rounded-lg bg-red-500/10 text-[#D00004] flex items-center justify-center font-bold text-sm mb-4">05</div>
                <h4 class="font-heading font-bold text-base text-slate-900 mb-2">Youth Employment &amp; Skills</h4>
                <p class="text-xs text-slate-600 leading-relaxed">Unlocking regional human capital through structured vocational pipelines, technical partnerships, and youth entrepreneurship incubation.</p>
              </div>

              <div class="p-7 rounded-2xl bg-slate-900 text-white border border-slate-800 flex flex-col justify-between">
                <div>
                  <div class="text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">THE PLATFORM</div>
                  <h4 class="font-heading font-bold text-base text-white mb-2">Ready For Capital</h4>
                  <p class="text-xs text-slate-300 leading-relaxed">Arua SEZ exists to transform this regional potential into measurable, sustained economic growth.</p>
                </div>
                <RouterLink to="/sectors" class="text-xs font-bold text-[#F59E0B] hover:underline mt-4">Explore Core Sectors →</RouterLink>
              </div>
            </div>
          </div>

          <!-- Economic Impact & Governance -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#F8FAFC] rounded-3xl p-8 sm:p-12 border border-slate-200">
            <div class="lg:col-span-6 space-y-5">
              <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase">ECONOMIC IMPACT</div>
              <h3 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-snug">
                Projected Impact on West Nile &amp; the Region
              </h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                By serving as an anchor processing zone, Arua SEZ directly empowers the local and regional economy:
              </p>
              <ul class="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li class="flex items-center gap-2.5"><span class="text-[#D00004] font-black">✓</span> Generate thousands of direct and indirect jobs for youth and professionals.</li>
                <li class="flex items-center gap-2.5"><span class="text-[#D00004] font-black">✓</span> Increase export earnings from West Nile commodities and refined goods.</li>
                <li class="flex items-center gap-2.5"><span class="text-[#D00004] font-black">✓</span> Strengthen cross-border economic integration between Uganda, DRC, South Sudan, and CAR.</li>
                <li class="flex items-center gap-2.5"><span class="text-[#D00004] font-black">✓</span> Expand the local and national tax base sustainably.</li>
              </ul>
            </div>

            <div class="lg:col-span-6 bg-white rounded-2xl p-8 border border-slate-200 shadow-md space-y-4">
              <div class="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <h4 class="font-heading font-extrabold text-lg text-slate-900">Governance &amp; Accountability</h4>
              <p class="text-xs text-slate-600 leading-relaxed">
                Arua SEZ operates under transparent governance standards with active board oversight, independent audit structures, and strict compliance aligned with national regulatory frameworks and international best practices.
              </p>
              <div class="pt-2">
                <RouterLink to="/contact" class="inline-flex items-center gap-2 text-xs font-bold text-[#D00004] hover:text-[#B30003] uppercase tracking-wider">
                  <span>Connect With Our Leadership</span>
                  <span>→</span>
                </RouterLink>
              </div>
            </div>
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
</script>
