<template>
  <div class="min-h-screen flex flex-col bg-white font-sans text-slate-800">
    <AppHeader />

    <main class="flex-grow">
      <!-- ═══════════════════════════════════════════════
           PAGE BANNER
           ═══════════════════════════════════════════════ -->
      <section class="relative py-20 bg-[#0B0F19] text-white overflow-hidden">
        <div class="absolute inset-0 z-0 opacity-20">
          <img src="/images/hero.jpg" alt="Arua SEZ Aerial Industrial Park" class="w-full h-full object-cover"/>
        </div>
        <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40 z-0"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-wider uppercase text-amber-300 mb-4">
              <span>Investor Support &amp; Benefits</span>
            </div>
            <h1 class="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
              Comprehensive Investor Incentives
            </h1>
            <p class="text-base sm:text-lg text-slate-300 leading-relaxed">
              Backed by the Uganda Investment Authority (UIA) statutory framework, Arua SEZ provides decisive fiscal exemptions, world-class serviced plots, and end-to-end regulatory facilitation.
            </p>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════
           KEY INCENTIVE METRICS
           ═══════════════════════════════════════════════ -->
      <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            <!-- 10-Year Holiday -->
            <div class="pt-4 sm:pt-0 sm:px-3">
              <div class="font-heading font-black text-3xl sm:text-4xl text-[#D00004] leading-none">10 Yrs</div>
              <div class="text-xs font-extrabold uppercase tracking-wider text-slate-800 mt-1.5">CIT HOLIDAY</div>
              <div class="text-[11px] text-gray-500 mt-0.5">Corporate Income Tax for Exporters</div>
            </div>

            <!-- 0% Duty -->
            <div class="pt-4 sm:pt-0 sm:px-4">
              <div class="font-heading font-black text-3xl sm:text-4xl text-[#D17F00] leading-none">0% Duty</div>
              <div class="text-xs font-extrabold uppercase tracking-wider text-slate-800 mt-1.5">IMPORT EXEMPTION</div>
              <div class="text-[11px] text-gray-500 mt-0.5">On Plant, Machinery &amp; Equipment</div>
            </div>

            <!-- 100% Foreign Ownership -->
            <div class="pt-4 sm:pt-0 sm:px-4">
              <div class="font-heading font-black text-3xl sm:text-4xl text-slate-900 leading-none">100%</div>
              <div class="text-xs font-extrabold uppercase tracking-wider text-slate-800 mt-1.5">OWNERSHIP &amp; PROFITS</div>
              <div class="text-[11px] text-gray-500 mt-0.5">Full Repatriation of Capital</div>
            </div>

            <!-- One-Stop Center -->
            <div class="pt-4 sm:pt-0 sm:px-4">
              <div class="font-heading font-black text-3xl sm:text-4xl text-emerald-600 leading-none">Fast-Track</div>
              <div class="text-xs font-extrabold uppercase tracking-wider text-slate-800 mt-1.5">REGULATORY DESK</div>
              <div class="text-[11px] text-gray-500 mt-0.5">Dedicated One-Stop Approvals</div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════
           PILLAR 1: FISCAL & TAX INCENTIVES
           ═══════════════════════════════════════════════ -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">
              FISCAL FRAMEWORK
            </div>
            <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              Statutory Fiscal &amp; Tax Exemptions
            </h2>
            <p class="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
              Operating under Uganda's Free Zone and Special Economic Zone legislation, certified enterprises enjoy significant reductions in upfront capital expenditure and operating overheads.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Item 1 -->
            <div class="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div class="w-12 h-12 rounded-xl bg-red-100 text-[#D00004] flex items-center justify-center font-black text-lg mb-6">
                  10Y
                </div>
                <h3 class="font-heading font-bold text-lg text-slate-900 mb-2">
                  10-Year Corporate Tax Holiday
                </h3>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Enterprises that export at least 80% of manufactured or processed output outside the EAC qualify for a complete ten-year exemption from corporate income tax.
                </p>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-200/80 text-[11px] font-bold text-[#D00004] uppercase">
                Section 21 Income Tax Act
              </div>
            </div>

            <!-- Item 2 -->
            <div class="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div class="w-12 h-12 rounded-xl bg-amber-100 text-[#D17F00] flex items-center justify-center font-black text-lg mb-6">
                  0%
                </div>
                <h3 class="font-heading font-bold text-lg text-slate-900 mb-2">
                  Zero Import Duty &amp; VAT on Capital Goods
                </h3>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  100% duty-free and VAT-exempt importation of industrial equipment, plants, specialized machinery, raw input materials, and construction inputs.
                </p>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-200/80 text-[11px] font-bold text-[#D17F00] uppercase">
                Zero Upfront Tariff Burden
              </div>
            </div>

            <!-- Item 3 -->
            <div class="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div class="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black text-lg mb-6">
                  FX
                </div>
                <h3 class="font-heading font-bold text-lg text-slate-900 mb-2">
                  Unrestricted Capital &amp; Dividend Repatriation
                </h3>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Free mobility of capital. Investors may freely repatriate 100% of net profits, dividends, royalties, and principal loan repayments in foreign currencies without exchange barriers.
                </p>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-200/80 text-[11px] font-bold text-slate-900 uppercase">
                Full Foreign Exchange Freedom
              </div>
            </div>

            <!-- Item 4 -->
            <div class="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-lg mb-6">
                  WHT
                </div>
                <h3 class="font-heading font-bold text-lg text-slate-900 mb-2">
                  Withholding Tax Relief
                </h3>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Concessional withholding tax rates on interest payments for foreign loans, dividends, and management fees, preserving operating cash flow.
                </p>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-200/80 text-[11px] font-bold text-emerald-700 uppercase">
                Cash Flow Optimization
              </div>
            </div>

            <!-- Item 5 -->
            <div class="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div class="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black text-lg mb-6">
                  R&amp;D
                </div>
                <h3 class="font-heading font-bold text-lg text-slate-900 mb-2">
                  100% Depreciation &amp; R&amp;D Deductions
                </h3>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Generous accelerated capital depreciation allowances on heavy plant investments and 100% deductible scientific research expenditures.
                </p>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-200/80 text-[11px] font-bold text-blue-700 uppercase">
                Tax Asset Write-Off
              </div>
            </div>

            <!-- Item 6 -->
            <div class="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div class="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-black text-lg mb-6">
                  DRA
                </div>
                <h3 class="font-heading font-bold text-lg text-slate-900 mb-2">
                  Customs Duty Drawback Schemes
                </h3>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Automatic duty drawback mechanism on all packaging materials and interim consumables utilized in manufacturing for international export.
                </p>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-200/80 text-[11px] font-bold text-purple-700 uppercase">
                Export Processing Protection
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════
           PILLAR 2: SERVICED INFRASTRUCTURE (PLUG & PLAY)
           ═══════════════════════════════════════════════ -->
      <section class="py-20 bg-[#0B0F19] text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div class="lg:col-span-5 space-y-6">
              <div class="text-xs font-extrabold tracking-widest text-[#F59E0B] uppercase">
                PLUG-AND-PLAY UTILITIES
              </div>
              <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Fully Serviced Industrial Plots
              </h2>
              <p class="text-sm sm:text-base text-slate-300 leading-relaxed">
                Arua SEZ eliminates the friction of greenfield development. Plots are demarcated, titled, and directly connected to critical utilities so investors can break ground immediately.
              </p>

              <div class="space-y-4 pt-2">
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 rounded-full bg-amber-500/20 text-[#F59E0B] flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">✓</div>
                  <div>
                    <h4 class="text-sm font-bold text-white">Dedicated High-Voltage Electricity</h4>
                    <p class="text-xs text-slate-400 mt-0.5">Reliable industrial power substation lines engineered for continuous smelting, milling, and heavy manufacturing.</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 rounded-full bg-amber-500/20 text-[#F59E0B] flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">✓</div>
                  <div>
                    <h4 class="text-sm font-bold text-white">Industrial Water &amp; Effluent Drainage</h4>
                    <p class="text-xs text-slate-400 mt-0.5">High-volume treated water mains and environmentally compliant central drainage and waste management infrastructure.</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 rounded-full bg-amber-500/20 text-[#F59E0B] flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">✓</div>
                  <div>
                    <h4 class="text-sm font-bold text-white">Heavy-Duty Internal Road Network</h4>
                    <p class="text-xs text-slate-400 mt-0.5">Engineered for multi-axle freight trucks, container handling, and seamless docking with loading terminals.</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 rounded-full bg-amber-500/20 text-[#F59E0B] flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">✓</div>
                  <div>
                    <h4 class="text-sm font-bold text-white">24/7 Secured Perimeter &amp; Customs Gate</h4>
                    <p class="text-xs text-slate-400 mt-0.5">CCTV surveillance, guarded checkpoints, and dedicated on-site Customs Post for prompt sealing and documentation.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Visual / Spec Card -->
            <div class="lg:col-span-7 bg-slate-900/90 rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl">
              <div class="border-b border-slate-800 pb-6 mb-6 flex items-center justify-between">
                <div>
                  <span class="text-xs font-bold text-[#D00004] uppercase tracking-wider">Site Specifications</span>
                  <h3 class="text-xl font-bold text-white mt-1">Plot Allocation Matrix</h3>
                </div>
                <span class="px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 text-xs font-semibold border border-emerald-800">
                  Ready for Allocation
                </span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div class="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div class="text-slate-400">Total Phase 1 Land</div>
                  <div class="text-lg font-bold text-white mt-1">12.7+ Hectares</div>
                  <div class="text-[11px] text-slate-500 mt-1">Clean freehold title with master zoning</div>
                </div>

                <div class="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div class="text-slate-400">Lease Terms</div>
                  <div class="text-lg font-bold text-white mt-1">Up to 49 Years</div>
                  <div class="text-[11px] text-slate-500 mt-1">Renewable long-term industrial leases</div>
                </div>

                <div class="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div class="text-slate-400">Customs Clearance</div>
                  <div class="text-lg font-bold text-white mt-1">On-Site Bonded</div>
                  <div class="text-[11px] text-slate-500 mt-1">In-zone Uganda Revenue Authority (URA) desk</div>
                </div>

                <div class="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div class="text-slate-400">Telecommunications</div>
                  <div class="text-lg font-bold text-white mt-1">High-Speed Fiber</div>
                  <div class="text-[11px] text-slate-500 mt-1">Direct fiber optic backbone connectivity</div>
                </div>
              </div>

              <div class="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p class="text-xs text-slate-400 text-center sm:text-left">
                  Request site surveys, soil profiles, and plot boundary dimensions.
                </p>
                <RouterLink 
                  to="/contact" 
                  class="w-full sm:w-auto text-center px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-950 bg-[#F59E0B] hover:bg-amber-400 transition-all"
                >
                  Request Plot Dossier →
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════
           PILLAR 3: STREAMLINED LICENSING & ONE-STOP SHOP
           ═══════════════════════════════════════════════ -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">
              REGULATORY EFFICIENCY
            </div>
            <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              One-Stop Institutional Facilitation
            </h2>
            <p class="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
              We eliminate administrative friction. Through coordinated collaboration with national agencies, investors obtain all necessary licenses, permits, and clearances in record time.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all text-center">
              <div class="w-12 h-12 rounded-xl bg-red-100 text-[#D00004] flex items-center justify-center font-black mx-auto mb-4">
                01
              </div>
              <h4 class="font-heading font-bold text-sm text-slate-900 mb-1">Company Incorporation</h4>
              <p class="text-xs text-slate-600">Expedited URSB registration and tax identification (TIN) issuance.</p>
            </div>

            <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all text-center">
              <div class="w-12 h-12 rounded-xl bg-amber-100 text-[#D17F00] flex items-center justify-center font-black mx-auto mb-4">
                02
              </div>
              <h4 class="font-heading font-bold text-sm text-slate-900 mb-1">UIA Investment License</h4>
              <p class="text-xs text-slate-600">Fast-tracked Free Zone developer and operator licensing via UIA.</p>
            </div>

            <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all text-center">
              <div class="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black mx-auto mb-4">
                03
              </div>
              <h4 class="font-heading font-bold text-sm text-slate-900 mb-1">Environmental &amp; Building</h4>
              <p class="text-xs text-slate-600">Structured NEMA environmental impact approvals and engineering permits.</p>
            </div>

            <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all text-center">
              <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black mx-auto mb-4">
                04
              </div>
              <h4 class="font-heading font-bold text-sm text-slate-900 mb-1">Work Permits &amp; Visas</h4>
              <p class="text-xs text-slate-600">Assistance with Class G work permits for international technical teams.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════
           CALL TO ACTION BANNER
           ═══════════════════════════════════════════════ -->
      <section class="py-16 bg-[#0B0F19] text-white border-t border-slate-800">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 class="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
            Ready to Accelerate Your Industrial Venture?
          </h2>
          <p class="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Contact the Arua SEZ Development Office today to schedule a confidential briefing, obtain plot specifications, and discuss tailored fiscal facilitation.
          </p>
          <div class="pt-2 flex flex-wrap items-center justify-center gap-4">
            <RouterLink 
              to="/contact" 
              class="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase text-white bg-[#D00004] hover:bg-[#B30003] shadow-lg transition-all"
            >
              <span>APPLY FOR INCENTIVES &amp; PLOTS</span>
              <span class="text-sm">→</span>
            </RouterLink>
            <RouterLink 
              to="/sectors" 
              class="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
            >
              <span>EXPLORE PRIORITY SECTORS</span>
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
