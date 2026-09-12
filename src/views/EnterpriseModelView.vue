<template>
  <div class="min-h-screen flex flex-col bg-white font-sans text-slate-800">
    <AppHeader />

    <main class="flex-grow">
      <!-- ═══════════════════════════════════════════════
           PAGE HERO
           ═══════════════════════════════════════════════ -->
      <section class="relative bg-[#0B0F19] py-24 lg:py-32 overflow-hidden">
        <!-- Real photo background -->
        <div class="absolute inset-0">
          <img src="/images/aruasez (10).jpeg" alt="Arua SEZ team at work" class="w-full h-full object-cover object-center opacity-20" />
        </div>
        <div class="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/60 via-[#0B0F19]/70 to-[#0B0F19]"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-[11px] font-semibold uppercase tracking-widest text-amber-300 mb-6">
            Our Unique Value Proposition
          </div>
          <h1 class="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
            More than an Industrial Park.<br/>
            <span class="text-[#F59E0B]">A Structured Aggregator.</span>
          </h1>
          <p class="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Arua SEZ operates as a structured enterprise buyer and aggregator of raw materials, removing supply chain risk for our processing tenants.
          </p>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════
           POSITIONING CARDS
           ═══════════════════════════════════════════════ -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="font-heading font-black text-3xl sm:text-4xl text-slate-900 mb-4">Our Positioning</h2>
            <p class="text-slate-600">We bridge the gap between thousands of smallholder farmers and large-scale industrial processors, ensuring seamless market facilitation.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="p-8 rounded-2xl bg-[#F8FAFC] border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:border-amber-200 group">
              <div class="w-16 h-16 mx-auto rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
              </div>
              <h3 class="font-heading font-black text-xl text-slate-900 mb-3">Primary Buyers</h3>
              <p class="text-slate-600 text-sm leading-relaxed">We act as the primary off-takers of agricultural produce from farmers across the region.</p>
            </div>

            <div class="p-8 rounded-2xl bg-[#0B0F19] text-white border border-[#0B0F19] text-center hover:shadow-xl transition-all duration-300 transform md:-translate-y-4">
              <div class="w-16 h-16 mx-auto rounded-full bg-white/10 text-amber-400 flex items-center justify-center mb-6">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
              </div>
              <h3 class="font-heading font-black text-xl text-white mb-3">Supply Coordinators</h3>
              <p class="text-slate-400 text-sm leading-relaxed">We supply processors within the zone with graded, reliable, and standardized inputs.</p>
            </div>

            <div class="p-8 rounded-2xl bg-[#F8FAFC] border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:border-amber-200 group">
              <div class="w-16 h-16 mx-auto rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
              </div>
              <h3 class="font-heading font-black text-xl text-slate-900 mb-3">Market Enablers</h3>
              <p class="text-slate-600 text-sm leading-relaxed">We facilitate seamless cross-border trade into DRC, South Sudan, and CAR markets.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════
           HOW IT WORKS (FLOW)
           ═══════════════════════════════════════════════ -->
      <section class="py-24 bg-[#0B0F19] text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-20">
            <div class="text-xs font-extrabold tracking-widest text-[#F59E0B] uppercase mb-3">The Value Chain</div>
            <h2 class="font-heading font-black text-3xl sm:text-4xl text-white">How the Model Works</h2>
          </div>

          <div class="relative max-w-5xl mx-auto">
            <!-- Connecting line for desktop -->
            <div class="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-amber-400 to-[#D00004] -translate-y-1/2 z-0 rounded-full opacity-50"></div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
              <!-- Step 1 -->
              <div class="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl relative">
                <div class="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black border-4 border-[#0B0F19]">
                  01
                </div>
                <h3 class="font-heading font-black text-xl text-center text-emerald-400 mt-4 mb-6">Regional Procurement</h3>
                <p class="text-slate-400 text-sm text-center mb-6">The SEZ enterprise procures raw materials from primary catchment zones:</p>
                <ul class="space-y-3">
                  <li class="flex items-center gap-2 text-sm text-slate-300 bg-slate-800/50 px-4 py-2 rounded-lg">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> West Nile Region
                  </li>
                  <li class="flex items-center gap-2 text-sm text-slate-300 bg-slate-800/50 px-4 py-2 rounded-lg">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Northern Uganda
                  </li>
                  <li class="flex items-center gap-2 text-sm text-slate-300 bg-slate-800/50 px-4 py-2 rounded-lg">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Eastern Congo
                  </li>
                </ul>
              </div>

              <!-- Step 2 -->
              <div class="bg-slate-800 rounded-3xl p-8 border border-amber-500/30 shadow-2xl relative transform md:scale-105">
                <div class="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center font-black border-4 border-[#0B0F19] shadow-[0_0_20px_rgba(245,158,11,0.5)]">
                  02
                </div>
                <h3 class="font-heading font-black text-2xl text-center text-amber-400 mt-4 mb-2">Arua SEZ Hub</h3>
                <div class="text-[10px] font-bold text-center text-slate-400 uppercase tracking-widest mb-6">Aggregation &amp; Grading</div>
                <p class="text-slate-300 text-sm text-center">We handle the complex logistics of bulk purchasing, storage, quality control, and standardisation so you don't have to.</p>
              </div>

              <!-- Step 3 -->
              <div class="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl relative">
                <div class="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#D00004] text-white flex items-center justify-center font-black border-4 border-[#0B0F19]">
                  03
                </div>
                <h3 class="font-heading font-black text-xl text-center text-[#D00004] mt-4 mb-6">Processor Supply</h3>
                <p class="text-slate-400 text-sm text-center mb-6">We supply processors within the zone with guaranteed inputs featuring:</p>
                <ul class="space-y-3">
                  <li class="flex items-center gap-2 text-sm text-slate-300 bg-slate-800/50 px-4 py-2 rounded-lg border-l-2 border-[#D00004]">
                    Reliable Volumes
                  </li>
                  <li class="flex items-center gap-2 text-sm text-slate-300 bg-slate-800/50 px-4 py-2 rounded-lg border-l-2 border-[#D00004]">
                    Standardised Quality
                  </li>
                  <li class="flex items-center gap-2 text-sm text-slate-300 bg-slate-800/50 px-4 py-2 rounded-lg border-l-2 border-[#D00004]">
                    Reduced Sourcing Risk
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════
           KEY COMMODITIES
           ═══════════════════════════════════════════════ -->
      <section class="py-24 bg-[#F8FAFC]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row gap-16 items-center">
            
            <div class="flex-1 space-y-6">
              <div class="text-xs font-extrabold tracking-widest text-emerald-600 uppercase">Input Availability</div>
              <h2 class="font-heading font-black text-3xl sm:text-4xl text-slate-900 leading-tight">
                Key Commodities Aggregated
              </h2>
              <p class="text-slate-600 leading-relaxed text-lg mb-8">
                The West Nile region is highly productive. Our enterprise model ensures these raw materials are efficiently funnelled to zone operators ready for value addition.
              </p>
              
              <!-- Benefits -->
              <div class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h4 class="font-bold text-slate-900 mb-4">Why this model works for investors:</h4>
                <ul class="space-y-3">
                  <li class="flex items-start gap-3 text-slate-600">
                    <svg class="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                    <span>Reduces operational burden on investors</span>
                  </li>
                  <li class="flex items-start gap-3 text-slate-600">
                    <svg class="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                    <span>Guarantees steady input supply</span>
                  </li>
                  <li class="flex items-start gap-3 text-slate-600">
                    <svg class="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                    <span>Enables faster industrial scaling</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Photo + Commodities Grid -->
            <div class="flex-1 w-full space-y-4">
              <!-- Real photo of Arua SEZ HQ -->
              <div class="relative rounded-2xl overflow-hidden h-52 shadow-lg group">
                <img
                  src="/images/slid (1).jpeg"
                  alt="Arua Special Economic Zone headquarters building"
                  class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                <div class="absolute bottom-4 left-4">
                  <span class="text-white text-xs font-bold uppercase tracking-widest opacity-80">Arua SEZ HQ</span>
                </div>
              </div>
              <!-- Grid of Commodities -->
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-white p-4 rounded-xl border border-emerald-100 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div class="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-2xl">🍯</div>
                  <div class="font-bold text-slate-800">Honey</div>
                </div>
                <div class="bg-white p-4 rounded-xl border border-emerald-100 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div class="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-2xl">🥜</div>
                  <div class="font-bold text-slate-800">Groundnuts</div>
                </div>
                <div class="bg-white p-4 rounded-xl border border-emerald-100 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div class="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-2xl">🥑</div>
                  <div class="font-bold text-slate-800">Avocado</div>
                </div>
                <div class="bg-white p-4 rounded-xl border border-emerald-100 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div class="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-2xl">🌾</div>
                  <div class="font-bold text-slate-800">Sesame</div>
                </div>
                <div class="bg-white p-4 rounded-xl border border-emerald-100 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div class="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-2xl">🌻</div>
                  <div class="font-bold text-slate-800 text-sm">Mbira Oil &amp; Seeds</div>
                </div>
                <div class="bg-white p-4 rounded-xl border border-emerald-100 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div class="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-2xl">🌴</div>
                  <div class="font-bold text-slate-800">Palm Products</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      <!-- ═══════════════════════════════════════════════
           CALL TO ACTION
           ═══════════════════════════════════════════════ -->
      <section class="py-16 bg-[#D00004] text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 class="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
            Stop worrying about sourcing. Start processing.
          </h2>
          <p class="text-white/80 max-w-2xl mx-auto">
            Partner with Arua SEZ and let our aggregation enterprise handle your raw material supply chain.
          </p>
          <div class="pt-4">
            <RouterLink 
              to="/contact" 
              class="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-bold tracking-wider uppercase text-[#D00004] bg-white hover:bg-gray-100 shadow-lg transition-all"
            >
              <span>PARTNER WITH US</span>
              <span class="text-sm">→</span>
            </RouterLink>
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
