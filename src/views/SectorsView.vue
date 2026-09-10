<template>
  <div class="min-h-screen flex flex-col bg-white font-sans text-slate-800">
    <AppHeader />

    <main class="flex-grow">
      <!-- Page Banner -->
      <section class="relative py-20 bg-[#0B0F19] text-white overflow-hidden">
        <div class="absolute inset-0 z-0 opacity-20">
          <img src="/images/manufacturing.jpg" alt="Industrial Manufacturing" class="w-full h-full object-cover"/>
        </div>
        <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40 z-0"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-wider uppercase text-amber-300 mb-4">
              <span>Core Activities &amp; Priority Sectors</span>
            </div>
            <h1 class="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
              High Turnover. Low Risk. Essential Goods.
            </h1>
            <p class="text-base sm:text-lg text-slate-300 leading-relaxed">
              Arua SEZ prioritizes essential manufacturing, mineral refining, and value addition operations with consistent regional demand across Uganda, DRC, South Sudan, and CAR.
            </p>
          </div>
        </div>
      </section>

      <!-- 6 Sectors Detailed Cards -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="space-y-16">

            <!-- Sector 1: Agro-Processing -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#F8FAFC] rounded-3xl p-8 sm:p-12 border border-slate-200">
              <div class="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
                <img src="/images/agro.jpg" alt="Agro-Processing" class="w-full h-full object-cover"/>
                <div class="absolute top-4 left-4 px-3 py-1 rounded-md bg-[#D17F00] text-white text-xs font-bold uppercase tracking-wider">
                  Agro-Industrial
                </div>
              </div>
              <div class="lg:col-span-7 space-y-4">
                <div class="text-xs font-extrabold tracking-widest text-[#D17F00] uppercase">SECTOR 01</div>
                <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                  Agriculture &amp; Agro-Processing
                </h2>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  West Nile and the surrounding regional hinterland produce vast volumes of agricultural raw commodities. Arua SEZ establishes industrial infrastructure to clean, sort, pack, and refine these commodities locally, retaining economic value within the region.
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700">
                  <div class="p-3 bg-white rounded-xl border border-slate-200/80">
                    <strong class="block text-slate-900 font-bold mb-0.5">Groundnuts &amp; Sesame</strong>
                    <span>Cleaning, grading, and cold-pressed oil extraction.</span>
                  </div>
                  <div class="p-3 bg-white rounded-xl border border-slate-200/80">
                    <strong class="block text-slate-900 font-bold mb-0.5">Rice &amp; Grains</strong>
                    <span>Large-scale destoning, polishing, packaging, and bran processing.</span>
                  </div>
                  <div class="p-3 bg-white rounded-xl border border-slate-200/80">
                    <strong class="block text-slate-900 font-bold mb-0.5">Palm Oil &amp; Cooking Oils</strong>
                    <span>Fractionation, deodorization, and consumer packaging.</span>
                  </div>
                  <div class="p-3 bg-white rounded-xl border border-slate-200/80">
                    <strong class="block text-slate-900 font-bold mb-0.5">Coffee &amp; Shea Butter</strong>
                    <span>Secondary processing for regional and overseas export markets.</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Sector 2: Gold & Minerals -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#0B0F19] text-white rounded-3xl p-8 sm:p-12 border border-slate-800">
              <div class="lg:col-span-7 space-y-4 order-2 lg:order-1">
                <div class="text-xs font-extrabold tracking-widest text-[#F59E0B] uppercase">SECTOR 02</div>
                <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  Mining &amp; Mineral Processing (Gold Refining)
                </h2>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Arua SEZ is uniquely positioned adjacent to the vast gold and mineral belts of Eastern Democratic Republic of Congo (DRC) and emerging exploration prospects in West Nile, Uganda.
                </p>
                <div class="space-y-2.5 text-xs text-slate-300 pt-2">
                  <div class="flex items-start gap-2.5">
                    <span class="text-[#F59E0B] font-bold">✓</span>
                    <span><strong>Industrial Gold Refining:</strong> Advanced assaying, smelting, and refining facility meeting international traceability standards.</span>
                  </div>
                  <div class="flex items-start gap-2.5">
                    <span class="text-[#F59E0B] font-bold">✓</span>
                    <span><strong>Formalizing Cross-Border Supply Chains:</strong> Leveraging artisanal mining cooperatives in Eastern Congo into secure, formalized value chains.</span>
                  </div>
                  <div class="flex items-start gap-2.5">
                    <span class="text-[#F59E0B] font-bold">✓</span>
                    <span><strong>High-Value Capital Operations:</strong> Supported by dedicated customs gates, bonded security, and bullion handling logistics.</span>
                  </div>
                </div>
              </div>
              <div class="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2 bg-gradient-to-br from-amber-600/90 via-slate-900 to-slate-950 flex items-center justify-center p-8 text-center border border-amber-500/30">
                <div class="space-y-2">
                  <span class="text-5xl">🪙</span>
                  <h3 class="text-2xl font-black text-white">Gold Refining Hub</h3>
                  <p class="text-xs text-amber-200">Eastern DRC &amp; West Nile Minerals Corridor</p>
                </div>
              </div>
            </div>

            <!-- Sector 3: Manufacturing & Ethanol -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#F8FAFC] rounded-3xl p-8 sm:p-12 border border-slate-200">
              <div class="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
                <img src="/images/manufacturing.jpg" alt="Manufacturing" class="w-full h-full object-cover"/>
                <div class="absolute top-4 left-4 px-3 py-1 rounded-md bg-[#0B0F19] text-white text-xs font-bold uppercase tracking-wider">
                  Industrial
                </div>
              </div>
              <div class="lg:col-span-7 space-y-4">
                <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase">SECTOR 03</div>
                <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                  Manufacturing &amp; Industrial Ethanol
                </h2>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Essential consumer and chemical manufacturing targeting everyday necessities with rapid turnover and reliable cross-border purchasing demand.
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700">
                  <div class="p-3 bg-white rounded-xl border border-slate-200/80">
                    <strong class="block text-slate-900 font-bold mb-0.5">Ethanol &amp; Alcohol</strong>
                    <span>Industrial alcohol production utilizing abundant local cassava and sugarcane feedstock.</span>
                  </div>
                  <div class="p-3 bg-white rounded-xl border border-slate-200/80">
                    <strong class="block text-slate-900 font-bold mb-0.5">Confectionery &amp; Beverages</strong>
                    <span>Sweets, biscuits, purified mineral water, and fruit-based soft drinks.</span>
                  </div>
                  <div class="p-3 bg-white rounded-xl border border-slate-200/80">
                    <strong class="block text-slate-900 font-bold mb-0.5">Aromatic Soaps &amp; Cosmetics</strong>
                    <span>Formulated from natural palm oil, sesame oil, groundnut oil, and pure shea butter.</span>
                  </div>
                  <div class="p-3 bg-white rounded-xl border border-slate-200/80">
                    <strong class="block text-slate-900 font-bold mb-0.5">Consumer Plastics &amp; Essentials</strong>
                    <span>Pipes, bottles, chairs, tables, utensils, and hygiene products.</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Sector 4: Steel, Foundry & Building Materials -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#F8FAFC] rounded-3xl p-8 sm:p-12 border border-slate-200">
              <div class="lg:col-span-7 space-y-4">
                <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase">SECTOR 04</div>
                <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                  Steel, Foundry &amp; Building Materials
                </h2>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The reconstruction and urbanization of South Sudan and Eastern DRC drive continuous, high-volume demand for construction materials and metal fabrication.
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700">
                  <div class="p-3 bg-white rounded-xl border border-slate-200/80">
                    <strong class="block text-slate-900 font-bold mb-0.5">Modern Steel Lines</strong>
                    <span>High-intensity steel rolling, rebar, corrugated iron sheets, and structural wire.</span>
                  </div>
                  <div class="p-3 bg-white rounded-xl border border-slate-200/80">
                    <strong class="block text-slate-900 font-bold mb-0.5">Foundry &amp; CNC Machining</strong>
                    <span>Metal smelting, casting, brass, wrought iron, and replacement machine components.</span>
                  </div>
                  <div class="p-3 bg-white rounded-xl border border-slate-200/80">
                    <strong class="block text-slate-900 font-bold mb-0.5">Building Supplies</strong>
                    <span>Gypsum boards, resins, industrial glue, plumbing fittings, and nails.</span>
                  </div>
                  <div class="p-3 bg-white rounded-xl border border-slate-200/80">
                    <strong class="block text-slate-900 font-bold mb-0.5">Hardwood Timber Export</strong>
                    <span>Kiln drying and precision cutting of legal hardwood timber for regional and overseas export.</span>
                  </div>
                </div>
              </div>
              <div class="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg bg-slate-900 flex items-center justify-center text-center p-8 text-white">
                <div class="space-y-2">
                  <span class="text-5xl">🏗️</span>
                  <h3 class="text-2xl font-black text-white">Construction Hub</h3>
                  <p class="text-xs text-slate-300">Supplying the regional construction boom</p>
                </div>
              </div>
            </div>

            <!-- Sector 5: Logistics & Warehousing -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#F8FAFC] rounded-3xl p-8 sm:p-12 border border-slate-200">
              <div class="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
                <img src="/images/warehousing.jpg" alt="Warehousing and Logistics" class="w-full h-full object-cover"/>
                <div class="absolute top-4 left-4 px-3 py-1 rounded-md bg-[#D17F00] text-white text-xs font-bold uppercase tracking-wider">
                  Logistics
                </div>
              </div>
              <div class="lg:col-span-7 space-y-4">
                <div class="text-xs font-extrabold tracking-widest text-[#D17F00] uppercase">SECTOR 05</div>
                <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                  Cross-Border Logistics &amp; Warehousing
                </h2>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Over 45,000 sq. meters of planned bonded warehouse space, temperature-controlled cold chains, container yards, and expedited customs clearance directly connecting Northern Uganda to South Sudan, Eastern DRC, and CAR.
                </p>
                <div class="pt-2">
                  <RouterLink to="/contact" class="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold tracking-wider uppercase text-white bg-[#0B0F19] hover:bg-[#1E293B] shadow-md transition-all">
                    <span>Reserve Warehouse Space</span>
                    <span>→</span>
                  </RouterLink>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- Bottom Banner CTA -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div class="rounded-3xl bg-[#D00004] text-white p-10 sm:p-14 text-center">
          <h2 class="font-heading font-black text-3xl sm:text-4xl mb-4">
            Establish Your Facility in Arua SEZ
          </h2>
          <p class="text-sm sm:text-base text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Serviced industrial plots with dedicated power, water, customs support, and 10-year tax holidays are available for immediate allocation.
          </p>
          <RouterLink to="/contact" class="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-black tracking-wider uppercase text-slate-950 bg-white hover:bg-amber-100 shadow-xl transition-all">
            <span>SUBMIT EXPRESSION OF INTEREST</span>
            <span>→</span>
          </RouterLink>
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
