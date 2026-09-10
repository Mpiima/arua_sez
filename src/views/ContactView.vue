<template>
  <div class="min-h-screen flex flex-col bg-white font-sans text-slate-800">
    <AppHeader />

    <main class="flex-grow">
      <!-- ═══════════════════════════════════════════════
           PAGE BANNER
           ═══════════════════════════════════════════════ -->
      <section class="relative py-20 bg-[#0B0F19] text-white overflow-hidden">
        <div class="absolute inset-0 z-0 opacity-20">
          <img src="/images/hero.jpg" alt="Arua SEZ Aerial" class="w-full h-full object-cover"/>
        </div>
        <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40 z-0"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-wider uppercase text-amber-300 mb-4">
              <span>Connect &amp; Invest</span>
            </div>
            <h1 class="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
              Partner With Arua SEZ
            </h1>
            <p class="text-base sm:text-lg text-slate-300 leading-relaxed">
              West Nile is ready. Arua SEZ is the platform. Connect with our development and investment facilitation team to discuss plot allocations, anchor partnerships, and co-investment.
            </p>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════
           COLLABORATION PROFILES (WHO WE ARE SEEKING)
           ═══════════════════════════════════════════════ -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">
              OPPORTUNITIES FOR INSTITUTIONAL PARTNERS
            </div>
            <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              Target Partner Categories
            </h2>
            <p class="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
              We are actively engaging visionary domestic and international institutions seeking sustainable high yields and strategic market dominance across East and Central Africa.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <!-- 1: Anchor Investors -->
            <div class="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div class="w-12 h-12 rounded-xl bg-red-100 text-[#D00004] flex items-center justify-center font-bold text-lg mb-5">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"/></svg>
                </div>
                <h3 class="font-heading font-bold text-lg text-slate-900 mb-2">Anchor Investors</h3>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Leading multinational and regional enterprises establishing flagship processing plants in agro-industry, gold refining, steel fabrication, or large-scale manufacturing.
                </p>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-200/80 text-[11px] font-bold text-[#D00004] uppercase">
                Priority Allocation
              </div>
            </div>

            <!-- 2: Infrastructure Developers -->
            <div class="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div class="w-12 h-12 rounded-xl bg-amber-100 text-[#D17F00] flex items-center justify-center font-bold text-lg mb-5">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <h3 class="font-heading font-bold text-lg text-slate-900 mb-2">Infrastructure Partners</h3>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Specialized concessionaires and utility developers co-investing in captive solar mini-grids, industrial wastewater recycling, standard factory shells, and digital backbone infrastructure.
                </p>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-200/80 text-[11px] font-bold text-[#D17F00] uppercase">
                PPP &amp; Concessions
              </div>
            </div>

            <!-- 3: DFIs -->
            <div class="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div class="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-lg mb-5">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h3 class="font-heading font-bold text-lg text-slate-900 mb-2">Development Finance (DFIs)</h3>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Bilateral and multilateral financing institutions seeking high-impact ESG opportunities that spur sustainable industrialization, create formal youth jobs, and stabilize regional borders.
                </p>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-200/80 text-[11px] font-bold text-slate-900 uppercase">
                Concessional &amp; ESG Capital
              </div>
            </div>

            <!-- 4: Agro-Industrial Operators -->
            <div class="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg mb-5">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h3 class="font-heading font-bold text-lg text-slate-900 mb-2">Agro-Industrial Operators</h3>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Companies organizing contract-farming outgrower networks across West Nile for high-yield grains, oilseeds, shea nuts, and cassava for centralized industrial milling and export.
                </p>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-200/80 text-[11px] font-bold text-emerald-700 uppercase">
                Supply-Chain Integration
              </div>
            </div>

            <!-- 5: Cross-Border Logistics Firms -->
            <div class="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div>
                <div class="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-lg mb-5">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
                </div>
                <h3 class="font-heading font-bold text-lg text-slate-900 mb-2">Cross-Border Freight &amp; Logistics Firms</h3>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  International freight forwarding, bonded container yard operators, and cold-chain fleets operating the transit corridors linking Mombasa and Kampala directly to Juba (South Sudan), Bunia and Kisangani (DRC), and Bangui (CAR).
                </p>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-200/80 text-[11px] font-bold text-purple-700 uppercase">
                Trade Corridor Hub
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════
           CONTACT DETAILS & EXPRESSION OF INTEREST FORM
           ═══════════════════════════════════════════════ -->
      <section class="py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <!-- Left Contact Information -->
            <div class="lg:col-span-5 space-y-6">
              <div>
                <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">
                  DEVELOPMENT OFFICE
                </div>
                <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                  Direct Inquiries &amp; Secretariat
                </h2>
                <p class="text-sm text-slate-600 mt-3 leading-relaxed">
                  Our facilitation executives are based in Arua City to coordinate site visits, plot demarcations, and licensing procedures.
                </p>
              </div>

              <div class="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-md space-y-6">
                <!-- Physical Location -->
                <div class="flex items-start gap-4">
                  <div class="w-11 h-11 rounded-xl bg-red-100 text-[#D00004] flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <h4 class="text-xs font-bold uppercase tracking-wider text-slate-800">Physical Location</h4>
                    <p class="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      Plot 22A - 22D Ujio Road, River Oli Division<br />
                      Arua City, West Nile Region<br />
                      Republic of Uganda
                    </p>
                  </div>
                </div>

                <!-- Direct Telephone -->
                <div class="flex items-start gap-4">
                  <div class="w-11 h-11 rounded-xl bg-amber-100 text-[#D17F00] flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <h4 class="text-xs font-bold uppercase tracking-wider text-slate-800">Direct Telephone</h4>
                    <p class="text-sm font-bold text-slate-900 mt-1">
                      <a href="tel:+256701117851" class="hover:text-[#D00004] transition-colors">
                        +256 701 117 851
                      </a>
                    </p>
                    <span class="text-[11px] text-emerald-600 font-semibold block mt-0.5">● Monday – Friday, 8:00 AM – 5:00 PM EAT</span>
                  </div>
                </div>

                <!-- Official Email -->
                <div class="flex items-start gap-4">
                  <div class="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <h4 class="text-xs font-bold uppercase tracking-wider text-slate-800">Official Inquiries</h4>
                    <p class="text-sm text-slate-600 mt-1">
                      <a href="mailto:info@aruasez.ug" class="font-bold text-[#D00004] hover:underline">
                        info@aruasez.ug
                      </a>
                    </p>
                    <span class="text-[11px] text-slate-400 block mt-0.5">Official communications &amp; dossier requests</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Expression of Interest Form -->
            <div class="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl">
              <div class="mb-8">
                <span class="text-xs font-extrabold text-[#D00004] uppercase tracking-wider">ONLINE INQUIRY</span>
                <h3 class="font-heading font-extrabold text-2xl text-slate-900 mt-1">
                  Expression of Interest (EOI)
                </h3>
                <p class="text-xs sm:text-sm text-slate-500 mt-1">
                  Submit your preliminary investment parameters. Our facilitation team will review and respond within 24 hours.
                </p>
              </div>

              <!-- Success Alert -->
              <div v-if="formSubmitted" class="mb-6 p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-medium flex items-center gap-3">
                <span class="text-xl">✓</span>
                <div>
                  <strong>Inquiry Successfully Received!</strong>
                  <p class="text-xs text-emerald-700 mt-0.5">Thank you, {{ form.fullName || 'Investor' }}. Our investment desk has received your submission and will contact you via {{ form.email || 'your email' }} shortly.</p>
                </div>
              </div>

              <form @submit.prevent="submitForm" class="space-y-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Full Name *</label>
                    <input 
                      v-model="form.fullName" 
                      type="text" 
                      required 
                      placeholder="e.g. John Okello"
                      class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D00004] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Company / Organization *</label>
                    <input 
                      v-model="form.organization" 
                      type="text" 
                      required 
                      placeholder="e.g. Nile Agro Industries Ltd"
                      class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D00004] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Official Email *</label>
                    <input 
                      v-model="form.email" 
                      type="email" 
                      required 
                      placeholder="e.g. j.okello@nileagro.com"
                      class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D00004] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Telephone Number *</label>
                    <input 
                      v-model="form.phone" 
                      type="tel" 
                      required 
                      placeholder="e.g. +256 700 000 000"
                      class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D00004] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Sector of Interest *</label>
                    <select 
                      v-model="form.sector" 
                      required
                      class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D00004] focus:border-transparent bg-white transition-all"
                    >
                      <option value="" disabled>Select sector...</option>
                      <option value="Agro-Processing">Agriculture &amp; Agro-Processing</option>
                      <option value="Mining & Mineral">Mining &amp; Mineral Processing (Gold Refining)</option>
                      <option value="Manufacturing">Manufacturing &amp; Industrial Ethanol</option>
                      <option value="Steel & Building">Steel, Foundry &amp; Building Materials</option>
                      <option value="Timber & Forestry">Commercial Hardwood Timber Export</option>
                      <option value="Logistics & Warehousing">Cross-Border Logistics &amp; Bonded Yards</option>
                      <option value="Infrastructure/Utilities">Infrastructure / Energy Concession</option>
                      <option value="Other">Other Strategic Activity</option>
                    </select>
                  </div>

                  <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Estimated Land / Plot Need</label>
                    <select 
                      v-model="form.landSize"
                      class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D00004] focus:border-transparent bg-white transition-all"
                    >
                      <option value="0.5 - 1 Hectare">0.5 - 1 Hectare</option>
                      <option value="1 - 3 Hectares">1 - 3 Hectares</option>
                      <option value="3+ Hectares">3+ Hectares (Anchor Facility)</option>
                      <option value="Standard Factory Shell">Standard Factory Shell / Warehouse only</option>
                      <option value="Not Sure">To be determined</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Project Overview &amp; Specific Requirements</label>
                  <textarea 
                    v-model="form.message" 
                    rows="4" 
                    placeholder="Briefly describe your proposed manufacturing line, expected power/water requirements, export destinations, or timeline..."
                    class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D00004] focus:border-transparent transition-all"
                  ></textarea>
                </div>

                <div class="pt-2 flex items-center justify-between">
                  <span class="text-[11px] text-slate-500">Your details are protected under strict confidentiality.</span>
                  <button 
                    type="submit" 
                    :disabled="isSubmitting"
                    class="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#D00004] hover:bg-[#B30003] shadow-md hover:shadow-lg disabled:opacity-50 transition-all"
                  >
                    <span v-if="!isSubmitting">SUBMIT INQUIRY</span>
                    <span v-else>SUBMITTING...</span>
                    <span class="text-sm">→</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

const form = reactive({
  fullName: '',
  organization: '',
  email: '',
  phone: '',
  sector: '',
  landSize: '1 - 3 Hectares',
  message: ''
})

const isSubmitting = ref(false)
const formSubmitted = ref(false)

function submitForm() {
  isSubmitting.value = true
  setTimeout(() => {
    // Save to localStorage for demo persistence so admin dashboard can inspect
    try {
      const existing = JSON.parse(localStorage.getItem('arua_sez_inquiries') || '[]')
      existing.unshift({
        id: Date.now(),
        ...form,
        submittedAt: new Date().toISOString()
      })
      localStorage.setItem('arua_sez_inquiries', JSON.stringify(existing))
    } catch (e) {
      console.warn('LocalStorage save failed', e)
    }

    isSubmitting.value = false
    formSubmitted.value = true
  }, 600)
}
</script>
