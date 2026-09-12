<template>
  <div class="min-h-screen flex flex-col bg-white font-sans text-slate-800">
    <AppHeader />

    <main class="flex-grow">
      <!-- ══════════════════════════════════════════════
           PAGE HERO — Dark with animated grid
           ══════════════════════════════════════════════ -->
      <section class="relative py-24 lg:py-32 bg-[#0B0F19] text-white overflow-hidden">
        <!-- Animated mesh grid background -->
        <div class="absolute inset-0 opacity-[0.06]">
          <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="res-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M48 0L0 0 0 48" fill="none" stroke="#ffffff" stroke-width="0.8"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#res-grid)"/>
          </svg>
        </div>
        <!-- Gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-br from-[#0B0F19] via-[#0B0F19]/95 to-[#1a0a00]/80"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-[11px] font-semibold tracking-wider uppercase text-amber-300 mb-6">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              Resources &amp; Downloads
            </div>

            <h1 class="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
              Investor Resource<br/>
              <span class="text-[#F59E0B]">Centre</span>
            </h1>
            <p class="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Access brochures, investment guides, policy frameworks, sector fact-sheets and regulatory documents — everything you need to make an informed decision about Arua SEZ.
            </p>

            <div class="mt-10 flex flex-wrap gap-6">
              <div v-for="stat in heroStats" :key="stat.label" class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0" v-html="stat.icon"></div>
                <div>
                  <div class="text-lg font-black text-white leading-none">{{ stat.value }}</div>
                  <div class="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">{{ stat.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════════════════
           FILTER TABS
           ══════════════════════════════════════════════ -->
      <section class="sticky top-[80px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            <button
              v-for="cat in categories"
              :key="cat.id"
              @click="activeCategory = cat.id"
              class="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold tracking-wide uppercase transition-all duration-200"
              :class="activeCategory === cat.id
                ? 'bg-[#D00004] text-white shadow-md'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'"
            >
              <span v-html="cat.icon" class="opacity-80"></span>
              {{ cat.label }}
              <span class="ml-0.5 px-1.5 py-0.5 rounded-full text-[9px] font-bold"
                    :class="activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-500'">
                {{ cat.count }}
              </span>
            </button>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════════════════
           FEATURED DOCUMENT
           ══════════════════════════════════════════════ -->
      <section class="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            class="scroll-reveal"
            :class="featuredRevealed ? 'reveal-in' : 'reveal-out'"
            :ref="featuredRevealRef"
          >
            <div class="relative overflow-hidden rounded-3xl bg-[#0B0F19] p-8 sm:p-12 border border-slate-800 shadow-2xl">
              <div class="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
              <div class="absolute bottom-0 left-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl pointer-events-none"></div>

              <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div class="lg:col-span-7 space-y-5">
                  <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-[10px] font-bold tracking-widest uppercase text-amber-300">
                    <span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                    Featured Document
                  </div>
                  <h2 class="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                    Arua SEZ Investor<br/>
                    <span class="text-[#F59E0B]">Prospectus 2025</span>
                  </h2>
                  <p class="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                    The comprehensive investment guide covering infrastructure capacity, fiscal incentive frameworks, sector opportunities, governance structures, and the complete 19-point incentive package for prospective tenants and investors.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tag in ['PDF · 4.2 MB', '68 Pages', 'Updated Sep 2025', 'English']" :key="tag"
                          class="px-2.5 py-1 rounded-md bg-white/10 text-slate-300 text-[10px] font-semibold tracking-wide">
                      {{ tag }}
                    </span>
                  </div>
                  <div class="flex flex-wrap items-center gap-3 pt-2">
                    <a href="#" @click.prevent="handleDownload('Investor Prospectus 2025')"
                       class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D00004] hover:bg-[#B30003] text-white text-xs font-bold tracking-wider uppercase shadow-lg hover:shadow-xl transition-all group">
                      <svg class="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                      </svg>
                      Download Prospectus
                    </a>
                    <RouterLink to="/contact"
                       class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold tracking-wider uppercase border border-white/20 transition-all">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      Request Printed Copy
                    </RouterLink>
                  </div>
                </div>

                <!-- Document preview mockup -->
                <div class="lg:col-span-5 flex justify-center lg:justify-end">
                  <div class="relative w-56 sm:w-64">
                    <div class="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
                      <div class="h-8 bg-[#D00004] flex items-center px-4 gap-1.5">
                        <div class="w-2 h-2 rounded-full bg-red-300/60"></div>
                        <div class="w-2 h-2 rounded-full bg-amber-300/60"></div>
                        <div class="w-2 h-2 rounded-full bg-green-300/60"></div>
                      </div>
                      <div class="p-5 space-y-3">
                        <div class="flex items-center gap-3 mb-4">
                          <img src="/arua_sez_logo.svg" alt="Arua SEZ" class="h-8 w-auto"/>
                        </div>
                        <div class="h-2.5 bg-slate-800 rounded-full w-4/5"></div>
                        <div class="h-2 bg-amber-400 rounded-full w-3/5"></div>
                        <div class="mt-3 space-y-1.5">
                          <div class="h-1.5 bg-slate-200 rounded-full w-full"></div>
                          <div class="h-1.5 bg-slate-200 rounded-full w-5/6"></div>
                          <div class="h-1.5 bg-slate-200 rounded-full w-4/6"></div>
                          <div class="h-1.5 bg-slate-100 rounded-full w-full"></div>
                          <div class="h-1.5 bg-slate-100 rounded-full w-3/4"></div>
                        </div>
                        <div class="mt-3 grid grid-cols-2 gap-2">
                          <div class="h-10 bg-slate-100 rounded-lg"></div>
                          <div class="h-10 bg-amber-50 rounded-lg border border-amber-200"></div>
                        </div>
                        <div class="space-y-1.5 mt-2">
                          <div class="h-1.5 bg-slate-100 rounded-full"></div>
                          <div class="h-1.5 bg-slate-100 rounded-full w-5/6"></div>
                          <div class="h-1.5 bg-slate-100 rounded-full w-2/3"></div>
                        </div>
                      </div>
                    </div>
                    <div class="absolute -top-3 -right-3 w-12 h-12 bg-[#D00004] rounded-xl shadow-lg flex items-center justify-center">
                      <span class="text-white text-[10px] font-black tracking-wider">PDF</span>
                    </div>
                    <div class="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-900 rounded-full border border-slate-700 flex items-center gap-1.5 whitespace-nowrap">
                      <svg class="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/>
                      </svg>
                      <span class="text-[10px] font-bold text-white">1,240+ downloads</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════════════════
           DOCUMENT LIBRARY GRID
           ══════════════════════════════════════════════ -->
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">Document Library</div>
              <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                {{ activeCategoryLabel }}
              </h2>
            </div>
            <div class="text-sm text-slate-500">
              Showing <span class="font-bold text-slate-800">{{ filteredDocs.length }}</span> documents
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="(doc, index) in filteredDocs"
              :key="doc.id"
              :ref="(el) => { if (el) docRefs[index] = el }"
              class="scroll-reveal group"
              :class="docRevealed[index] ? 'reveal-in' : 'reveal-out'"
              :style="{ transitionDelay: `${(index % 3) * 80}ms` }"
            >
              <div class="h-full flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-300">
                <div class="h-1.5 w-full" :class="doc.accentColor"></div>
                <div class="p-6 flex flex-col flex-1">
                  <div class="flex items-start justify-between gap-3 mb-4">
                    <div class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" :class="doc.iconBg">
                      <span v-html="doc.icon" :class="doc.iconColor"></span>
                    </div>
                    <span class="flex-shrink-0 px-2 py-0.5 rounded text-[9px] font-black tracking-widest uppercase" :class="doc.typeBadge">
                      {{ doc.fileType }}
                    </span>
                  </div>
                  <div class="text-[10px] font-extrabold tracking-widest uppercase mb-1.5" :class="doc.catColor">
                    {{ doc.category }}
                  </div>
                  <h3 class="font-heading font-bold text-sm sm:text-base text-slate-900 leading-snug mb-2 group-hover:text-[#D00004] transition-colors">
                    {{ doc.title }}
                  </h3>
                  <p class="text-[11px] sm:text-xs text-slate-500 leading-relaxed flex-1 mb-4">
                    {{ doc.description }}
                  </p>
                  <div class="flex items-center gap-3 text-[10px] text-slate-400 mb-5">
                    <span class="flex items-center gap-1">
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                      {{ doc.pages }} pages
                    </span>
                    <span class="flex items-center gap-1">
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                      {{ doc.fileSize }}
                    </span>
                    <span class="flex items-center gap-1 ml-auto">
                      <svg class="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                      {{ doc.downloads }}
                    </span>
                  </div>
                  <button
                    @click="handleDownload(doc.title)"
                    class="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all duration-200 group-hover:shadow-md"
                    :class="doc.btnClass"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div v-if="filteredDocs.length === 0" class="text-center py-20">
            <div class="w-16 h-16 mx-auto rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            </div>
            <p class="text-slate-500 text-sm">No documents in this category yet.</p>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════════════════
           REQUEST A CUSTOM PACK SECTION
           ══════════════════════════════════════════════ -->
      <section class="py-20 bg-slate-50 border-t border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            class="scroll-reveal"
            :class="ctaRevealed ? 'reveal-in' : 'reveal-out'"
            :ref="ctaRevealRef"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <!-- Physical Mail Pack -->
              <div class="relative overflow-hidden rounded-3xl bg-[#0B0F19] p-8 sm:p-10 border border-slate-800 text-white group hover:border-amber-500/30 transition-all duration-300">
                <div class="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div class="relative z-10 space-y-5">
                  <div class="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/></svg>
                  </div>
                  <div>
                    <div class="text-[10px] font-extrabold tracking-widest text-amber-300 uppercase mb-2">Physical Pack</div>
                    <h3 class="font-heading font-bold text-xl sm:text-2xl text-white mb-3">Request a Printed Investor Kit</h3>
                    <p class="text-sm text-slate-300 leading-relaxed">
                      Receive a curated physical package — printed prospectus, sector brochures, maps, and a personalised cover letter — delivered to your office.
                    </p>
                  </div>
                  <ul class="space-y-2 text-xs text-slate-300">
                    <li class="flex items-center gap-2"><span class="text-amber-400 font-bold">✓</span> Full-colour printed prospectus</li>
                    <li class="flex items-center gap-2"><span class="text-amber-400 font-bold">✓</span> Sector-specific brochures</li>
                    <li class="flex items-center gap-2"><span class="text-amber-400 font-bold">✓</span> Site layout and zone maps</li>
                    <li class="flex items-center gap-2"><span class="text-amber-400 font-bold">✓</span> Personalised introductory letter</li>
                  </ul>
                  <RouterLink to="/contact" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 text-xs font-bold tracking-wider uppercase shadow transition-all">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    Request Investor Kit
                  </RouterLink>
                </div>
              </div>

              <!-- Custom Investment Brief -->
              <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#D00004] to-[#8B0002] p-8 sm:p-10 text-white group">
                <div class="absolute top-0 right-0 w-56 h-56 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
                <div class="relative z-10 space-y-5">
                  <div class="w-12 h-12 rounded-xl bg-white/20 text-white flex items-center justify-center">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                  </div>
                  <div>
                    <div class="text-[10px] font-extrabold tracking-widest text-red-200 uppercase mb-2">Tailored Brief</div>
                    <h3 class="font-heading font-bold text-xl sm:text-2xl text-white mb-3">Get a Custom Investment Brief</h3>
                    <p class="text-sm text-red-100 leading-relaxed">
                      Tell us your sector interest and investment size — our team will compile a bespoke brief with targeted ROI projections, regulatory pathways, and infrastructure readiness reports.
                    </p>
                  </div>
                  <ul class="space-y-2 text-xs text-red-100">
                    <li class="flex items-center gap-2"><span class="text-amber-300 font-bold">✓</span> Sector-specific financial modelling</li>
                    <li class="flex items-center gap-2"><span class="text-amber-300 font-bold">✓</span> Regulatory &amp; permitting roadmap</li>
                    <li class="flex items-center gap-2"><span class="text-amber-300 font-bold">✓</span> Infrastructure readiness assessment</li>
                    <li class="flex items-center gap-2"><span class="text-amber-300 font-bold">✓</span> Market access &amp; trade route data</li>
                  </ul>
                  <RouterLink to="/contact" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-[#D00004] text-xs font-bold tracking-wider uppercase shadow transition-all">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/></svg>
                    Request Custom Brief
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════════════════
           EXTERNAL PARTNER RESOURCES
           ══════════════════════════════════════════════ -->
      <section class="py-16 bg-white border-t border-slate-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            class="scroll-reveal"
            :class="partnersRevealed ? 'reveal-in' : 'reveal-out'"
            :ref="partnersRevealRef"
          >
            <div class="text-center mb-12">
              <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">External Resources</div>
              <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">Partner &amp; Regulatory Portals</h2>
              <p class="text-sm text-slate-500 mt-2 max-w-xl mx-auto">
                Key government and partner platforms relevant to investing in Uganda's Special Economic Zones.
              </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <a
                v-for="(partner, index) in partnerPortals"
                :key="partner.name"
                :href="partner.url"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex flex-col items-center text-center p-6 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg bg-white transition-all duration-300"
                :style="{ transitionDelay: `${index * 60}ms` }"
              >
                <div class="w-14 h-14 rounded-xl mb-4 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 duration-300"
                     :class="partner.iconBg">
                  <span v-html="partner.icon" :class="partner.iconColor"></span>
                </div>
                <div class="font-heading font-bold text-sm text-slate-900 mb-1.5 group-hover:text-[#D00004] transition-colors">{{ partner.name }}</div>
                <div class="text-[11px] text-slate-500 leading-relaxed mb-3">{{ partner.description }}</div>
                <div class="text-[10px] font-bold text-[#D00004] uppercase tracking-wider flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Visit Portal
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════════════════
           DOWNLOAD NOTIFICATION TOAST
           ══════════════════════════════════════════════ -->
      <Transition name="toast">
        <div v-if="showToast"
             class="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 bg-slate-900 text-white rounded-xl shadow-2xl border border-slate-700">
          <div class="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
            <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          </div>
          <div>
            <div class="text-xs font-bold">Download started</div>
            <div class="text-[11px] text-slate-400 mt-0.5">{{ toastDocument }}</div>
          </div>
        </div>
      </Transition>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { RouterLink } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

// ─── Toast ───────────────────────────────────────────────────────────────────
const showToast = ref(false)
const toastDocument = ref('')
let toastTimer = null

function handleDownload(docTitle) {
  toastDocument.value = docTitle
  showToast.value = true
  if (toastTimer) clearTimeout(toastTimer)
  toastTimer = setTimeout(() => { showToast.value = false }, 3200)
}

onUnmounted(() => { if (toastTimer) clearTimeout(toastTimer) })

// ─── Scroll reveal helpers ────────────────────────────────────────────────────
function makeReveal(elRef, revealedRef) {
  let obs = null
  onMounted(() => {
    obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { revealedRef.value = true; obs.disconnect() }
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' })
    if (elRef.value) obs.observe(elRef.value)
  })
  onUnmounted(() => { if (obs) obs.disconnect() })
}

const featuredEl = ref(null)
const featuredRevealed = ref(false)
const featuredRevealRef = (el) => { featuredEl.value = el }
makeReveal(featuredEl, featuredRevealed)

const ctaEl = ref(null)
const ctaRevealed = ref(false)
const ctaRevealRef = (el) => { ctaEl.value = el }
makeReveal(ctaEl, ctaRevealed)

const partnersEl = ref(null)
const partnersRevealed = ref(false)
const partnersRevealRef = (el) => { partnersEl.value = el }
makeReveal(partnersEl, partnersRevealed)

// ─── Document cards stagger reveal ───────────────────────────────────────────
const docRefs = ref([])
const docRevealed = ref([])
let docObserver = null

function observeDocs() {
  if (!docObserver) return
  docRefs.value.forEach(el => { if (el) docObserver.observe(el) })
}

onMounted(() => {
  docObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const i = docRefs.value.indexOf(entry.target)
        if (i !== -1) {
          setTimeout(() => { docRevealed.value[i] = true }, (i % 3) * 80)
          docObserver.unobserve(entry.target)
        }
      }
    })
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' })
  observeDocs()
})

onUnmounted(() => { if (docObserver) docObserver.disconnect() })

// ─── Static data ─────────────────────────────────────────────────────────────
const heroStats = [
  { value: '19', label: 'Incentive Points', icon: '<svg class="w-5 h-5 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>' },
  { value: '12+', label: 'Documents', icon: '<svg class="w-5 h-5 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>' },
  { value: 'Free', label: 'All Downloads', icon: '<svg class="w-5 h-5 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>' },
]

const categories = [
  { id: 'all', label: 'All Documents', count: 12, icon: '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>' },
  { id: 'investment', label: 'Investment', count: 4, icon: '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>' },
  { id: 'policy', label: 'Policy &amp; Legal', count: 3, icon: '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/></svg>' },
  { id: 'sectors', label: 'Sector Briefs', count: 3, icon: '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>' },
  { id: 'infrastructure', label: 'Infrastructure', count: 2, icon: '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>' },
]

const activeCategory = ref('all')

const activeCategoryLabel = computed(() => {
  const cat = categories.find(c => c.id === activeCategory.value)
  return cat ? (cat.id === 'all' ? 'All Documents' : cat.label) : 'All Documents'
})

const allDocs = [
  {
    id: 1, cat: 'investment', category: 'Investment', title: 'Arua SEZ Investor Prospectus 2025',
    description: 'The flagship comprehensive document covering all investment opportunities, incentives, infrastructure, and the 19-point framework.',
    pages: 68, fileSize: '4.2 MB', fileType: 'PDF', downloads: '1.2k',
    accentColor: 'bg-amber-400', iconBg: 'bg-amber-50',
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>',
    iconColor: 'text-amber-600', catColor: 'text-amber-600', typeBadge: 'bg-red-50 text-[#D00004]', btnClass: 'border-amber-200 text-amber-700 hover:bg-amber-50'
  },
  {
    id: 2, cat: 'investment', category: 'Investment', title: 'Investment Application Form',
    description: 'The official tenant and investor application form for Arua SEZ plot allocation and operational licenses.',
    pages: 12, fileSize: '0.8 MB', fileType: 'PDF', downloads: '842',
    accentColor: 'bg-[#D00004]', iconBg: 'bg-red-50',
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>',
    iconColor: 'text-[#D00004]', catColor: 'text-[#D00004]', typeBadge: 'bg-red-50 text-[#D00004]', btnClass: 'border-red-200 text-[#D00004] hover:bg-red-50'
  },
  {
    id: 3, cat: 'investment', category: 'Investment', title: 'ROI &amp; Financial Projections Summary',
    description: 'Independent financial modelling of returns for key sectors: agro-processing, manufacturing, and logistics.',
    pages: 24, fileSize: '1.5 MB', fileType: 'PDF', downloads: '618',
    accentColor: 'bg-slate-800', iconBg: 'bg-slate-100',
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/></svg>',
    iconColor: 'text-slate-700', catColor: 'text-slate-500', typeBadge: 'bg-slate-100 text-slate-600', btnClass: 'border-slate-200 text-slate-700 hover:bg-slate-50'
  },
  {
    id: 4, cat: 'investment', category: 'Investment', title: 'Land Use &amp; Plot Allocation Map',
    description: 'Zoning map with industrial, commercial, residential, and green areas indicating available plot sizes.',
    pages: 8, fileSize: '6.1 MB', fileType: 'PDF', downloads: '511',
    accentColor: 'bg-emerald-500', iconBg: 'bg-emerald-50',
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>',
    iconColor: 'text-emerald-600', catColor: 'text-emerald-600', typeBadge: 'bg-emerald-50 text-emerald-700', btnClass: 'border-emerald-200 text-emerald-700 hover:bg-emerald-50'
  },
  {
    id: 5, cat: 'policy', category: 'Policy &amp; Legal', title: 'Uganda SEZ Act 2021 — Summary',
    description: 'A plain-language summary of the Uganda Special Economic Zones Act 2021, covering establishment, governance, and investor rights.',
    pages: 18, fileSize: '1.1 MB', fileType: 'PDF', downloads: '730',
    accentColor: 'bg-blue-500', iconBg: 'bg-blue-50',
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/></svg>',
    iconColor: 'text-blue-600', catColor: 'text-blue-600', typeBadge: 'bg-blue-50 text-blue-700', btnClass: 'border-blue-200 text-blue-700 hover:bg-blue-50'
  },
  {
    id: 6, cat: 'policy', category: 'Policy &amp; Legal', title: 'Tax Incentives Framework Guide',
    description: 'Detailed breakdown of all applicable tax exemptions, duty waivers, and incentive eligibility criteria for SEZ tenants.',
    pages: 22, fileSize: '1.3 MB', fileType: 'PDF', downloads: '895',
    accentColor: 'bg-amber-400', iconBg: 'bg-amber-50',
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>',
    iconColor: 'text-amber-600', catColor: 'text-amber-600', typeBadge: 'bg-amber-50 text-amber-700', btnClass: 'border-amber-200 text-amber-700 hover:bg-amber-50'
  },
  {
    id: 7, cat: 'policy', category: 'Policy &amp; Legal', title: 'Environmental &amp; Social Compliance Standards',
    description: 'ESG and ESIA requirements, environmental baseline standards, and social impact mitigation frameworks applicable to SEZ operations.',
    pages: 34, fileSize: '2.2 MB', fileType: 'PDF', downloads: '302',
    accentColor: 'bg-emerald-400', iconBg: 'bg-emerald-50',
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    iconColor: 'text-emerald-600', catColor: 'text-emerald-600', typeBadge: 'bg-emerald-50 text-emerald-700', btnClass: 'border-emerald-200 text-emerald-700 hover:bg-emerald-50'
  },
  {
    id: 8, cat: 'sectors', category: 'Sector Brief', title: 'Agro-Processing Sector Fact-Sheet',
    description: 'Market data, commodity volumes, processing capacity requirements and growth projections for the agro-processing value chain.',
    pages: 10, fileSize: '0.9 MB', fileType: 'PDF', downloads: '476',
    accentColor: 'bg-[#D17F00]', iconBg: 'bg-amber-50',
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>',
    iconColor: 'text-[#D17F00]', catColor: 'text-[#D17F00]', typeBadge: 'bg-amber-50 text-amber-700', btnClass: 'border-amber-200 text-amber-700 hover:bg-amber-50'
  },
  {
    id: 9, cat: 'sectors', category: 'Sector Brief', title: 'Manufacturing &amp; Light Industry Brief',
    description: 'Production capacity benchmarks, utility requirements, labour markets, and competitive cost advantages for manufacturing in West Nile.',
    pages: 14, fileSize: '1.2 MB', fileType: 'PDF', downloads: '394',
    accentColor: 'bg-slate-700', iconBg: 'bg-slate-100',
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
    iconColor: 'text-slate-600', catColor: 'text-slate-500', typeBadge: 'bg-slate-100 text-slate-600', btnClass: 'border-slate-200 text-slate-700 hover:bg-slate-50'
  },
  {
    id: 10, cat: 'sectors', category: 'Sector Brief', title: 'Cross-Border Trade &amp; Logistics Brief',
    description: 'Trade corridor analysis, border crossing statistics, logistics cost modelling and warehousing demand projections for the West Nile corridor.',
    pages: 16, fileSize: '1.4 MB', fileType: 'PDF', downloads: '523',
    accentColor: 'bg-[#D00004]', iconBg: 'bg-red-50',
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>',
    iconColor: 'text-[#D00004]', catColor: 'text-[#D00004]', typeBadge: 'bg-red-50 text-[#D00004]', btnClass: 'border-red-200 text-[#D00004] hover:bg-red-50'
  },
  {
    id: 11, cat: 'infrastructure', category: 'Infrastructure', title: 'Site Master Plan — Phase 1 &amp; 2',
    description: 'Engineering master plan showing road networks, utility corridors, industrial zones, and phased development timeline for the 2,000-acre site.',
    pages: 42, fileSize: '8.5 MB', fileType: 'PDF', downloads: '287',
    accentColor: 'bg-indigo-500', iconBg: 'bg-indigo-50',
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>',
    iconColor: 'text-indigo-600', catColor: 'text-indigo-600', typeBadge: 'bg-indigo-50 text-indigo-700', btnClass: 'border-indigo-200 text-indigo-700 hover:bg-indigo-50'
  },
  {
    id: 12, cat: 'infrastructure', category: 'Infrastructure', title: 'Utility &amp; Energy Infrastructure Spec',
    description: 'Technical specifications for water, electricity (grid + solar), telecommunications, and industrial waste management systems.',
    pages: 28, fileSize: '3.3 MB', fileType: 'PDF', downloads: '198',
    accentColor: 'bg-cyan-500', iconBg: 'bg-cyan-50',
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>',
    iconColor: 'text-cyan-600', catColor: 'text-cyan-600', typeBadge: 'bg-cyan-50 text-cyan-700', btnClass: 'border-cyan-200 text-cyan-700 hover:bg-cyan-50'
  },
]

const filteredDocs = computed(() => {
  if (activeCategory.value === 'all') return allDocs
  return allDocs.filter(d => d.cat === activeCategory.value)
})

watch(activeCategory, () => {
  docRevealed.value = []
  docRefs.value = []
  setTimeout(() => { observeDocs() }, 80)
})

const partnerPortals = [
  {
    name: 'Uganda Investment Authority', description: 'National investment promotion body. Access investment certificates and permits.',
    url: 'https://www.ugandainvest.go.ug', iconBg: 'bg-amber-50',
    icon: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"/></svg>',
    iconColor: 'text-amber-600'
  },
  {
    name: 'Uganda Revenue Authority', description: 'Tax compliance, VAT registration, exemption processing, and customs for SEZ operators.',
    url: 'https://www.ura.go.ug', iconBg: 'bg-blue-50',
    icon: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>',
    iconColor: 'text-blue-600'
  },
  {
    name: 'NEMA Uganda', description: 'National Environment Management Authority — ESIA and compliance certificates.',
    url: 'https://www.nema.go.ug', iconBg: 'bg-emerald-50',
    icon: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    iconColor: 'text-emerald-600'
  },
  {
    name: 'Ministry of Finance Uganda', description: 'Budget frameworks, public finance policy, and national development plan documentation.',
    url: 'https://www.finance.go.ug', iconBg: 'bg-slate-100',
    icon: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/></svg>',
    iconColor: 'text-slate-600'
  },
]
</script>

<style scoped>
.scroll-reveal {
  transition: opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}
.reveal-out {
  opacity: 0;
  transform: translateY(36px);
}
.reveal-in {
  opacity: 1;
  transform: translateY(0);
}
.toast-enter-active,
.toast-leave-active {
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(0.95);
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
