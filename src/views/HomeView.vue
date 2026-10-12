<template>
  <div class="min-h-screen flex flex-col bg-white font-sans text-slate-800">
    <AppHeader />
    <main class="flex-grow">

      <!-- HERO SECTION -->
      <section
        class="relative min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden"
        @mouseenter="stopAutoPlay"
        @mouseleave="startAutoPlay"
      >
        <div class="absolute inset-0 z-0 overflow-hidden">
          <div
            v-for="(slide, index) in slides"
            :key="index"
            class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            :class="currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'"
          >
            <img
              :src="slide.image"
              :alt="slide.title"
              class="w-full h-full transition-transform duration-[7000ms] ease-out"
              :class="[
                currentSlide === index ? 'scale-105' : 'scale-100',
                slide.fit || 'object-cover object-center'
              ]"
              :loading="index === 0 ? 'eager' : 'lazy'"
              :decoding="index === 0 ? 'sync' : 'async'"
              :fetchpriority="index === 0 ? 'high' : 'low'"
            />
          </div>
          <div class="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/30 to-transparent"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10 w-full">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div class="lg:col-span-8 text-white space-y-5">
              <div
                :key="'badge-' + currentSlide"
                class="hero-text-animate hero-text-delay-1 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-[11px] font-semibold tracking-wider uppercase text-amber-300"
              >
                <span class="w-2 h-2 rounded-full bg-[#D00004]"></span>
                <span>Arua Special Economic Zone</span>
              </div>
              <h1
                :key="'h1-' + currentSlide"
                class="hero-text-animate hero-text-delay-2 font-heading font-black tracking-tight leading-[1.1] text-4xl sm:text-5xl lg:text-[52px]"
              >
                <span class="block text-white">{{ slides[currentSlide].headline }}</span>
                <span class="block text-[#F59E0B] mt-1.5">{{ slides[currentSlide].subheadline }}</span>
              </h1>
              <div :key="'line-' + currentSlide" class="hero-text-animate hero-text-delay-2 w-14 h-1 bg-[#D00004] rounded-full"></div>
              <p :key="'sub-' + currentSlide" class="hero-text-animate hero-text-delay-3 text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-xl">
                {{ slides[currentSlide].subtitle }}
              </p>
              <div :key="'btns-' + currentSlide" class="hero-text-animate hero-text-delay-4 pt-1 flex flex-wrap items-center gap-3.5">
                <RouterLink to="/sectors" class="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-bold tracking-wider uppercase text-white bg-[#D00004] hover:bg-[#B30003] shadow-lg hover:shadow-xl transition-all">
                  <span>EXPLORE SECTORS</span><span class="text-sm">&#8594;</span>
                </RouterLink>
                <RouterLink to="/incentives" class="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-bold tracking-wider uppercase text-white bg-black/40 hover:bg-black/60 border border-white/30 backdrop-blur-sm transition-all">
                  <span>INCENTIVES</span><span class="text-sm text-[#F59E0B]">&#8595;</span>
                </RouterLink>
                <a href="/documents/aruasez_profile.pdf" target="_blank" class="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-bold tracking-wider uppercase text-[#F59E0B] bg-transparent hover:bg-white/10 border border-[#F59E0B]/50 backdrop-blur-sm transition-all">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
                  <span>INVESTMENT BRIEF</span>
                </a>
              </div>
            </div>
            <!-- <div class="lg:col-span-4 flex justify-start lg:justify-end">
              <div class="w-full max-w-[320px] rounded-2xl bg-[#0B0F19]/90 backdrop-blur-md border border-white/10 p-5 shadow-2xl text-left divide-y divide-white/15">
                <div class="flex items-center gap-3.5 pb-3.5">
                  <svg class="w-8 h-8 text-[#F59E0B] flex-shrink-0" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 29C16 29 25 19.5 25 12.5C25 7.80558 20.9706 4 16 4C11.0294 4 7 7.80558 7 12.5C7 19.5 16 29 16 29Z" />
                    <circle cx="16" cy="12.5" r="4.5" stroke-width="1.8" />
                  </svg>
                  <div class="h-8 w-px bg-white/20 mx-0.5 flex-shrink-0"></div>
                  <div>
                    <div class="text-[14px] font-bold text-white tracking-tight">&lt; 100 km</div>
                    <div class="text-[12px] text-slate-300">To DRC &amp; South Sudan</div>
                  </div>
                </div>
                <div class="flex items-center gap-3.5 py-3.5">
                  <svg class="w-8 h-8 text-[#F59E0B] flex-shrink-0" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8">
                    <circle cx="16" cy="16" r="12" stroke-width="1.8" />
                    <circle cx="16" cy="16" r="4.5" stroke-width="1.8" />
                    <path d="M16 4V11.5M16 20.5V28M4 16H11.5M20.5 16H28" stroke-linecap="round" stroke-width="1.8" />
                  </svg>
                  <div class="h-8 w-px bg-white/20 mx-0.5 flex-shrink-0"></div>
                  <div>
                    <div class="text-[14px] font-bold text-white tracking-tight">20% Lower Cost</div>
                    <div class="text-[12px] text-slate-300">Regional Freight</div>
                  </div>
                </div>
                <div class="flex items-center gap-3.5 pt-3.5">
                  <svg class="w-8 h-8 text-[#F59E0B] flex-shrink-0" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8">
                    <rect x="5" y="18" width="4" height="9" rx="1.5" stroke-linecap="round" />
                    <rect x="12" y="14" width="4" height="13" rx="1.5" stroke-linecap="round" />
                    <rect x="19" y="10" width="4" height="17" rx="1.5" stroke-linecap="round" />
                    <path d="M4 18L11 12L17 15L26 6" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="h-8 w-px bg-white/20 mx-0.5 flex-shrink-0"></div>
                  <div>
                    <div class="text-[14px] font-bold text-white tracking-tight">10-Yr Holiday</div>
                    <div class="text-[12px] text-slate-300">Tax &amp; Duty Free</div>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>

        <div class="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-black/45 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
          <button @click="prevSlide" class="text-white/70 hover:text-white transition-colors text-sm px-1 font-bold" aria-label="Previous Slide">&#8249;</button>
          <div class="flex items-center gap-1.5">
            <button v-for="(_, i) in slides" :key="i" @click="goToSlide(i)"
              class="h-1.5 rounded-full transition-all"
              :class="currentSlide === i ? 'w-6 bg-[#D00004]' : 'w-2 bg-white/40 hover:bg-white/70'"
              :aria-label="'Go to slide ' + (i + 1)"></button>
          </div>
          <button @click="nextSlide" class="text-white/70 hover:text-white transition-colors text-sm px-1 font-bold" aria-label="Next Slide">&#8250;</button>
        </div>
      </section>

      <!-- ═══ STATS STRIP ═══ -->
      <div class="bg-[#0B0F19] border-b border-white/5">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-white/10">

            <div class="flex flex-col items-center justify-center py-5 px-3 gap-0.5">
              <span class="font-heading font-black text-2xl sm:text-3xl text-[#F59E0B] leading-none">14</span>
              <span class="text-[10px] font-extrabold uppercase tracking-widest text-white/60 mt-1">Hectares</span>
              <span class="text-[10px] text-white/35">Total Zone Land</span>
            </div>

            <div class="flex flex-col items-center justify-center py-5 px-3 gap-0.5">
              <span class="font-heading font-black text-2xl sm:text-3xl text-[#F59E0B] leading-none">0%</span>
              <span class="text-[10px] font-extrabold uppercase tracking-widest text-white/60 mt-1">Import Duty</span>
              <span class="text-[10px] text-white/35">Machinery &amp; Equipment</span>
            </div>

            <div class="flex flex-col items-center justify-center py-5 px-3 gap-0.5">
              <span class="font-heading font-black text-2xl sm:text-3xl text-[#F59E0B] leading-none">10 Yr</span>
              <span class="text-[10px] font-extrabold uppercase tracking-widest text-white/60 mt-1">Tax Holiday</span>
              <span class="text-[10px] text-white/35">Corporate Income Tax</span>
            </div>

            <div class="flex flex-col items-center justify-center py-5 px-3 gap-0.5">
              <span class="font-heading font-black text-2xl sm:text-3xl text-[#D00004] leading-none">&lt;100km</span>
              <span class="text-[10px] font-extrabold uppercase tracking-widest text-white/60 mt-1">To DRC Border</span>
              <span class="text-[10px] text-white/35">Arua City Gateway</span>
            </div>

            <div class="flex flex-col items-center justify-center py-5 px-3 gap-0.5">
              <span class="font-heading font-black text-2xl sm:text-3xl text-[#D00004] leading-none">100M+</span>
              <span class="text-[10px] font-extrabold uppercase tracking-widest text-white/60 mt-1">Consumers</span>
              <span class="text-[10px] text-white/35">Within 500km Radius</span>
            </div>

            <div class="flex flex-col items-center justify-center py-5 px-3 gap-0.5">
              <span class="font-heading font-black text-2xl sm:text-3xl text-[#F59E0B] leading-none">6</span>
              <span class="text-[10px] font-extrabold uppercase tracking-widest text-white/60 mt-1">Priority Sectors</span>
              <span class="text-[10px] text-white/35">Open for Investment</span>
            </div>

          </div>
        </div>
      </div>

      <!-- ═══ URGENCY BANNER ═══ -->
      <div class="bg-gradient-to-r from-[#D00004] via-[#b30003] to-[#8b0002] border-b border-red-900/30">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <span class="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 text-white text-xs font-black animate-pulse">!</span>
            <p class="text-xs sm:text-sm font-semibold text-white leading-snug">
              <strong class="font-extrabold">Phase 1 Allocation Now Open</strong>
              <span class="hidden sm:inline text-white/80"> &mdash; </span>
              <span class="text-white/90">Pre-commercial plot rates available to early investors. Limited allocation.</span>
            </p>
          </div>
          <RouterLink to="/contact"
            class="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-white text-[#D00004] text-[11px] font-extrabold tracking-wider uppercase hover:bg-red-50 transition-colors whitespace-nowrap shadow-sm">
            Secure Your Plot &#8594;
          </RouterLink>
        </div>
      </div>

      <!-- METRICS BAR with Animated Counters -->

      <!-- <section
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 relative z-20 reveal-up"
        :class="metricsReveal.revealed.value ? 'revealed' : ''"
        :ref="metricsReveal.revealRef"
      >
        <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            <div class="flex items-start gap-4 pt-4 sm:pt-0 sm:px-3">
              <div class="w-12 h-12 rounded-xl bg-amber-500/10 text-[#D17F00] flex items-center justify-center flex-shrink-0">
                <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke-linecap="round"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke-linecap="round"/>
                </svg>
              </div>
              <div>
                <div :ref="stat1.countRef" class="font-heading font-black text-3xl sm:text-4xl text-[#D17F00] leading-none" :class="{ 'counter-pop': stat1.isPopping.value }">{{ stat1.display.value }}</div>
                <div class="text-xs font-extrabold uppercase tracking-wider text-slate-800 mt-1">CONSUMERS</div>
                <div class="text-[11px] text-gray-500 mt-0.5">Within 100 km Radius</div>
              </div>
            </div>
            <div class="flex items-start gap-4 pt-4 sm:pt-0 sm:px-4">
              <div class="w-12 h-12 rounded-xl bg-red-500/10 text-[#D00004] flex items-center justify-center flex-shrink-0">
                <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div>
                <div :ref="stat2.countRef" class="font-heading font-black text-3xl sm:text-4xl text-[#D00004] leading-none" :class="{ 'counter-pop': stat2.isPopping.value }">{{ stat2.display.value }}</div>
                <div class="text-xs font-extrabold uppercase tracking-wider text-slate-800 mt-1">COST ADVANTAGE</div>
                <div class="text-[11px] text-gray-500 mt-0.5">Over Kampala &amp; Nairobi Freight</div>
              </div>
            </div>
            <div class="flex items-start gap-4 pt-4 sm:pt-0 sm:px-4">
              <div class="w-12 h-12 rounded-xl bg-amber-500/10 text-[#D17F00] flex items-center justify-center flex-shrink-0">
                <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div>
                <div :ref="stat3.countRef" class="font-heading font-black text-3xl sm:text-4xl text-[#D17F00] leading-none" :class="{ 'counter-pop': stat3.isPopping.value }">{{ stat3.display.value }}</div>
                <div class="text-xs font-extrabold uppercase tracking-wider text-slate-800 mt-1">HECTARES</div>
                <div class="text-[11px] text-gray-500 mt-0.5">Serviced Industrial Plots</div>
              </div>
            </div>
            <div class="flex items-start gap-4 pt-4 sm:pt-0 sm:px-4">
              <div class="w-12 h-12 rounded-xl bg-red-500/10 text-[#D00004] flex items-center justify-center flex-shrink-0">
                <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3 21h18" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div>
                <div :ref="stat4.countRef" class="font-heading font-black text-3xl sm:text-4xl text-[#D00004] leading-none" :class="{ 'counter-pop': stat4.isPopping.value }">{{ stat4.display.value }}</div>
                <div class="text-xs font-extrabold uppercase tracking-wider text-slate-800 mt-1">TAX HOLIDAY</div>
                <div class="text-[11px] text-gray-500 mt-0.5">UIA Statutory Incentive</div>
              </div>
            </div>
          </div>
        </div>
      </section> -->

      <!-- Wave Divider -->
      <!-- <div class="wave-divider bg-white">
        <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="h-10 w-full" fill="#F8FAFC">
          <path d="M0,0 C360,48 1080,48 1440,0 L1440,48 L0,48 Z"/>
        </svg>
      </div> -->

      <!-- STRATEGIC ADVANTAGE & MAP -->
      <section class="py-20 lg:py-24 bg-[#F8FAFC] overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div class="lg:col-span-5 space-y-6 reveal-left" :class="strategyReveal.revealed.value ? 'revealed' : ''" :ref="strategyReveal.revealRef">
              <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase">STRATEGIC ADVANTAGE</div>
              <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                Strategically Positioned.<br />Regionally Connected.
              </h2>
              <p class="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Uganda's prime location in Africa positions it as the ideal gateway to regional and international markets.
              </p>
              <div class="space-y-4 pt-2">
                <div class="flex items-start gap-4">
                  <svg class="w-6 h-6 text-[#1e3b73] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p class="text-sm sm:text-base text-slate-700">Gateway to 300+ Million People in East &amp; Central Africa</p>
                </div>
                <div class="flex items-start gap-4">
                  <svg class="w-6 h-6 text-[#1e3b73] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p class="text-sm sm:text-base text-slate-700">Multiple Trade Corridors: Northern, Central &amp; Southern Routes</p>
                </div>
                <div class="flex items-start gap-4">
                  <svg class="w-6 h-6 text-[#1e3b73] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p class="text-sm sm:text-base text-slate-700">Member of EAC, COMESA &amp; Other Regional Trade Blocks</p>
                </div>
                <div class="flex items-start gap-4">
                  <svg class="w-6 h-6 text-[#1e3b73] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p class="text-sm sm:text-base text-slate-700">Direct Access to Port of Mombasa &amp; Dar es Salaam</p>
                </div>
              </div>
              <div class="pt-2 flex items-center gap-4">
                <RouterLink to="/about" class="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-bold tracking-wider uppercase text-white bg-[#0B0F19] hover:bg-[#1E293B] shadow-md transition-all">
                  <span>LEARN MORE ABOUT US</span><span class="text-sm text-[#F59E0B]">&#8594;</span>
                </RouterLink>
                <RouterLink to="/contact" class="text-xs font-bold tracking-wider uppercase text-[#D00004] hover:text-[#B30003] transition-colors">CONNECT YOUR BUSINESS &#8594;</RouterLink>
              </div>
            </div>
            <div class="lg:col-span-7 relative min-h-[480px] flex items-center justify-center reveal-right" :class="strategyReveal.revealed.value ? 'revealed' : ''">
              <UgandaInteractiveMap />
            </div>
          </div>
        </div>
      </section>

      <!-- Wave Divider -->
      <div class="wave-divider bg-[#F8FAFC]">
        <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="h-10 w-full" fill="white">
          <path d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z"/>
        </svg>
      </div>

      <!-- PRIORITY SECTORS -->
      <section class="py-20 bg-white border-y border-slate-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal-up" :class="sectorsReveal.revealed.value ? 'revealed' : ''" :ref="sectorsReveal.revealRef">
            <div>
              <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">CORE ACTIVITIES</div>
              <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">High Turnover. Essential Goods.</h2>
            </div>
            <div class="text-left md:text-right">
              <RouterLink to="/sectors" class="inline-flex items-center gap-2 text-xs font-extrabold tracking-wider text-[#D00004] hover:text-[#B30003] uppercase transition-colors">
                <span>VIEW ALL 6 PRIORITY SECTORS</span><span class="text-sm">&#8594;</span>
              </RouterLink>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

            <!-- Photo slider -->
            <div
              class="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-xl bg-slate-900 min-h-[320px] sm:min-h-[420px] lg:min-h-[520px] reveal-up"
              :class="sectorCards[0].revealed.value ? 'revealed' : ''" :ref="sectorCards[0].revealRef"
              @mouseenter="stopCoreAutoPlay" @mouseleave="startCoreAutoPlay"
            >
              <img
                v-for="(img, i) in coreImages"
                :key="img"
                :src="img"
                :alt="'Arua SEZ site photo ' + (i + 1)"
                class="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out"
                :class="coreSlide === i ? 'opacity-100' : 'opacity-0'"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/10 pointer-events-none"></div>

              <div class="absolute top-4 left-4 px-3 py-1 rounded-md bg-[#D00004] text-white text-[11px] font-bold uppercase tracking-wider">
                Arua Special Economic Zone
              </div>

              <!-- Controls -->
              <button type="button" id="core-slider-prev" aria-label="Previous photo" @click="prevCoreSlide"
                class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur text-white flex items-center justify-center transition-colors">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button type="button" id="core-slider-next" aria-label="Next photo" @click="nextCoreSlide"
                class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur text-white flex items-center justify-center transition-colors">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
              </button>
              <div class="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
                <button
                  v-for="(img, i) in coreImages"
                  :key="'dot-' + img"
                  type="button"
                  :id="'core-slider-dot-' + i"
                  :aria-label="'Go to photo ' + (i + 1)"
                  @click="goToCoreSlide(i)"
                  class="h-2 rounded-full transition-all duration-300"
                  :class="coreSlide === i ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'"
                ></button>
              </div>
            </div>

            <!-- Text only: core activities -->
            <div class="lg:col-span-6 flex flex-col gap-4">

              <div class="group flex gap-4 p-5 rounded-2xl border border-gray-200 bg-white hover:shadow-xl hover:border-amber-400 transition-all duration-300 reveal-up"
                :class="sectorCards[1].revealed.value ? 'revealed' : ''" :ref="sectorCards[1].revealRef" style="transition-delay:120ms">
                <div class="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-amber-50 to-lime-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M7 20h10"/>
                    <path d="M10 20c5.5-2.5.8-6.4 3-10"/>
                    <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/>
                    <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/>
                  </svg>
                </div>
                <div class="flex-1">
                  <div class="flex items-center justify-between gap-3 mb-1">
                    <h3 class="font-heading font-black text-sm uppercase tracking-wider text-slate-900">Agriculture &amp; Agro-Processing</h3>
                    <span class="hidden sm:inline text-[11px] font-bold text-[#D17F00] uppercase tracking-wider whitespace-nowrap">High Volume Export</span>
                  </div>
                  <p class="text-xs text-slate-600 leading-relaxed mb-2">Industrial cleaning, sorting, packing, and refining of groundnuts, rice, palm oil, coffee, cassava, oilseeds, and shea butter.</p>
                  <RouterLink to="/sectors" class="text-xs font-bold text-slate-900 hover:text-[#D00004]">Details &#8594;</RouterLink>
                </div>
              </div>

              <div class="group flex gap-4 p-5 rounded-2xl border border-gray-200 bg-white hover:shadow-xl hover:border-amber-400 transition-all duration-300 reveal-up"
                :class="sectorCards[2].revealed.value ? 'revealed' : ''" :ref="sectorCards[2].revealRef" style="transition-delay:240ms">
                <div class="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M6 3h12l4 6-10 13L2 9Z"/>
                    <path d="M11 3 8 9l4 13 4-13-3-6"/>
                    <path d="M2 9h20"/>
                  </svg>
                </div>
                <div class="flex-1">
                  <div class="flex items-center justify-between gap-3 mb-1">
                    <h3 class="font-heading font-black text-sm uppercase tracking-wider text-slate-900">Mining &amp; Mineral Processing</h3>
                    <span class="hidden sm:inline text-[11px] font-bold text-[#F59E0B] uppercase tracking-wider whitespace-nowrap">High Capital Value</span>
                  </div>
                  <p class="text-xs text-slate-600 leading-relaxed mb-2">Gold refining and mineral smelting, directly leveraging artisanal mining from Eastern Congo and newly identified mineral prospects in West Nile.</p>
                  <RouterLink to="/sectors" class="text-xs font-bold text-slate-900 hover:text-[#D00004]">Details &#8594;</RouterLink>
                </div>
              </div>

              <div class="group flex gap-4 p-5 rounded-2xl border border-gray-200 bg-white hover:shadow-xl hover:border-slate-800 transition-all duration-300 reveal-up"
                :class="sectorCards[2].revealed.value ? 'revealed' : ''" style="transition-delay:360ms">
                <div class="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-slate-100 to-red-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-[#D00004]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
                    <path d="M17 18h1"/>
                    <path d="M12 18h1"/>
                    <path d="M7 18h1"/>
                  </svg>
                </div>
                <div class="flex-1">
                  <div class="flex items-center justify-between gap-3 mb-1">
                    <h3 class="font-heading font-black text-sm uppercase tracking-wider text-slate-900">Manufacturing &amp; Ethanol</h3>
                    <span class="hidden sm:inline text-[11px] font-bold text-slate-800 uppercase tracking-wider whitespace-nowrap">Fast Moving Goods</span>
                  </div>
                  <p class="text-xs text-slate-600 leading-relaxed mb-2">Ethanol and industrial alcohol from cassava and sugarcane; confectionery; aromatic soaps; plus steel lines, timber, and bonded transit yards.</p>
                  <RouterLink to="/sectors" class="text-xs font-bold text-slate-900 hover:text-[#D00004]">Details &#8594;</RouterLink>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>



      <!-- WHY ARUA SEZ -->
      <section class="py-20 bg-white border-t border-slate-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-14 reveal-up" :class="whyReveal.revealed.value ? 'revealed' : ''" :ref="whyReveal.revealRef">
            <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">WHY INVEST IN ARUA SEZ</div>
            <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">A Complete Platform for Industrial Growth</h2>
            <p class="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">Everything required to establish, operate, and scale your manufacturing or cross-border trade operations.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="group rounded-2xl overflow-hidden border border-slate-200/80 hover:shadow-xl transition-all duration-300 flex flex-col bg-white reveal-up"
              :class="whyCards[0].revealed.value ? 'revealed' : ''" :ref="whyCards[0].revealRef" style="transition-delay:0ms">
              <div class="relative h-40 overflow-hidden flex-shrink-0">
                <img src="/images/fiscal_incentives.jpg" alt="Statutory Fiscal Incentives" class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div class="p-6 flex-1 flex flex-col">
                <h3 class="font-heading font-bold text-lg text-slate-900 mb-2">Statutory Fiscal Incentives</h3>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 flex-1">10-year corporate income tax holidays, 0% import duty on machinery and plant equipment, and full foreign exchange repatriation.</p>
                <RouterLink to="/incentives" class="text-xs font-bold text-[#D00004] hover:underline">View Tax Framework &#8594;</RouterLink>
              </div>
            </div>

            <div class="group rounded-2xl overflow-hidden border border-slate-200/80 hover:shadow-xl transition-all duration-300 flex flex-col bg-white reveal-up"
              :class="whyCards[1].revealed.value ? 'revealed' : ''" :ref="whyCards[1].revealRef" style="transition-delay:120ms">
              <div class="relative h-40 overflow-hidden flex-shrink-0">
                <img src="/images/arua_sez_plots.jpg" alt="Plug and Play Serviced Plots" class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div class="p-6 flex-1 flex flex-col">
                <h3 class="font-heading font-bold text-lg text-slate-900 mb-2">Plug &amp; Play Serviced Plots</h3>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 flex-1">Dedicated high-voltage industrial power, treated water, heavy-vehicle paved roads, and on-site customs post in Arua City.</p>
                <RouterLink to="/incentives" class="text-xs font-bold text-[#D17F00] hover:underline">View Infrastructure Specs &#8594;</RouterLink>
              </div>
            </div>

            <div class="group rounded-2xl overflow-hidden border border-slate-200/80 hover:shadow-xl transition-all duration-300 flex flex-col bg-white reveal-up"
              :class="whyCards[2].revealed.value ? 'revealed' : ''" :ref="whyCards[2].revealRef" style="transition-delay:240ms">
              <div class="relative h-40 overflow-hidden flex-shrink-0">
                <img src="/images/aruasez (20).jpeg" alt="Fast-Track Licensing" class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div class="p-6 flex-1 flex flex-col">
                <h3 class="font-heading font-bold text-lg text-slate-900 mb-2">Fast-Track Licensing</h3>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 flex-1">One-stop administrative clearance for URSB incorporation, UIA investment licensing, NEMA environmental clearances, and work permits.</p>
                <RouterLink to="/contact" class="text-xs font-bold text-slate-900 hover:underline">Partner With Us &#8594;</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </section>

 

      <!-- INVESTOR JOURNEY 3-STEP CTA -->
      <section class="py-16 bg-[#F8FAFC] border-y border-slate-100 reveal-up" :class="journeyReveal.revealed.value ? 'revealed' : ''" :ref="journeyReveal.revealRef">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-10">
            <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">YOUR INVESTMENT JOURNEY</div>
            <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">Three Steps to Getting Started</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
            <div class="hidden md:block absolute top-10 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-0.5 bg-gradient-to-r from-[#D00004] via-[#D17F00] to-[#0B0F19] z-0"></div>
            <div class="relative flex flex-col items-center text-center px-6 pb-8 md:pb-0 z-10">
              <div class="w-20 h-20 rounded-2xl bg-[#D00004] text-white flex flex-col items-center justify-center shadow-lg mb-5 relative">
                <span class="text-[10px] font-extrabold tracking-widest uppercase opacity-70 mb-0.5">STEP</span>
                <span class="font-heading font-black text-3xl leading-none">1</span>
                <div class="absolute inset-0 rounded-2xl ring-4 ring-[#D00004]/20"></div>
              </div>
              <h3 class="font-heading font-bold text-base text-slate-900 mb-2">Explore Priority Sectors</h3>
              <p class="text-xs text-slate-500 leading-relaxed mb-4">Review our 6 priority sectors and identify the best fit for your investment mandate.</p>
              <RouterLink to="/sectors" class="inline-flex items-center gap-1.5 text-[11px] font-extrabold tracking-wider uppercase text-[#D00004] hover:underline">View Sectors &#8594;</RouterLink>
            </div>
            <div class="relative flex flex-col items-center text-center px-6 pb-8 md:pb-0 z-10">
              <div class="w-20 h-20 rounded-2xl bg-[#D17F00] text-white flex flex-col items-center justify-center shadow-lg mb-5 relative">
                <span class="text-[10px] font-extrabold tracking-widest uppercase opacity-70 mb-0.5">STEP</span>
                <span class="font-heading font-black text-3xl leading-none">2</span>
                <div class="absolute inset-0 rounded-2xl ring-4 ring-[#D17F00]/20"></div>
              </div>
              <h3 class="font-heading font-bold text-base text-slate-900 mb-2">Review Investor Incentives</h3>
              <p class="text-xs text-slate-500 leading-relaxed mb-4">Understand the full 19-point fiscal and infrastructure package available to zone investors.</p>
              <RouterLink to="/incentives" class="inline-flex items-center gap-1.5 text-[11px] font-extrabold tracking-wider uppercase text-[#D17F00] hover:underline">View Incentives &#8594;</RouterLink>
            </div>
            <div class="relative flex flex-col items-center text-center px-6 z-10">
              <div class="w-20 h-20 rounded-2xl bg-[#0B0F19] text-white flex flex-col items-center justify-center shadow-lg mb-5 relative">
                <span class="text-[10px] font-extrabold tracking-widest uppercase opacity-70 mb-0.5">STEP</span>
                <span class="font-heading font-black text-3xl leading-none">3</span>
                <div class="absolute inset-0 rounded-2xl ring-4 ring-[#0B0F19]/20"></div>
              </div>
              <h3 class="font-heading font-bold text-base text-slate-900 mb-2">Submit Expression of Interest</h3>
              <p class="text-xs text-slate-500 leading-relaxed mb-4">Connect directly with our development office to reserve your industrial plot.</p>
              <RouterLink to="/contact" class="inline-flex items-center gap-1.5 text-[11px] font-extrabold tracking-wider uppercase text-[#0B0F19] hover:underline">Connect Now &#8594;</RouterLink>
            </div>
          </div>
        </div>
      </section>

           <!-- PARTNERS STRIP -->
      <PartnersStrip />

      <!-- TESTIMONIALS -->
      <section class="py-20 bg-white reveal-up" :class="testimonialsReveal.revealed.value ? 'revealed' : ''" :ref="testimonialsReveal.revealRef">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">WHAT PEOPLE SAY</div>
            <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">Voices of Confidence</h2>
          </div>
          <div class="relative">
            <div class="overflow-hidden">
              <div v-for="(testimonial, i) in testimonials" :key="i" class="transition-opacity duration-700" :class="activeTestimonial === i ? 'block opacity-100' : 'hidden opacity-0'">
                <div class="bg-[#F8FAFC] rounded-2xl border border-slate-100 p-8 sm:p-10 text-center relative">
                  <div class="absolute top-6 left-8 text-[80px] leading-none text-[#D00004]/10 font-heading font-black select-none">"</div>
                  <p class="text-base sm:text-lg text-slate-700 leading-relaxed italic max-w-2xl mx-auto relative z-10 mb-6">"{{ testimonial.quote }}"</p>
                  <div class="flex items-center justify-center gap-4">
                    <div class="w-12 h-12 rounded-full flex items-center justify-center text-white font-heading font-black text-lg flex-shrink-0" :style="{ background: testimonial.color }">{{ testimonial.initials }}</div>
                    <div class="text-left">
                      <div class="font-heading font-bold text-sm text-slate-900">{{ testimonial.name }}</div>
                      <div class="text-xs text-slate-500">{{ testimonial.role }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-center gap-2 mt-6">
              <button v-for="(_, i) in testimonials" :key="i" @click="activeTestimonial = i"
                class="h-2 rounded-full transition-all duration-300"
                :class="activeTestimonial === i ? 'w-6 bg-[#D00004]' : 'w-2 bg-slate-300 hover:bg-slate-400'"
                :aria-label="'Testimonial ' + (i+1)"></button>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══ FAQ SECTION ═══ -->
      <section class="py-20 bg-[#F8FAFC] border-t border-slate-100">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <!-- Header -->
          <div class="text-center mb-12">
            <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">INVESTOR FAQ</div>
            <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">Questions We Hear Most</h2>
            <p class="text-sm text-slate-500 mt-3">Everything you need to know before making your investment decision.</p>
          </div>

          <!-- Accordion -->
          <div class="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">

            <div v-for="(faq, i) in faqItems" :key="i">
              <button
                @click="openFaq = openFaq === i ? null : i"
                class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors"
                :aria-expanded="openFaq === i"
              >
                <span class="font-heading font-bold text-sm sm:text-base text-slate-900 leading-snug">{{ faq.q }}</span>
                <span class="flex-shrink-0 w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-300"
                  :class="openFaq === i ? 'bg-[#D00004] border-[#D00004] rotate-45' : 'bg-white'">
                  <svg class="w-3.5 h-3.5 transition-colors" :class="openFaq === i ? 'text-white' : 'text-slate-400'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              <div
                class="overflow-hidden transition-all duration-300 ease-in-out"
                :style="openFaq === i ? 'max-height: 400px; opacity: 1' : 'max-height: 0; opacity: 0'"
              >
                <div class="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {{ faq.a }}
                </div>
              </div>
            </div>

          </div>

          <!-- CTA below FAQ -->
          <div class="mt-10 text-center">
            <p class="text-sm text-slate-500 mb-4">Still have questions? Our team is ready to assist.</p>
            <RouterLink to="/contact" class="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold tracking-wider uppercase text-white bg-[#D00004] hover:bg-[#B30003] shadow-md transition-all">
              <span>SPEAK TO OUR TEAM</span><span class="text-sm">&#8594;</span>
            </RouterLink>
          </div>

        </div>
      </section>

      <!-- CTA BANNER -->
      <section class="relative py-16 bg-[#0B0F19] text-white overflow-hidden">
        <div class="absolute inset-0">
          <img src="/images/slid (1).jpeg" alt="Arua SEZ HQ" class="w-full h-full object-cover object-center opacity-15" />
        </div>
        <div class="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/90 to-[#0B0F19]/80"></div>
        <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 28px 28px;"></div>
        <div class="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3 opacity-30">
          <div class="w-20 h-20 rounded-xl overflow-hidden border border-white/10">
            <img src="/images/aruasez (22).jpeg" alt="Team" class="w-full h-full object-cover object-center" />
          </div>
          <div class="w-20 h-20 rounded-xl overflow-hidden border border-white/10">
            <img src="/images/aruasez (10).jpeg" alt="Site" class="w-full h-full object-cover object-center" />
          </div>
        </div>
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-semibold uppercase tracking-wider text-amber-300">
            <span>Arua Special Economic Zone</span>
          </div>
          <h2 class="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            West Nile is Ready. Arua SEZ is the Platform.
          </h2>
          <p class="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you are an anchor investor, infrastructure developer, or cross-border logistics provider, connect with our development office to reserve your industrial plot.
          </p>
          <div class="pt-2 flex flex-wrap items-center justify-center gap-4">
            <RouterLink to="/contact" class="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase text-white bg-[#D00004] hover:bg-[#B30003] shadow-lg transition-all">
              <span>SUBMIT EXPRESSION OF INTEREST</span><span class="text-sm">&#8594;</span>
            </RouterLink>
            <a href="/documents/aruasez_profile.pdf" target="_blank" class="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase text-[#F59E0B] bg-white/10 hover:bg-white/20 border border-[#F59E0B]/40 transition-all">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
              <span>DOWNLOAD INVESTMENT BRIEF</span>
            </a>
            <RouterLink to="/about" class="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase text-slate-200 bg-white/10 hover:bg-white/20 border border-white/20 transition-all">
              <span>ABOUT THE ZONE</span>
            </RouterLink>
          </div>
        </div>
      </section>

    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import UgandaInteractiveMap from '@/components/UgandaInteractiveMap.vue'
import PartnersStrip from '@/components/PartnersStrip.vue'
import { useScrollReveal, useScrollRevealList } from '@/composables/useScrollReveal'
import { useCountUp } from '@/composables/useCountUp'

// FAQ accordion
const openFaq = ref(null)
const faqItems = [
  {
    q: 'Can foreign nationals and companies invest in Arua SEZ?',
    a: 'Yes. Arua SEZ is fully open to foreign investors. Under the Uganda Investment Authority (UIA) framework, foreign companies can register, obtain investment licenses, and hold land-use rights within the zone. Full foreign exchange repatriation of profits is also guaranteed.'
  },
  {
    q: 'What is the minimum plot size available for lease?',
    a: 'Industrial plots start from 0.5 hectares, scaling up to multi-hectare anchor allocations depending on your sector and operational requirements. Plots come serviced with high-voltage power, water connections, and paved road access.'
  },
  {
    q: 'How long does the licensing and registration process take?',
    a: 'Through our one-stop administrative clearance, URSB incorporation, UIA investment licensing, and NEMA environmental clearances can typically be processed within 21 working days. Our development office guides investors through every step.'
  },
  {
    q: 'What tax incentives are available to zone investors?',
    a: 'Zone investors benefit from a 10-year corporate income tax holiday, 0% import duty on plant machinery and equipment, VAT exemptions on zone inputs, and full repatriation of foreign exchange. This is governed by the Uganda Free Zones Act.'
  },
  {
    q: 'Is raw material supply guaranteed for agro-processing investors?',
    a: 'Yes. The SEZ operates a guaranteed raw material aggregation model in partnership with West Nile farmer cooperatives and cross-border supply chains from DRC and South Sudan, covering groundnuts, rice, palm oil, cassava, and shea butter.'
  },
  {
    q: 'What infrastructure is already in place on site?',
    a: 'The current site has paved internal access roads, boundary demarcation, a site office, and connection points for high-voltage power and treated water. Additional industrial-grade infrastructure is being installed in phases aligned with investor occupancy.'
  },
  {
    q: 'How close is Arua SEZ to international borders?',
    a: 'Arua City is less than 100 km from the DRC border at Vurra and approximately 160 km from the South Sudan border. This positions the zone as the lowest-cost logistics hub for serving both markets simultaneously from Uganda.'
  },
  {
    q: 'How do I express formal interest or reserve a plot?',
    a: 'You can submit an Expression of Interest through our Contact page or reach our development office directly via the WhatsApp channel on this site. Our team will respond within 48 hours to schedule a site visit or investor briefing call.'
  }
]

// Scroll Reveal Instances
const metricsReveal      = useScrollReveal({ threshold: 0.15 })
const strategyReveal     = useScrollReveal({ threshold: 0.1 })
const sectorsReveal      = useScrollReveal({ threshold: 0.1 })
const modelReveal        = useScrollReveal({ threshold: 0.1 })
const whyReveal          = useScrollReveal({ threshold: 0.1 })
const journeyReveal      = useScrollReveal({ threshold: 0.1 })
const testimonialsReveal = useScrollReveal({ threshold: 0.1 })

// Staggered card reveals
const sectorCards = useScrollRevealList(3, { threshold: 0.1, staggerMs: 120 })
const whyCards    = useScrollRevealList(3, { threshold: 0.1, staggerMs: 120 })

// Animated Counters
const stat1 = useCountUp({ target: 100,  suffix: 'M+',   decimals: 0, duration: 1800 })
const stat2 = useCountUp({ target: 20,   suffix: '% +',  decimals: 0, duration: 1500 })
const stat3 = useCountUp({ target: 12.7, suffix: '+',    decimals: 1, duration: 1600 })
const stat4 = useCountUp({ target: 10,   suffix: ' Yrs', decimals: 0, duration: 1400 })

// Hero Slider
const currentSlide = ref(0)
const slides = [
  {
    image: '/images/Edit1.png',
    headline: 'A Free Economic ',
    subheadline: 'Zone',
    subtitle: 'Connecting trade across Uganda, DRC, and South Sudan.'
  },
  // {
  //   image: '/images/Edit2.png',
  //   headline: 'Gateway to Prosperity',
  //   subheadline: "West Nile's Industrial Hub",
  //   subtitle: 'The premier platform for regional investors and logistics.'
  // },
  {
    image: '/images/edited.png',
    headline: 'Industrial Manufacturing',
    subheadline: 'Serviced Plots Ready',
    subtitle: 'Plug-and-play infrastructure with power and on-site customs.'
  },
  {
    image: '/images/Edit2.png',
    headline: 'Expert Leadership',
    subheadline: 'Committed to Growth',
    subtitle: 'A dedicated team driving regional development and success.'
  },
  // {
  //   image: '/images/trade.png',
  //   headline: 'Cross-Border Trade',
  //   subheadline: 'Access New Markets',
  //   subtitle: 'Lower your logistics costs significantly with direct access to DRC and South Sudan.'
  // },
  // {
  //   image: '/images/agric.png',
  //   headline: 'Agro-Industrial Hub',
  //   subheadline: 'Regional Processing',
  //   subtitle: 'Guaranteed raw material supply for seamless operations.'
  // }
]

let timer = null

function nextSlide() { currentSlide.value = (currentSlide.value + 1) % slides.length }
function prevSlide()  { currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length }
function goToSlide(index) { currentSlide.value = index }
function startAutoPlay() { stopAutoPlay(); timer = setInterval(nextSlide, 5500) }
function stopAutoPlay()  { if (timer) { clearInterval(timer); timer = null } }

// Core Activities photo slider
const coreSlide = ref(0)
const coreImages = [
  '/images/aruasez (39).jpeg',
  '/images/aruasez (8).jpeg',
  '/images/aruasez (36).jpeg',
  '/images/aruasez (37).jpeg'
]
let coreTimer = null

function nextCoreSlide() { coreSlide.value = (coreSlide.value + 1) % coreImages.length }
function prevCoreSlide() { coreSlide.value = (coreSlide.value - 1 + coreImages.length) % coreImages.length }
function goToCoreSlide(index) { coreSlide.value = index }
function startCoreAutoPlay() { stopCoreAutoPlay(); coreTimer = setInterval(nextCoreSlide, 4500) }
function stopCoreAutoPlay()  { if (coreTimer) { clearInterval(coreTimer); coreTimer = null } }

// Testimonials
const activeTestimonial = ref(0)
const testimonials = [
  {
    quote: 'Arua SEZ represents a transformative opportunity for West Nile. The strategic location, combined with a robust incentive package, makes it an unparalleled destination for industrial investment in the region.',
    name: 'Uganda Investment Authority',
    role: 'UIA — Investment Promotion Body',
    initials: 'UIA',
    color: 'linear-gradient(135deg, #D00004, #B30003)'
  },
  {
    quote: 'The proximity to three international borders and a consumer base of over 100 million people creates a logistics and distribution advantage that simply does not exist elsewhere in East Africa.',
    name: 'Regional Trade Analyst',
    role: 'East African Business Intelligence',
    initials: 'EA',
    color: 'linear-gradient(135deg, #D17F00, #B46A00)'
  },
  {
    quote: 'What sets Arua SEZ apart is the guaranteed raw material aggregation model. Investors do not have to worry about supply chain reliability — the SEZ removes that barrier entirely.',
    name: 'Manufacturing Sector Investor',
    role: 'Zone Prospective Tenant',
    initials: 'MI',
    color: 'linear-gradient(135deg, #0B0F19, #1E293B)'
  }
]

let testimonialTimer = null

onMounted(() => {
  startAutoPlay()
  startCoreAutoPlay()
  testimonialTimer = setInterval(() => {
    activeTestimonial.value = (activeTestimonial.value + 1) % testimonials.length
  }, 6000)
})

onUnmounted(() => {
  stopAutoPlay()
  stopCoreAutoPlay()
  if (testimonialTimer) clearInterval(testimonialTimer)
})
</script>
