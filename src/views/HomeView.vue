<template>
  <div class="min-h-screen flex flex-col bg-brand-light">
    <!-- Navigation Header -->
    <AppHeader />

    <main class="flex-grow">
      <!-- Hero Section -->
      <section class="relative overflow-hidden bg-gradient-to-b from-slate-900 via-brand-navy to-slate-900 text-white pt-20 pb-28">
        <!-- Background decorative ambient circles -->
        <div class="absolute -top-24 -left-24 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute top-1/2 -right-24 w-96 h-96 bg-brand-emerald/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="text-center max-w-3xl mx-auto">
            <!-- Badge -->
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-brand-gold text-xs font-semibold tracking-wide uppercase mb-6 shadow-inner">
              <span class="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
              Strategic Regional Investment Hub
            </div>

            <!-- Main Heading -->
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Arua Special Economic Zone
            </h1>

            <!-- Subtitle -->
            <p class="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              Uganda's prime industrial gateway connecting East Africa to the Democratic Republic of Congo and South Sudan. Accelerating value addition, trade, and economic prosperity.
            </p>

            <!-- Actions -->
            <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a 
                href="#sectors" 
                class="px-7 py-3.5 rounded-xl font-semibold bg-brand-gold text-slate-950 hover:bg-amber-400 shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-100 transition-all"
              >
                Explore Investment Opportunities
              </a>
              <RouterLink 
                to="/admin" 
                class="px-7 py-3.5 rounded-xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/15 backdrop-blur-sm transition-all flex items-center gap-2"
              >
                <span>Admin Dashboard</span>
                <svg class="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </RouterLink>
            </div>
          </div>

          <!-- Quick Metrics Bar -->
          <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            <div class="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center">
              <div class="text-3xl sm:text-4xl font-extrabold text-brand-gold font-heading">500+</div>
              <div class="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Acres Dedicated Zone</div>
            </div>
            <div class="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center">
              <div class="text-3xl sm:text-4xl font-extrabold text-brand-emerald font-heading">100M+</div>
              <div class="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Regional Cross-Border Market</div>
            </div>
            <div class="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center">
              <div class="text-3xl sm:text-4xl font-extrabold text-white font-heading">100%</div>
              <div class="text-xs sm:text-sm text-slate-400 mt-1 font-medium">One-Stop Facilitation</div>
            </div>
            <div class="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center">
              <div class="text-3xl sm:text-4xl font-extrabold text-brand-gold font-heading">0%</div>
              <div class="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Import Duty on Machinery</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Key Pillars / Strategic Advantages -->
      <section id="about" class="py-20 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-2xl mx-auto mb-16">
            <span class="text-xs font-bold tracking-widest text-brand-gold-dark uppercase">Strategic Advantages</span>
            <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">Why Invest in Arua SEZ?</h2>
            <p class="text-slate-600 mt-3 text-sm sm:text-base">
              Engineered with world-class facilities and fiscal incentives to give your enterprise a competitive edge.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Advantage Card 1 -->
            <div class="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div class="w-12 h-12 rounded-xl bg-amber-50 text-brand-gold flex items-center justify-center mb-6">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-3">Tri-Border Commercial Hub</h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                Direct geographic access to DR Congo, South Sudan, and Central Africa, providing unprecedented cross-border market penetration.
              </p>
            </div>

            <!-- Advantage Card 2 -->
            <div class="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div class="w-12 h-12 rounded-xl bg-emerald-50 text-brand-emerald flex items-center justify-center mb-6">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-3">Attractive Fiscal Incentives</h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                Enjoy 10-year corporation tax holidays, zero import duty on raw materials and machinery, and 100% foreign ownership.
              </p>
            </div>

            <!-- Advantage Card 3 -->
            <div class="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-3">Plug-and-Play Infrastructure</h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                Dedicated high-voltage power supply, treated industrial water, internal paved road networks, and high-speed fiber connectivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Priority Sectors Section -->
      <section id="sectors" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span class="text-xs font-bold tracking-widest text-brand-gold-dark uppercase">Industrial Focus</span>
              <h2 class="text-3xl font-bold text-slate-900 mt-2">Priority Investment Sectors</h2>
            </div>
            <p class="text-slate-600 text-sm max-w-md mt-4 md:mt-0">
              Tailored industrial zones designed for maximum operational efficiency and supply chain integration.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="p-6 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-brand-gold/50 transition-all group">
              <div class="text-2xl mb-3">🌾</div>
              <h4 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-gold-dark transition-colors">Agro-Processing</h4>
              <p class="text-xs text-slate-600 leading-relaxed">Grain milling, organic fruit processing, honey, tobacco substitutes, and edible oil refineries.</p>
            </div>

            <div class="p-6 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-brand-gold/50 transition-all group">
              <div class="text-2xl mb-3">📦</div>
              <h4 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-gold-dark transition-colors">Logistics & Warehousing</h4>
              <p class="text-xs text-slate-600 leading-relaxed">Bonded warehouses, cold storage chains, freight forwarding, and intermodal transport depot.</p>
            </div>

            <div class="p-6 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-brand-gold/50 transition-all group">
              <div class="text-2xl mb-3">⚙️</div>
              <h4 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-gold-dark transition-colors">Light Manufacturing</h4>
              <p class="text-xs text-slate-600 leading-relaxed">Consumer goods assembly, construction materials, packaging, and textile production.</p>
            </div>

            <div class="p-6 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-brand-gold/50 transition-all group">
              <div class="text-2xl mb-3">⚡</div>
              <h4 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-gold-dark transition-colors">Clean Tech & Energy</h4>
              <p class="text-xs text-slate-600 leading-relaxed">Solar assembly, battery recycling, eco-friendly energy solutions, and circular economy hubs.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Admin Preview Callout -->
      <section class="py-14 bg-brand-navy text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 p-8 sm:p-12 border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span class="inline-block px-3 py-1 rounded bg-brand-gold/20 text-brand-gold text-xs font-semibold uppercase tracking-wider mb-3">
                Management Portal
              </span>
              <h3 class="text-2xl sm:text-3xl font-bold text-white">Arua SEZ Administration Dashboard</h3>
              <p class="text-slate-400 text-sm mt-2 max-w-xl">
                Monitor zone occupancy, manage registered investors, track plot allocations, and review business inquiries in real-time.
              </p>
            </div>
            <div class="flex-shrink-0">
              <RouterLink 
                to="/admin" 
                class="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold bg-brand-gold text-slate-950 hover:bg-amber-400 transition-all shadow-md"
              >
                Access Admin Dashboard
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </RouterLink>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import { RouterLink } from 'vue-router'
</script>
