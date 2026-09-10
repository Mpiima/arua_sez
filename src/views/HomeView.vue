<template>
  <div class="min-h-screen flex flex-col bg-white font-sans text-slate-800">
    <!-- Header Navigation -->
    <AppHeader />

    <main class="flex-grow">
      <!-- ═══════════════════════════════════════════════
           HERO SECTION: Background Image Slider & Clean Typography
           ═══════════════════════════════════════════════ -->
      <section 
        class="relative min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden"
        @mouseenter="stopAutoPlay"
        @mouseleave="startAutoPlay"
      >
        <!-- Background Slider Images -->
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
              class="w-full h-full object-cover object-center transition-transform duration-[7000ms] ease-out"
              :class="currentSlide === index ? 'scale-105' : 'scale-100'"
            />
          </div>
          <!-- Dark multi-layer gradients for optimum text readability -->
          <div class="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/40"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/30"></div>
        </div>

        <!-- Hero Content with Reduced Words & Decent Minimalist Layout -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10 w-full">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <!-- Left Headline & Actions -->
            <div class="lg:col-span-8 text-white space-y-5">
              <!-- Tagline Badge -->
              <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-[11px] font-semibold tracking-wider uppercase text-amber-300">
                <span class="w-2 h-2 rounded-full bg-[#D00004]"></span>
                <span>Arua Special Economic Zone</span>
              </div>

              <!-- Main Headline (Decent, Bold & Concise) -->
              <h1 class="font-heading font-black tracking-tight leading-[1.1] text-4xl sm:text-5xl lg:text-[52px]">
                <span class="block text-white">A Free Economic Zone.</span>
                <span class="block text-[#F59E0B] mt-1.5">Gateway to 100M+ Consumers.</span>
              </h1>

              <!-- Accent Underline -->
              <div class="w-14 h-1 bg-[#D00004] rounded-full"></div>

              <!-- Short, Decent Subtitle (Only 10 words) -->
              <p class="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-xl">
                Connecting regional trade and industry across Uganda, DRC, and South Sudan.
              </p>

              <!-- Action Buttons -->
              <div class="pt-1 flex flex-wrap items-center gap-3.5">
                <RouterLink 
                  to="/sectors" 
                  class="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-bold tracking-wider uppercase text-white bg-[#D00004] hover:bg-[#B30003] shadow-lg hover:shadow-xl transition-all"
                >
                  <span>EXPLORE SECTORS</span>
                  <span class="text-sm">→</span>
                </RouterLink>

                <RouterLink 
                  to="/incentives" 
                  class="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-bold tracking-wider uppercase text-white bg-black/40 hover:bg-black/60 border border-white/30 backdrop-blur-sm transition-all"
                >
                  <span>INCENTIVES</span>
                  <span class="text-sm text-[#F59E0B]">↓</span>
                </RouterLink>
              </div>
            </div>

            <!-- Right Floating Info Card (Minimalist & Decent) -->
            <div class="lg:col-span-4 flex justify-start lg:justify-end">
              <div class="w-full max-w-[320px] rounded-2xl bg-[#0B0F19]/90 backdrop-blur-md border border-white/10 p-5 shadow-2xl text-left divide-y divide-white/15">
                <!-- Item 1: Border Proximity -->
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

                <!-- Item 2: Cost Advantage -->
                <div class="flex items-center gap-3.5 py-3.5">
                  <svg class="w-8 h-8 text-[#F59E0B] flex-shrink-0" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8">
                    <circle cx="16" cy="16" r="12" stroke-width="1.8" />
                    <circle cx="16" cy="16" r="4.5" stroke-width="1.8" />
                    <path d="M16 4V11.5M16 20.5V28M4 16H11.5M20.5 16H28" stroke-linecap="round" stroke-width="1.8" />
                    <path d="M7.5 7.5L12.5 12.5M19.5 19.5L24.5 24.5M7.5 24.5L12.5 19.5M19.5 12.5L24.5 7.5" stroke-linecap="round" stroke-width="1.8" />
                  </svg>
                  <div class="h-8 w-px bg-white/20 mx-0.5 flex-shrink-0"></div>
                  <div>
                    <div class="text-[14px] font-bold text-white tracking-tight">20% Lower Cost</div>
                    <div class="text-[12px] text-slate-300">Regional Freight</div>
                  </div>
                </div>

                <!-- Item 3: Investor Focused -->
                <div class="flex items-center gap-3.5 pt-3.5">
                  <svg class="w-8 h-8 text-[#F59E0B] flex-shrink-0" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8">
                    <rect x="5" y="18" width="4" height="9" rx="1.5" stroke-linecap="round" />
                    <rect x="12" y="14" width="4" height="13" rx="1.5" stroke-linecap="round" />
                    <rect x="19" y="10" width="4" height="17" rx="1.5" stroke-linecap="round" />
                    <line x1="3" y1="27" x2="25" y2="27" stroke-linecap="round" />
                    <path d="M4 18L11 12L17 15L26 6" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M20 6H26V12" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="h-8 w-px bg-white/20 mx-0.5 flex-shrink-0"></div>
                  <div>
                    <div class="text-[14px] font-bold text-white tracking-tight">10-Yr Holiday</div>
                    <div class="text-[12px] text-slate-300">Tax &amp; Duty Free</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Slider Controls (Subtle Centered Bottom Pills) -->
        <div class="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-black/45 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
          <button 
            @click="prevSlide" 
            class="text-white/70 hover:text-white transition-colors text-sm px-1 font-bold"
            aria-label="Previous Slide"
          >
            ‹
          </button>
          
          <div class="flex items-center gap-1.5">
            <button 
              v-for="(_, i) in slides" 
              :key="i"
              @click="goToSlide(i)"
              class="h-1.5 rounded-full transition-all"
              :class="currentSlide === i ? 'w-6 bg-[#D00004]' : 'w-2 bg-white/40 hover:bg-white/70'"
              :aria-label="'Go to slide ' + (i + 1)"
            ></button>
          </div>

          <button 
            @click="nextSlide" 
            class="text-white/70 hover:text-white transition-colors text-sm px-1 font-bold"
            aria-label="Next Slide"
          >
            ›
          </button>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════
           KEY FIGURES / METRICS BAR
           ═══════════════════════════════════════════════ -->
      <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12 relative z-20">
        <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            <!-- Stat 1: Consumers (Gold) -->
            <div class="flex items-start gap-4 pt-4 sm:pt-0 sm:px-3">
              <div class="w-12 h-12 rounded-xl bg-amber-500/10 text-[#D17F00] flex items-center justify-center flex-shrink-0">
                <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke-linecap="round"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke-linecap="round"/>
                </svg>
              </div>
              <div>
                <div class="font-heading font-black text-3xl sm:text-4xl text-[#D17F00] leading-none">100M+</div>
                <div class="text-xs font-extrabold uppercase tracking-wider text-slate-800 mt-1">CONSUMERS</div>
                <div class="text-[11px] text-gray-500 mt-0.5">Within 100 km Radius</div>
              </div>
            </div>

            <!-- Stat 2: Cost Advantage (Red) -->
            <div class="flex items-start gap-4 pt-4 sm:pt-0 sm:px-4">
              <div class="w-12 h-12 rounded-xl bg-red-500/10 text-[#D00004] flex items-center justify-center flex-shrink-0">
                <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div>
                <div class="font-heading font-black text-3xl sm:text-4xl text-[#D00004] leading-none">Up to 20%</div>
                <div class="text-xs font-extrabold uppercase tracking-wider text-slate-800 mt-1">COST ADVANTAGE</div>
                <div class="text-[11px] text-gray-500 mt-0.5">Over Kampala &amp; Nairobi Freight</div>
              </div>
            </div>

            <!-- Stat 3: Land Size (Gold) -->
            <div class="flex items-start gap-4 pt-4 sm:pt-0 sm:px-4">
              <div class="w-12 h-12 rounded-xl bg-amber-500/10 text-[#D17F00] flex items-center justify-center flex-shrink-0">
                <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div>
                <div class="font-heading font-black text-3xl sm:text-4xl text-[#D17F00] leading-none">12.7+</div>
                <div class="text-xs font-extrabold uppercase tracking-wider text-slate-800 mt-1">HECTARES</div>
                <div class="text-[11px] text-gray-500 mt-0.5">Serviced Industrial Plots</div>
              </div>
            </div>

            <!-- Stat 4: Direct & Indirect Jobs (Red) -->
            <div class="flex items-start gap-4 pt-4 sm:pt-0 sm:px-4">
              <div class="w-12 h-12 rounded-xl bg-red-500/10 text-[#D00004] flex items-center justify-center flex-shrink-0">
                <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3 21h18" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div>
                <div class="font-heading font-black text-3xl sm:text-4xl text-[#D00004] leading-none">10 Yrs</div>
                <div class="text-xs font-extrabold uppercase tracking-wider text-slate-800 mt-1">TAX HOLIDAY</div>
                <div class="text-[11px] text-gray-500 mt-0.5">UIA Statutory Incentive</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════
           STRATEGIC ADVANTAGE & INTERACTIVE MAP
           ═══════════════════════════════════════════════ -->
      <section class="py-20 lg:py-24 bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <!-- Left Text Content -->
            <div class="lg:col-span-5 space-y-6">
              <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase">
                STRATEGIC ADVANTAGE
              </div>

              <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                Strategically Positioned.<br />
                Regionally Connected.
              </h2>

              <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
                Located in Arua City, West Nile, Arua SEZ delivers direct physical proximity to <strong>over 100 million consumers</strong> within a 100 km radius across Uganda, South Sudan, DRC, and CAR.
              </p>

              <!-- Highlights list -->
              <div class="space-y-3 pt-1">
                <div class="flex items-start gap-3">
                  <div class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">✓</div>
                  <p class="text-xs sm:text-sm text-slate-700"><strong>20% Lower Logistics Costs:</strong> Delivers products significantly cheaper than freight originating from Nairobi, Mombasa, or Kampala.</p>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">✓</div>
                  <p class="text-xs sm:text-sm text-slate-700"><strong>Direct Cross-Border Corridors:</strong> Immediate access to Eastern DRC, South Sudan, Central African Republic, and Northern Uganda.</p>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">✓</div>
                  <p class="text-xs sm:text-sm text-slate-700"><strong>Rapid Market Penetration:</strong> Local processing, packing, and distribution beat overseas imports from China and India in speed and price.</p>
                </div>
              </div>

              <div class="pt-2 flex items-center gap-4">
                <RouterLink 
                  to="/about" 
                  class="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-bold tracking-wider uppercase text-white bg-[#0B0F19] hover:bg-[#1E293B] shadow-md transition-all"
                >
                  <span>LEARN MORE ABOUT US</span>
                  <span class="text-sm text-[#F59E0B]">→</span>
                </RouterLink>

                <RouterLink 
                  to="/contact" 
                  class="text-xs font-bold tracking-wider uppercase text-[#D00004] hover:text-[#B30003] transition-colors"
                >
                  CONNECT YOUR BUSINESS →
                </RouterLink>
              </div>
            </div>

            <!-- Right Interactive Map Component -->
            <div class="lg:col-span-7 relative min-h-[480px] flex items-center justify-center">
              <UgandaInteractiveMap />
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════
           PRIORITY SECTORS PREVIEW: Clean 3-Card Snapshot
           ═══════════════════════════════════════════════ -->
      <section class="py-20 bg-[#F8FAFC] border-y border-slate-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">
                CORE ACTIVITIES
              </div>
              <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                High Turnover. Essential Goods.
              </h2>
            </div>

            <div class="text-left md:text-right">
              <RouterLink 
                to="/sectors" 
                class="inline-flex items-center gap-2 text-xs font-extrabold tracking-wider text-[#D00004] hover:text-[#B30003] uppercase transition-colors"
              >
                <span>VIEW ALL 6 PRIORITY SECTORS</span>
                <span class="text-sm">→</span>
              </RouterLink>
            </div>
          </div>

          <!-- 3 Refined Preview Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- 1: Agriculture & Agro-Processing -->
            <div class="group bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col hover:shadow-xl hover:border-amber-400 transition-all duration-300">
              <div class="relative h-48 overflow-hidden bg-slate-100">
                <img src="/images/agro.jpg" alt="Agro-processing in Arua SEZ" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                <div class="absolute -bottom-4 left-4 w-9 h-9 rounded-full bg-[#D17F00] border-2 border-white shadow-md flex items-center justify-center text-white z-10">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                </div>
              </div>
              <div class="p-6 pt-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 class="font-heading font-black text-sm uppercase tracking-wider text-slate-900 mb-2">
                    Agriculture &amp; Agro-Processing
                  </h3>
                  <p class="text-xs text-slate-600 leading-relaxed mb-4">
                    Industrial cleaning, sorting, packing, and refining of groundnuts, rice, palm oil, coffee, cassava, oilseeds, and shea butter.
                  </p>
                </div>
                <div class="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span class="text-[11px] font-bold text-[#D17F00] uppercase tracking-wider">High Volume Export</span>
                  <RouterLink to="/sectors" class="text-xs font-bold text-slate-900 hover:text-[#D00004]">Details →</RouterLink>
                </div>
              </div>
            </div>

            <!-- 2: Mining & Mineral Processing (GOLD REFINING) -->
            <div class="group bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col hover:shadow-xl hover:border-amber-400 transition-all duration-300">
              <div class="relative h-48 overflow-hidden bg-slate-900">
                <div class="absolute inset-0 bg-gradient-to-br from-amber-600/90 to-slate-950 flex items-center justify-center p-6 text-center">
                  <div class="space-y-1">
                    <span class="text-3xl">🪙</span>
                    <h4 class="text-white font-extrabold text-base tracking-wide">Gold &amp; Minerals</h4>
                    <p class="text-[11px] text-amber-200">Eastern DRC &amp; West Nile Corridors</p>
                  </div>
                </div>
                <div class="absolute -bottom-4 left-4 w-9 h-9 rounded-full bg-[#F59E0B] border-2 border-white shadow-md flex items-center justify-center text-white z-10">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
              </div>
              <div class="p-6 pt-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 class="font-heading font-black text-sm uppercase tracking-wider text-slate-900 mb-2">
                    Mining &amp; Mineral Processing
                  </h3>
                  <p class="text-xs text-slate-600 leading-relaxed mb-4">
                    Gold refining and mineral smelting, directly leveraging artisanal mining from Eastern Congo and newly identified mineral prospects in West Nile.
                  </p>
                </div>
                <div class="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span class="text-[11px] font-bold text-[#F59E0B] uppercase tracking-wider">High Capital Value</span>
                  <RouterLink to="/sectors" class="text-xs font-bold text-slate-900 hover:text-[#D00004]">Details →</RouterLink>
                </div>
              </div>
            </div>

            <!-- 3: Manufacturing & Industrial Alcohol -->
            <div class="group bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col hover:shadow-xl hover:border-slate-800 transition-all duration-300">
              <div class="relative h-48 overflow-hidden bg-slate-100">
                <img src="/images/manufacturing.jpg" alt="Manufacturing in Arua SEZ" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                <div class="absolute -bottom-4 left-4 w-9 h-9 rounded-full bg-[#0B0F19] border-2 border-white shadow-md flex items-center justify-center text-white z-10">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
                </div>
              </div>
              <div class="p-6 pt-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 class="font-heading font-black text-sm uppercase tracking-wider text-slate-900 mb-2">
                    Manufacturing &amp; Ethanol
                  </h3>
                  <p class="text-xs text-slate-600 leading-relaxed mb-4">
                    Ethanol and industrial alcohol from cassava and sugarcane; confectionery; aromatic soaps; plus steel lines, timber, and bonded transit yards.
                  </p>
                </div>
                <div class="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span class="text-[11px] font-bold text-slate-800 uppercase tracking-wider">Fast Moving Goods</span>
                  <RouterLink to="/sectors" class="text-xs font-bold text-slate-900 hover:text-[#D00004]">Details →</RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════
           WHY ARUA SEZ: Clean Investor Advantages (3 Cards)
           ═══════════════════════════════════════════════ -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-14">
            <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">
              WHY INVEST IN ARUA SEZ
            </div>
            <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              A Complete Platform for Industrial Growth
            </h2>
            <p class="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Everything required to establish, operate, and scale your manufacturing or cross-border trade operations.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-lg transition-all">
              <div class="w-12 h-12 rounded-xl bg-red-100 text-[#D00004] flex items-center justify-center font-black mb-5">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"/></svg>
              </div>
              <h3 class="font-heading font-bold text-lg text-slate-900 mb-2">Statutory Fiscal Incentives</h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                10-year corporate income tax holidays, 0% import duty on machinery and plant equipment, and full foreign exchange repatriation.
              </p>
              <RouterLink to="/incentives" class="text-xs font-bold text-[#D00004] hover:underline">
                View Tax Framework →
              </RouterLink>
            </div>

            <div class="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-lg transition-all">
              <div class="w-12 h-12 rounded-xl bg-amber-100 text-[#D17F00] flex items-center justify-center font-black mb-5">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3 class="font-heading font-bold text-lg text-slate-900 mb-2">Plug &amp; Play Serviced Plots</h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Dedicated high-voltage industrial power, treated water, heavy-vehicle paved roads, and on-site customs post in Arua City.
              </p>
              <RouterLink to="/incentives" class="text-xs font-bold text-[#D17F00] hover:underline">
                View Infrastructure Specs →
              </RouterLink>
            </div>

            <div class="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-lg transition-all">
              <div class="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black mb-5">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </div>
              <h3 class="font-heading font-bold text-lg text-slate-900 mb-2">Fast-Track Licensing</h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                One-stop administrative clearance for URSB incorporation, UIA investment licensing, NEMA environmental clearances, and work permits.
              </p>
              <RouterLink to="/contact" class="text-xs font-bold text-slate-900 hover:underline">
                Partner With Us →
              </RouterLink>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════
           CALL TO ACTION BANNER: Clean & Focused
           ═══════════════════════════════════════════════ -->
      <section class="py-16 bg-[#0B0F19] text-white">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
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
            <RouterLink 
              to="/contact" 
              class="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase text-white bg-[#D00004] hover:bg-[#B30003] shadow-lg transition-all"
            >
              <span>SUBMIT EXPRESSION OF INTEREST</span>
              <span class="text-sm">→</span>
            </RouterLink>
            <RouterLink 
              to="/about" 
              class="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase text-slate-200 bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
            >
              <span>ABOUT THE ZONE</span>
            </RouterLink>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import UgandaInteractiveMap from '@/components/UgandaInteractiveMap.vue'

// Background Slider Configuration
const currentSlide = ref(0)
const slides = [
  {
    image: '/images/hero.jpg',
    title: 'Master-Planned Free Economic Zone',
    subtitle: 'Arua City, West Nile'
  },
  {
    image: '/images/manufacturing.jpg',
    title: 'Heavy & Light Manufacturing Hub',
    subtitle: 'Serviced Industrial Plots'
  },
  {
    image: '/images/logistics.jpg',
    title: 'Cross-Border Freight & Trade Corridor',
    subtitle: 'Gateway to DRC & South Sudan'
  },
  {
    image: '/images/warehousing.jpg',
    title: 'Bonded Warehousing & Storage',
    subtitle: 'On-Site Customs Clearance'
  },
  {
    image: '/images/agro.jpg',
    title: 'Agro-Industrial Value Addition',
    subtitle: 'Regional Processing Hub'
  }
]

let timer = null

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

function goToSlide(index) {
  currentSlide.value = index
}

function startAutoPlay() {
  stopAutoPlay()
  timer = setInterval(nextSlide, 5000)
}

function stopAutoPlay() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>
