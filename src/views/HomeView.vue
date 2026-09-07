<template>
  <div class="min-h-screen flex flex-col bg-white font-sans text-slate-800">
    <!-- Header Navigation -->
    <AppHeader />

    <main class="flex-grow">
      <!-- ═══════════════════════════════════════════════
           HERO SECTION
           ═══════════════════════════════════════════════ -->
      <section class="relative min-h-[620px] lg:min-h-[680px] flex items-center overflow-hidden">
        <!-- Background Hero Image -->
        <div class="absolute inset-0 z-0">
          <img 
            src="/images/hero.jpg" 
            alt="Arua SEZ Modern Industrial Park Aerial View" 
            class="w-full h-full object-cover object-center"
          />
          <!-- Multi-stop gradient overlay to ensure text legibility while showing the industrial park -->
          <div class="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-transparent"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-black/20"></div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10 w-full">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <!-- Left Headline & Actions -->
            <div class="lg:col-span-8 text-white space-y-6">
              <!-- Main Headings -->
              <h1 class="font-heading font-black tracking-tight leading-[1.1] text-4xl sm:text-5xl lg:text-[56px]">
                <span class="block text-white">Gateway to</span>
                <span class="block text-white">Regional Trade.</span>
                <span class="block text-[#EAB308] mt-1">Platform for</span>
                <span class="block text-[#EAB308]">Industrial Growth.</span>
              </h1>

              <!-- Accent Underline -->
              <div class="w-16 h-1.5 bg-[#EAB308] rounded-full"></div>

              <!-- Subtitle Paragraph -->
              <p class="text-base sm:text-lg text-white/90 font-normal leading-relaxed max-w-xl">
                A strategic investment destination in West Nile, connecting businesses to growing markets across Uganda and the wider East and Central African region.
              </p>

              <!-- Action Buttons -->
              <div class="pt-2 flex flex-wrap items-center gap-4">
                <a 
                  href="#industries" 
                  class="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase text-white bg-[#0E5832] hover:bg-[#093e22] shadow-xl hover:shadow-2xl transition-all"
                >
                  <span>EXPLORE INVESTMENT OPPORTUNITIES</span>
                  <span class="text-sm">→</span>
                </a>

                <button 
                  type="button"
                  class="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase text-white bg-black/35 hover:bg-black/50 border border-white/40 backdrop-blur-sm transition-all"
                >
                  <span class="w-5 h-5 rounded-full border border-white flex items-center justify-center text-[10px]">▶</span>
                  <span>WATCH VIDEO</span>
                </button>
              </div>
            </div>

            <!-- Right Floating Info Card -->
            <div class="lg:col-span-4 flex justify-start lg:justify-end">
              <div class="w-full max-w-[340px] sm:max-w-[360px] rounded-2xl bg-[#0D2F1D]/90 backdrop-blur-md border border-white/10 p-6 sm:p-7 shadow-2xl text-left divide-y divide-white/15">
                <!-- Item 1: Strategic Location -->
                <div class="flex items-center gap-3.5 pb-5">
                  <svg class="w-10 h-10 text-[#E5A93C] flex-shrink-0" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 29C16 29 25 19.5 25 12.5C25 7.80558 20.9706 4 16 4C11.0294 4 7 7.80558 7 12.5C7 19.5 16 29 16 29Z" />
                    <circle cx="16" cy="12.5" r="4.5" stroke-width="1.8" />
                  </svg>
                  <div class="h-10 w-px bg-white/20 mx-1 flex-shrink-0"></div>
                  <div>
                    <h3 class="text-[15px] font-bold text-white tracking-tight">Strategic Location</h3>
                    <p class="text-[13px] text-[#D1D5DB] mt-0.5 font-normal">West Nile, Uganda</p>
                  </div>
                </div>

                <!-- Item 2: Regional Access -->
                <div class="flex items-center gap-3.5 py-5">
                  <svg class="w-10 h-10 text-[#E5A93C] flex-shrink-0" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8">
                    <circle cx="16" cy="16" r="12" stroke-width="1.8" />
                    <circle cx="16" cy="16" r="4.5" stroke-width="1.8" />
                    <path d="M16 4V11.5M16 20.5V28M4 16H11.5M20.5 16H28" stroke-linecap="round" stroke-width="1.8" />
                    <path d="M7.5 7.5L12.5 12.5M19.5 19.5L24.5 24.5M7.5 24.5L12.5 19.5M19.5 12.5L24.5 7.5" stroke-linecap="round" stroke-width="1.8" />
                  </svg>
                  <div class="h-12 w-px bg-white/20 mx-1 flex-shrink-0"></div>
                  <div>
                    <h3 class="text-[15px] font-bold text-white tracking-tight">Regional Access</h3>
                    <p class="text-[13px] text-[#D1D5DB] mt-0.5 font-normal leading-snug">
                      Uganda, South Sudan,<br />DRC &amp; Beyond
                    </p>
                  </div>
                </div>

                <!-- Item 3: Investor Focused -->
                <div class="flex items-center gap-3.5 pt-5">
                  <svg class="w-10 h-10 text-[#E5A93C] flex-shrink-0" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8">
                    <rect x="5" y="18" width="4" height="9" rx="1.5" stroke-linecap="round" />
                    <rect x="12" y="14" width="4" height="13" rx="1.5" stroke-linecap="round" />
                    <rect x="19" y="10" width="4" height="17" rx="1.5" stroke-linecap="round" />
                    <line x1="3" y1="27" x2="25" y2="27" stroke-linecap="round" />
                    <path d="M4 18L11 12L17 15L26 6" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M20 6H26V12" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="h-12 w-px bg-white/20 mx-1 flex-shrink-0"></div>
                  <div>
                    <h3 class="text-[15px] font-bold text-white tracking-tight">Investor Focused</h3>
                    <p class="text-[13px] text-[#D1D5DB] mt-0.5 font-normal leading-snug">
                      Built for Business.<br />Designed for Growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════
           KEY FIGURES / METRICS BAR (Floating Card)
           ═══════════════════════════════════════════════ -->
      <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-14 relative z-20">
        <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            <!-- Stat 1: Hectares -->
            <div class="flex items-start gap-4 pt-4 sm:pt-0 sm:px-3">
              <div class="w-12 h-12 rounded-xl bg-emerald-50 text-[#0E5832] flex items-center justify-center flex-shrink-0">
                <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div>
                <div class="font-heading font-black text-3xl sm:text-4xl text-[#0E5832] leading-none">12.7+</div>
                <div class="text-xs font-extrabold uppercase tracking-wider text-slate-800 mt-1">HECTARES</div>
                <div class="text-[11px] text-gray-500 mt-0.5">Strategic Development Area</div>
              </div>
            </div>

            <!-- Stat 2: Sq Metres -->
            <div class="flex items-start gap-4 pt-4 sm:pt-0 sm:px-4">
              <div class="w-12 h-12 rounded-xl bg-amber-50 text-[#D97706] flex items-center justify-center flex-shrink-0">
                <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 21h18M3 10l9-7 9 7v11H3V10z" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9 21V12h6v9" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div>
                <div class="font-heading font-black text-3xl sm:text-4xl text-[#D97706] leading-none">45,000+</div>
                <div class="text-xs font-extrabold uppercase tracking-wider text-slate-800 mt-1">SQ. METRES</div>
                <div class="text-[11px] text-gray-500 mt-0.5">Planned Warehouse Space</div>
              </div>
            </div>

            <!-- Stat 3: Initial Investment -->
            <div class="flex items-start gap-4 pt-4 sm:pt-0 sm:px-4">
              <div class="w-12 h-12 rounded-xl bg-emerald-50 text-[#0E5832] flex items-center justify-center flex-shrink-0">
                <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M12 7v10M15 9.5a2.5 2.5 0 00-5 0c0 3 5 2 5 5a2.5 2.5 0 01-5 0" stroke-linecap="round"/>
                </svg>
              </div>
              <div>
                <div class="font-heading font-black text-3xl sm:text-4xl text-[#0E5832] leading-none">$12.7M</div>
                <div class="text-xs font-extrabold uppercase tracking-wider text-slate-800 mt-1">INITIAL INVESTMENT</div>
                <div class="text-[11px] text-gray-500 mt-0.5">For Phase One Development</div>
              </div>
            </div>

            <!-- Stat 4: Direct Jobs -->
            <div class="flex items-start gap-4 pt-4 sm:pt-0 sm:px-4">
              <div class="w-12 h-12 rounded-xl bg-amber-50 text-[#D97706] flex items-center justify-center flex-shrink-0">
                <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke-linecap="round"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke-linecap="round"/>
                </svg>
              </div>
              <div>
                <div class="font-heading font-black text-3xl sm:text-4xl text-[#D97706] leading-none">450+</div>
                <div class="text-xs font-extrabold uppercase tracking-wider text-slate-800 mt-1">DIRECT JOBS</div>
                <div class="text-[11px] text-gray-500 mt-0.5">Target in Phase One*</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════
           WHY ARUA? STRATEGICALLY POSITIONED
           ═══════════════════════════════════════════════ -->
      <section id="the-zone" class="py-24 bg-[#F8FAF7] overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <!-- Left Text Content -->
            <div class="lg:col-span-5 space-y-6">
              <div class="text-xs font-extrabold tracking-widest text-[#0E5832] uppercase">
                WHY ARUA?
              </div>

              <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                Strategically Positioned.<br />
                Regionally Connected.
              </h2>

              <p class="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md">
                Arua SEZ is located in Uganda's West Nile region, providing direct access to key markets and trade routes across East and Central Africa.
              </p>

              <div>
                <a 
                  href="#trade" 
                  class="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase text-white bg-[#0E5832] hover:bg-[#093e22] shadow-md hover:shadow-lg transition-all"
                >
                  <span>DISCOVER THE ADVANTAGE</span>
                  <span class="text-sm">→</span>
                </a>
              </div>
            </div>

            <!-- Right Interactive Map & Connecting Cards -->
            <div class="lg:col-span-7 relative min-h-[500px] flex items-center justify-center">
              <UgandaInteractiveMap />
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════
           INVESTMENT OPPORTUNITIES / 6 INDUSTRY SECTORS
           ═══════════════════════════════════════════════ -->
      <section id="industries" class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Section Header -->
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div class="text-xs font-extrabold tracking-widest text-[#0E5832] uppercase mb-2">
                INVESTMENT OPPORTUNITIES
              </div>
              <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                Endless Opportunities.<br />
                Real Impact.
              </h2>
            </div>

            <div class="max-w-sm text-left md:text-right">
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
                Arua SEZ is designed to attract industries that add value, create jobs, and drive sustainable economic growth.
              </p>
              <a 
                href="#industries" 
                class="inline-flex items-center gap-1.5 text-xs font-extrabold tracking-wider text-[#0E5832] hover:text-[#093e22] uppercase transition-colors"
              >
                <span>VIEW ALL OPPORTUNITIES</span>
                <span>→</span>
              </a>
            </div>
          </div>

          <!-- 6 Column Grid of Industry Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
            <!-- Card 1: Agro-Processing -->
            <div class="group bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col hover:shadow-xl hover:border-emerald-300 transition-all duration-300">
              <!-- Card Image Header -->
              <div class="relative h-44 sm:h-48 overflow-hidden bg-slate-100">
                <img 
                  src="/images/agro.jpg" 
                  alt="Agro-Processing Tractor" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <!-- Overlapping Circular Icon Badge -->
                <div class="absolute -bottom-4 left-4 w-9 h-9 rounded-full bg-[#166534] border-2 border-white shadow-md flex items-center justify-center text-white z-10">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <!-- Card Body -->
              <div class="p-4 pt-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 class="font-heading font-black text-xs uppercase tracking-wider text-slate-900 mb-2">
                    AGRO-PROCESSING
                  </h3>
                  <p class="text-[11px] text-slate-500 leading-relaxed">
                    Unlock value from abundant agricultural resources through processing and packaging.
                  </p>
                </div>
                <div class="pt-4">
                  <a href="#invest" class="inline-flex items-center gap-1 text-[11px] font-bold text-[#166534] group-hover:text-[#0E5832] transition-colors uppercase tracking-wider">
                    <span>EXPLORE</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Card 2: Manufacturing -->
            <div class="group bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col hover:shadow-xl hover:border-emerald-300 transition-all duration-300">
              <div class="relative h-44 sm:h-48 overflow-hidden bg-slate-100">
                <img 
                  src="/images/manufacturing.jpg" 
                  alt="Factory Manufacturing" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute -bottom-4 left-4 w-9 h-9 rounded-full bg-[#166534] border-2 border-white shadow-md flex items-center justify-center text-white z-10">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <div class="p-4 pt-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 class="font-heading font-black text-xs uppercase tracking-wider text-slate-900 mb-2">
                    MANUFACTURING
                  </h3>
                  <p class="text-[11px] text-slate-500 leading-relaxed">
                    Build and produce for local, regional and international markets.
                  </p>
                </div>
                <div class="pt-4">
                  <a href="#invest" class="inline-flex items-center gap-1 text-[11px] font-bold text-[#166534] group-hover:text-[#0E5832] transition-colors uppercase tracking-wider">
                    <span>EXPLORE</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Card 3: Warehousing -->
            <div class="group bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col hover:shadow-xl hover:border-emerald-300 transition-all duration-300">
              <div class="relative h-44 sm:h-48 overflow-hidden bg-slate-100">
                <img 
                  src="/images/warehousing.jpg" 
                  alt="Modern Warehousing" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute -bottom-4 left-4 w-9 h-9 rounded-full bg-[#166534] border-2 border-white shadow-md flex items-center justify-center text-white z-10">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              </div>
              <div class="p-4 pt-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 class="font-heading font-black text-xs uppercase tracking-wider text-slate-900 mb-2">
                    WAREHOUSING
                  </h3>
                  <p class="text-[11px] text-slate-500 leading-relaxed">
                    Modern storage, sorting, packaging and distribution facilities.
                  </p>
                </div>
                <div class="pt-4">
                  <a href="#invest" class="inline-flex items-center gap-1 text-[11px] font-bold text-[#166534] group-hover:text-[#0E5832] transition-colors uppercase tracking-wider">
                    <span>EXPLORE</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Card 4: Logistics -->
            <div class="group bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col hover:shadow-xl hover:border-emerald-300 transition-all duration-300">
              <div class="relative h-44 sm:h-48 overflow-hidden bg-slate-100">
                <img 
                  src="/images/logistics.jpg" 
                  alt="Freight Trucks Logistics" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute -bottom-4 left-4 w-9 h-9 rounded-full bg-[#166534] border-2 border-white shadow-md flex items-center justify-center text-white z-10">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                </div>
              </div>
              <div class="p-4 pt-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 class="font-heading font-black text-xs uppercase tracking-wider text-slate-900 mb-2">
                    LOGISTICS
                  </h3>
                  <p class="text-[11px] text-slate-500 leading-relaxed">
                    Efficient movement of goods supported by strategic infrastructure.
                  </p>
                </div>
                <div class="pt-4">
                  <a href="#invest" class="inline-flex items-center gap-1 text-[11px] font-bold text-[#166534] group-hover:text-[#0E5832] transition-colors uppercase tracking-wider">
                    <span>EXPLORE</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Card 5: Food & Fish Processing -->
            <div class="group bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col hover:shadow-xl hover:border-emerald-300 transition-all duration-300">
              <div class="relative h-44 sm:h-48 overflow-hidden bg-slate-100">
                <img 
                  src="/images/fish.jpg" 
                  alt="Fresh Fish Processing" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute -bottom-4 left-4 w-9 h-9 rounded-full bg-[#166534] border-2 border-white shadow-md flex items-center justify-center text-white z-10">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <!-- Fish outline icon -->
                    <path d="M18 12c-4 4-9 4-13 0 4-4 9-4 13 0z" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18 12l4-3v6l-4-3z"/>
                    <circle cx="8" cy="11.5" r="1" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <div class="p-4 pt-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 class="font-heading font-black text-xs uppercase tracking-wider text-slate-900 mb-2">
                    FOOD &amp; FISH PROCESSING
                  </h3>
                  <p class="text-[11px] text-slate-500 leading-relaxed">
                    Processing and value addition for food and fish products.
                  </p>
                </div>
                <div class="pt-4">
                  <a href="#invest" class="inline-flex items-center gap-1 text-[11px] font-bold text-[#166534] group-hover:text-[#0E5832] transition-colors uppercase tracking-wider">
                    <span>EXPLORE</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Card 6: Export & Trade -->
            <div class="group bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col hover:shadow-xl hover:border-emerald-300 transition-all duration-300">
              <div class="relative h-44 sm:h-48 overflow-hidden bg-slate-100">
                <img 
                  src="/images/trade.jpg" 
                  alt="Global Export and Trade" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute -bottom-4 left-4 w-9 h-9 rounded-full bg-[#166534] border-2 border-white shadow-md flex items-center justify-center text-white z-10">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                  </svg>
                </div>
              </div>
              <div class="p-4 pt-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 class="font-heading font-black text-xs uppercase tracking-wider text-slate-900 mb-2">
                    EXPORT &amp; TRADE
                  </h3>
                  <p class="text-[11px] text-slate-500 leading-relaxed">
                    Connecting locally produced goods to regional and international markets.
                  </p>
                </div>
                <div class="pt-4">
                  <a href="#invest" class="inline-flex items-center gap-1 text-[11px] font-bold text-[#166534] group-hover:text-[#0E5832] transition-colors uppercase tracking-wider">
                    <span>EXPLORE</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════
           BOTTOM BANNER CALL TO ACTION
           ═══════════════════════════════════════════════ -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div class="bg-[#092918] rounded-2xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          <!-- Subtle ambient pattern -->
          <div class="absolute -right-16 -top-16 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <!-- Left Branding & Big Tagline -->
            <div class="lg:col-span-4 flex items-center gap-4">
              <!-- Large Trend Up Circle Icon -->
              <div class="w-16 h-16 rounded-full border border-white/25 flex items-center justify-center flex-shrink-0 text-white">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21h18" />
                </svg>
              </div>

              <div>
                <h3 class="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-snug">
                  Your Business. Our Platform.<br />
                  Regional Opportunity.
                </h3>
              </div>
            </div>

            <!-- Middle Mission Paragraph & Golden Button -->
            <div class="lg:col-span-5 space-y-4">
              <p class="text-xs text-white/80 leading-relaxed max-w-sm">
                Join a community of investors and businesses building the future of industry and trade in West Nile and beyond.
              </p>

              <div>
                <RouterLink 
                  to="/admin" 
                  class="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-black tracking-wider uppercase text-slate-950 bg-[#EAB308] hover:bg-amber-400 shadow-lg hover:shadow-xl transition-all"
                >
                  <span>START YOUR INVESTMENT JOURNEY</span>
                  <span class="text-sm">→</span>
                </RouterLink>
              </div>
            </div>

            <!-- Right Two Feature Highlights -->
            <div class="lg:col-span-3 space-y-4 border-t lg:border-t-0 lg:border-l border-white/15 pt-6 lg:pt-0 lg:pl-6">
              <!-- Feature 1 -->
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-full bg-[#EAB308]/15 border border-[#EAB308]/40 flex items-center justify-center flex-shrink-0 text-[#EAB308] mt-0.5">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xs font-bold text-white tracking-wide">Business Friendly</h4>
                  <p class="text-[11px] text-white/70 mt-0.5 leading-snug">Streamlined processes and investor support.</p>
                </div>
              </div>

              <!-- Feature 2 -->
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-full bg-[#EAB308]/15 border border-[#EAB308]/40 flex items-center justify-center flex-shrink-0 text-[#EAB308] mt-0.5">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xs font-bold text-white tracking-wide">Future Ready</h4>
                  <p class="text-[11px] text-white/70 mt-0.5 leading-snug">Infrastructure and policies designed for growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Public Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import UgandaInteractiveMap from '@/components/UgandaInteractiveMap.vue'
import { RouterLink } from 'vue-router'
</script>
