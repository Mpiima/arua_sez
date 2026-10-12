<template>
  <div class="min-h-screen flex flex-col bg-white font-sans text-slate-800" v-no-copy>
    <AppHeader />

    <main class="flex-grow">
      
      <!-- ═══ CLEAN HERO WITH SPLIT REAL TEAM PHOTO ═══ -->
      <section class="bg-[#0B0F19] pt-24 pb-16 sm:pb-20 border-b-4 border-[#D00004]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div class="lg:col-span-7 space-y-4">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-wider uppercase text-amber-300">
                <span>Investor Relations &amp; Facilitation</span>
              </div>
              <h1 class="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                Connect with the Arua SEZ Development Office
              </h1>
              <p class="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Our facilitation executives and site engineers are based on the ground in Arua City to coordinate site inspections, plot allocations, and fast-tracked statutory approvals.
              </p>
              <div class="pt-2 flex flex-wrap gap-3">
                <a
                  href="#eoi-form"
                  class="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#D00004] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B30003] transition-colors"
                >
                  Submit Expression of Interest
                </a>
                <a
                  href="#map-section"
                  class="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-600 text-slate-200 text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors"
                >
                  View Office &amp; Map
                </a>
              </div>
            </div>

            <!-- Crisp Real Team Photo -->
            <div class="lg:col-span-5">
              <div class="rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700 bg-slate-900 group">
                <img
                  src="/images/aruasez (22).jpeg"
                  alt="Arua SEZ Facilitation Team"
                  class="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
                <div class="p-3.5 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span class="font-bold text-white">Arua SEZ Development Team</span>
                  <span class="text-slate-400">Arua City, Uganda</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ═══ CONTACT INFO CARDS ═══ -->
      <section class="py-12 bg-white border-b border-gray-200">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div class="bg-[#F8FAFC] rounded-2xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div class="text-[11px] font-extrabold uppercase tracking-widest text-[#D00004] mb-2">Physical Location</div>
                <h3 class="font-heading font-bold text-lg text-slate-900 mb-1">Arua Development Office</h3>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Plot 22A–22D Ujio Road<br/>
                  Arua City, West Nile, Uganda
                </p>
              </div>
              <div class="mt-4 pt-4 border-t border-slate-200 text-xs text-slate-500">
                10 mins from Arua Airport (RUA)
              </div>
            </div>

            <div class="bg-[#F8FAFC] rounded-2xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div class="text-[11px] font-extrabold uppercase tracking-widest text-[#D00004] mb-2">Telephone Lines</div>
                <h3 class="font-heading font-bold text-lg text-slate-900 mb-1">Direct Investor Desk</h3>
                <a href="tel:+256701117851" class="text-lg font-bold text-[#D00004] hover:underline block mb-1">
                  +256 701 117 851
                </a>
                <p class="text-xs text-slate-500">Also available on WhatsApp for instant investor inquiries</p>
              </div>
              <div class="mt-4 pt-4 border-t border-slate-200 text-xs text-emerald-700 font-semibold">
                Mon–Fri, 8:00 AM – 5:00 PM EAT
              </div>
            </div>

            <div class="bg-[#F8FAFC] rounded-2xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div class="text-[11px] font-extrabold tracking-widest text-[#D00004] uppercase mb-2">Electronic Mail</div>
                <h3 class="font-heading font-bold text-lg text-slate-900 mb-1">Official Secretariat</h3>
                <a href="mailto:info@aruasez.ug" class="text-lg font-bold text-slate-900 hover:text-[#D00004] transition-colors block mb-1">
                  info@aruasez.ug
                </a>
                <p class="text-xs text-slate-500">For formal dossier requests, EOIs, and partnership proposals</p>
              </div>
              <div class="mt-4 pt-4 border-t border-slate-200 text-xs text-slate-500">
                Response within 24 business hours
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ═══ MAP & LOCATION SECTION ═══ -->
      <section id="map-section" class="py-16 bg-[#F8FAFC] border-b border-gray-200 scroll-mt-16">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="max-w-2xl mb-8">
            <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">Geographic Location</div>
            <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">Map of Arua, Uganda</h2>
            <p class="mt-2 text-slate-600 text-sm leading-relaxed">
              Located in Arua City, West Nile — positioned at the tri-border economic junction connecting Uganda, the Democratic Republic of Congo, and South Sudan.
            </p>
          </div>

          <!-- Map and Location Card Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            <!-- Interactive Map Container -->
            <div class="lg:col-span-8 rounded-2xl overflow-hidden border border-slate-300 shadow-lg bg-white relative min-h-[380px] sm:min-h-[460px]">
              <iframe
                title="Map of Arua, Uganda"
                src="https://maps.google.com/maps?q=Arua,+Uganda&t=&z=13&ie=UTF8&iwloc=&output=embed"
                class="w-full h-full min-h-[380px] sm:min-h-[460px] border-0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <!-- Side Location Highlights & Corridor Details -->
            <div class="lg:col-span-4 flex flex-col justify-between gap-4">
              <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div class="text-xs font-bold uppercase tracking-wider text-slate-400">Regional Gateway</div>
                <h4 class="font-heading font-bold text-base text-slate-900">Key Transport Distance</h4>
                <ul class="space-y-3 text-xs text-slate-700">
                  <li class="flex items-start justify-between pb-2 border-b border-slate-100">
                    <span class="font-semibold text-slate-900">Arua Airport (RUA)</span>
                    <span class="text-slate-500">~10 km</span>
                  </li>
                  <li class="flex items-start justify-between pb-2 border-b border-slate-100">
                    <span class="font-semibold text-slate-900">DRC Border (Vurra Crossing)</span>
                    <span class="text-slate-500">~25 km</span>
                  </li>
                  <li class="flex items-start justify-between pb-2 border-b border-slate-100">
                    <span class="font-semibold text-slate-900">South Sudan Border (Oraba)</span>
                    <span class="text-slate-500">~160 km</span>
                  </li>
                  <li class="flex items-start justify-between">
                    <span class="font-semibold text-slate-900">Kampala City</span>
                    <span class="text-slate-500">~450 km (Paved)</span>
                  </li>
                </ul>
              </div>

              <!-- Real Site Photo Card -->
              <div class="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
                <div class="relative h-44 overflow-hidden bg-slate-900">
                  <img
                    src="/images/aruasez (8).jpeg"
                    alt="Strategic Corridor in Arua"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>
                  <div class="absolute bottom-3 left-3 text-white text-xs font-bold">
                    Arua SEZ Corridor Access
                  </div>
                </div>
                <div class="p-4 text-xs text-slate-600 leading-relaxed">
                  Paved national highways connect the SEZ directly to central distribution nodes.
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Arua,+Uganda"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#0B0F19] hover:bg-[#1E293B] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md text-center"
              >
                <span>Open in Google Maps</span>
                <span>↗</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      <!-- ═══ EXPRESSION OF INTEREST FORM WITH REAL IMAGES ═══ -->
      <section id="eoi-form" class="py-20 bg-white scroll-mt-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            <!-- Left: EOI Form (7 cols) -->
            <div class="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
              <!-- Form header -->
              <div class="bg-gradient-to-r from-[#0B0F19] to-[#1E293B] px-8 py-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
                <div>
                  <h3 class="font-heading font-black text-2xl text-white mb-1">Expression of Interest (EOI)</h3>
                  <p class="text-sm text-slate-400">Submit your preliminary investment parameters.</p>
                </div>
                <div class="mt-4 sm:mt-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20">
                  <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span class="text-xs font-bold text-white uppercase tracking-wider">Phase 1 Open</span>
                </div>
              </div>

              <div class="px-8 py-10">
                <!-- Success State -->
                <div v-if="formSubmitted" class="text-center py-10">
                  <div class="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6 text-2xl font-black">✓</div>
                  <h4 class="font-heading font-black text-2xl text-slate-900 mb-3">Inquiry Received Successfully!</h4>
                  <p class="text-base text-slate-500 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong class="text-slate-800">{{ form.fullName || 'Investor' }}</strong>. Our investment desk will contact you at <strong class="text-[#D00004]">{{ form.email }}</strong> within 24 hours.
                  </p>
                  <div class="mt-8 p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-sm text-slate-700">
                    While you wait, download our investor briefs or explore our priority industrial sectors.
                  </div>
                </div>

                <!-- Form -->
                <form v-else @submit.prevent="submitForm" class="space-y-6" autocomplete="off">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div class="form-group">
                      <label class="form-label">Full Name <span class="text-[#D00004]">*</span></label>
                      <input v-model="form.fullName" type="text" required placeholder="e.g. John Okello" class="form-input"/>
                    </div>
                    <div class="form-group">
                      <label class="form-label">Company / Organization <span class="text-[#D00004]">*</span></label>
                      <input v-model="form.organization" type="text" required placeholder="e.g. Nile Agro Industries Ltd" class="form-input"/>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div class="form-group">
                      <label class="form-label">Official Email <span class="text-[#D00004]">*</span></label>
                      <input v-model="form.email" type="email" required placeholder="j.okello@company.com" class="form-input"/>
                    </div>
                    <div class="form-group">
                      <label class="form-label">Telephone Number <span class="text-[#D00004]">*</span></label>
                      <input v-model="form.phone" type="tel" required placeholder="+256 700 000 000" class="form-input"/>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div class="form-group">
                      <label class="form-label">Sector of Interest <span class="text-[#D00004]">*</span></label>
                      <select v-model="form.sector" required class="form-input bg-white">
                        <option value="" disabled>Select sector...</option>
                        <option value="Agro-Processing">Agriculture &amp; Agro-Processing</option>
                        <option value="Mining &amp; Mineral">Mining &amp; Gold Refining</option>
                        <option value="Manufacturing">Manufacturing &amp; Industrial Ethanol</option>
                        <option value="Steel &amp; Building">Steel, Foundry &amp; Building Materials</option>
                        <option value="Logistics &amp; Warehousing">Cross-Border Logistics &amp; Bonded Yards</option>
                        <option value="Fisheries">Fisheries &amp; Aquaculture Processing</option>
                        <option value="Infrastructure/Utilities">Infrastructure / Energy Concession</option>
                        <option value="Other">Other Strategic Activity</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label class="form-label">Estimated Plot Need</label>
                      <select v-model="form.landSize" class="form-input bg-white">
                        <option value="0.5 - 1 Hectare">0.5 – 1 Hectare</option>
                        <option value="1 - 3 Hectares">1 – 3 Hectares</option>
                        <option value="3+ Hectares">3+ Hectares (Anchor)</option>
                        <option value="Standard Factory Shell">Factory Shell / Warehouse Only</option>
                        <option value="Not Sure">To be determined</option>
                      </select>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="form-label">Project Overview &amp; Specific Requirements</label>
                    <textarea v-model="form.message" rows="4"
                      placeholder="Describe your proposed operation, expected power/water requirements, export markets, or investment timeline..."
                      class="form-input resize-none"></textarea>
                  </div>

                  <div class="pt-4 space-y-5">
                    <div id="recaptcha-container" class="flex justify-center sm:justify-start"></div>
                    <p v-if="captchaError" class="text-sm text-[#D00004] font-bold text-center sm:text-left">{{ captchaError }}</p>

                    <div class="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-100 pt-6">
                      <div class="flex items-center gap-2 text-xs text-slate-500">
                        <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                        Direct Investor Confidentiality Guaranteed
                      </div>
                      <button type="submit" :disabled="isSubmitting"
                        class="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl text-sm font-extrabold uppercase tracking-wider text-white bg-[#D00004] hover:bg-[#B30003] shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200">
                        <span v-if="!isSubmitting">SUBMIT INQUIRY</span>
                        <span v-else>SUBMITTING...</span>
                        <span v-if="!isSubmitting">→</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <!-- Right: Real Site Imagery & Facilitation Guarantees (5 cols) -->
            <div class="lg:col-span-5 space-y-6">
              
              <!-- Real Photo Card 1: Site Inspection -->
              <div class="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md group">
                <div class="relative h-56 sm:h-64 overflow-hidden bg-slate-900">
                  <img
                    src="/images/aruasez (2).jpeg"
                    alt="Investor Site Briefing in Arua"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>
                  <div class="absolute bottom-4 left-4 right-4 text-white">
                    <span class="text-[10px] font-extrabold uppercase tracking-wider bg-[#D00004] px-2.5 py-1 rounded text-white inline-block mb-1">
                      Investor Field Briefings
                    </span>
                    <div class="text-xs font-semibold text-slate-200">Guided on-ground tours and plot boundary inspections.</div>
                  </div>
                </div>
                <div class="p-6">
                  <h4 class="font-heading font-bold text-base text-slate-900 mb-2">Dedicated Site Visits</h4>
                  <p class="text-xs text-slate-600 leading-relaxed">
                    Our team hosts investors and technical partners for detailed walk-throughs of available industrial acreage and utility connection points in Arua.
                  </p>
                </div>
              </div>

              <!-- Real Photo Card 2: Serviced Land -->
              <div class="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md group">
                <div class="relative h-56 sm:h-64 overflow-hidden bg-slate-900">
                  <img
                    src="/images/aruasez (1).jpeg"
                    alt="Arua SEZ Surveyed Acreage"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>
                  <div class="absolute bottom-4 left-4 right-4 text-white">
                    <span class="text-[10px] font-extrabold uppercase tracking-wider bg-[#0B0F19] border border-slate-700 px-2.5 py-1 rounded text-white inline-block mb-1">
                      Ready For Construction
                    </span>
                    <div class="text-xs font-semibold text-slate-200">Surveyed, graded, and titled industrial acreage.</div>
                  </div>
                </div>
                <div class="p-6">
                  <h4 class="font-heading font-bold text-base text-slate-900 mb-2">Immediate Plot Demarcation</h4>
                  <p class="text-xs text-slate-600 leading-relaxed">
                    Plug-and-play plots are allocated with formal lease agreements, environmental impact clearances, and on-site customs coordination.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <!-- ═══ TARGET PARTNER CATEGORIES ═══ -->
      <section class="py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-2xl mx-auto mb-14">
            <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">Collaboration</div>
            <h2 class="font-heading font-extrabold text-3xl text-slate-900 tracking-tight">Target Partner Categories</h2>
            <p class="text-slate-600 mt-2 text-sm leading-relaxed">We are actively engaging visionary institutions seeking sustainable high yields across East and Central Africa.</p>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="(partner, i) in partners" :key="partner.title"
              class="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#D00004]/30 transition-all">
              <div>
                <div class="text-xs font-extrabold tracking-widest text-[#D00004] mb-3">{{ String(i + 1).padStart(2, '0') }}</div>
                <h3 class="font-heading font-bold text-base text-slate-900 mb-2">{{ partner.title }}</h3>
                <p class="text-xs text-slate-600 leading-relaxed">{{ partner.desc }}</p>
              </div>
              <div class="mt-5 pt-4 border-t border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                {{ partner.tag }}
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
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

// ── reCAPTCHA v2 site key ──
const RECAPTCHA_SITE_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'

const form = reactive({
  fullName: '', organization: '', email: '', phone: '',
  sector: '', landSize: '1 - 3 Hectares', message: ''
})

const isSubmitting = ref(false)
const formSubmitted = ref(false)
const captchaError  = ref('')
let   widgetId      = null

function loadRecaptcha () {
  if (document.getElementById('recaptcha-script')) return
  const s = document.createElement('script')
  s.id  = 'recaptcha-script'
  s.src = 'https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoaded&render=explicit'
  s.async = true
  s.defer = true
  document.head.appendChild(s)
}

window.onRecaptchaLoaded = () => {
  const el = document.getElementById('recaptcha-container')
  if (el && window.grecaptcha) {
    widgetId = window.grecaptcha.render(el, {
      sitekey: RECAPTCHA_SITE_KEY,
      theme: 'light',
      size: 'normal'
    })
  }
}

onMounted(() => {
  loadRecaptcha()
})

onUnmounted(() => {
  delete window.onRecaptchaLoaded
})

function submitForm () {
  captchaError.value = ''

  if (window.grecaptcha && widgetId !== null) {
    const token = window.grecaptcha.getResponse(widgetId)
    if (!token) {
      captchaError.value = 'Please complete the reCAPTCHA verification before submitting.'
      return
    }
  }

  isSubmitting.value = true
  setTimeout(() => {
    try {
      const existing = JSON.parse(localStorage.getItem('arua_sez_inquiries') || '[]')
      existing.unshift({ id: Date.now(), ...form, submittedAt: new Date().toISOString() })
      localStorage.setItem('arua_sez_inquiries', JSON.stringify(existing))
    } catch (e) { console.warn('LocalStorage save failed', e) }

    isSubmitting.value = false
    formSubmitted.value = true
  }, 900)
}

const partners = [
  { title: 'Anchor Industrial Investors', desc: 'Multinational and regional enterprises establishing flagship processing plants in agro-industry, gold refining, or manufacturing.', tag: 'Priority Allocation' },
  { title: 'Infrastructure Concessionaires', desc: 'Specialized partners co-investing in captive solar, industrial water, standard factory shells, and digital backbone infrastructure.', tag: 'PPP & Concessions' },
  { title: 'Development Finance (DFIs)', desc: 'Bilateral and multilateral institutions seeking high-impact ESG opportunities that spur sustainable industrialization.', tag: 'ESG Capital' },
  { title: 'Agro-Industrial Operators', desc: 'Enterprises organizing contract farming across West Nile for high-yield grains, oilseeds, shea nuts, and cassava.', tag: 'Supply-Chain Hub' },
  { title: 'Logistics & Freight Operators', desc: 'Freight forwarding, bonded yard operators, and cold-chain fleets operating corridors to South Sudan and DRC.', tag: 'Cross-Border Logistics' },
  { title: 'Export Trade Networks', desc: 'Wholesale and commodity trading houses consolidating value-added regional products for continental distribution.', tag: 'Trade Network' }
]
</script>

<script>
export default {
  directives: {
    'no-copy': {
      mounted (el) {
        const prevent = e => e.preventDefault()
        el.addEventListener('contextmenu', prevent)
        el.addEventListener('copy', prevent)
        el.addEventListener('cut', prevent)
        el.style.userSelect = 'none'
        el.style.webkitUserSelect = 'none'
        el._noCopyCleanup = () => {
          el.removeEventListener('contextmenu', prevent)
          el.removeEventListener('copy', prevent)
          el.removeEventListener('cut', prevent)
        }
      },
      unmounted (el) { el._noCopyCleanup?.() }
    }
  }
}
</script>

<style scoped>
.form-label {
  @apply block text-[11px] font-extrabold uppercase tracking-widest text-slate-500 mb-2;
}
.form-input {
  @apply w-full px-5 py-3.5 rounded-xl border border-slate-200 text-sm text-slate-800 bg-[#F8FAFC]
         focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D00004] focus:border-transparent
         placeholder:text-slate-400 transition-all duration-200;
}
.form-input:focus { box-shadow: 0 0 0 4px rgba(208, 0, 4, 0.08); }
</style>
