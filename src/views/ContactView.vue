<template>
  <div class="min-h-screen flex flex-col bg-white font-sans text-slate-800" v-no-copy>
    <AppHeader />

    <main class="flex-grow">
      
      <!-- ═══ CLEAN HEADER & CONTACT INFO ═══ -->
      <section class="pt-28 pb-16 bg-[#F8FAFC]">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <!-- Simple Page Title -->
          <div class="text-center mb-16">
            <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-3">Connect &amp; Invest</div>
            <h1 class="font-heading font-black text-4xl sm:text-5xl text-slate-900 tracking-tight mb-4">
              Contact the Development Office
            </h1>
            <p class="text-base text-slate-500 max-w-2xl mx-auto">
              Our facilitation executives are based in Arua City to coordinate site visits, plot demarcations, and licensing procedures. Reach out to us directly.
            </p>
          </div>

          <!-- Contact Info Cards (Horizontal) -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div class="bg-white rounded-2xl p-8 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
              <div class="w-14 h-14 rounded-full bg-red-50 text-[#D00004] flex items-center justify-center mx-auto mb-5">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Physical Location</h4>
              <p class="text-sm font-semibold text-slate-800">Plot 22A–22D Ujio Road<br/>Arua City, West Nile, Uganda</p>
            </div>

            <div class="bg-white rounded-2xl p-8 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
              <div class="w-14 h-14 rounded-full bg-amber-50 text-[#D17F00] flex items-center justify-center mx-auto mb-5">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Direct Telephone</h4>
              <a href="tel:+256701117851" class="text-lg font-bold text-slate-900 hover:text-[#D00004] transition-colors block mb-1">+256 701 117 851</a>
              <span class="text-[11px] text-emerald-600 font-semibold">Mon–Fri, 8:00 AM – 5:00 PM</span>
            </div>

            <div class="bg-white rounded-2xl p-8 border border-slate-200 text-center shadow-sm hover:shadow-md transition-shadow">
              <div class="w-14 h-14 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center mx-auto mb-5">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Official Email</h4>
              <a href="mailto:info@aruasez.ug" class="text-lg font-bold text-[#D00004] hover:underline block mb-1">info@aruasez.ug</a>
              <span class="text-[11px] text-slate-500">Official inquiries &amp; dossier requests</span>
            </div>

          </div>
        </div>
      </section>

      <!-- ═══ EXPRESSION OF INTEREST FORM ═══ -->
      <section class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
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
                <div class="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6 text-3xl font-black">✓</div>
                <h4 class="font-heading font-black text-2xl text-slate-900 mb-3">Inquiry Received Successfully!</h4>
                <p class="text-base text-slate-500 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong class="text-slate-800">{{ form.fullName || 'Investor' }}</strong>. Our investment desk will contact you at <strong class="text-[#D00004]">{{ form.email }}</strong> within 24 hours.
                </p>
                <div class="mt-8 p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-sm text-slate-700">
                  While you wait, <a href="/documents/aruasez_profile.pdf" target="_blank" class="text-[#D00004] font-bold hover:underline">download our Company Profile (PDF)</a> to share with your team.
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
                      <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                      Protected by reCAPTCHA
                    </div>
                    <button type="submit" :disabled="isSubmitting"
                      class="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl text-sm font-extrabold uppercase tracking-wider text-white bg-[#D00004] hover:bg-[#B30003] shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200">
                      <span v-if="!isSubmitting">SUBMIT INQUIRY</span>
                      <span v-else class="flex items-center gap-2">
                        <svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                        SUBMITTING...
                      </span>
                      <span v-if="!isSubmitting">→</span>
                    </button>
                  </div>
                </div>

              </form>
            </div>
          </div>

        </div>
      </section>

      <!-- ═══ PARTNER CATEGORIES (MOVED DOWN) ═══ -->
      <section class="py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-2xl mx-auto mb-14">
            <h2 class="font-heading font-extrabold text-3xl text-slate-900 tracking-tight">Target Partner Categories</h2>
            <p class="text-slate-500 mt-4">We are actively engaging visionary institutions seeking sustainable high yields across East and Central Africa.</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="partner in partners" :key="partner.title"
              class="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5" :class="partner.iconBg">
                  <svg class="w-6 h-6" :class="partner.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="partner.icon"/>
                  </svg>
                </div>
                <h3 class="font-heading font-bold text-lg text-slate-900 mb-3">{{ partner.title }}</h3>
                <p class="text-sm text-slate-600 leading-relaxed">{{ partner.desc }}</p>
              </div>
              <div class="mt-6 pt-5 border-t border-slate-100 text-xs font-bold uppercase tracking-wider" :class="partner.tagColor">
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

// ── reCAPTCHA v2 site key (replace with your own from console.cloud.google.com) ──
const RECAPTCHA_SITE_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'

const form = reactive({
  fullName: '', organization: '', email: '', phone: '',
  sector: '', landSize: '1 - 3 Hectares', message: ''
})

const isSubmitting = ref(false)
const formSubmitted = ref(false)
const captchaError  = ref('')
let   widgetId      = null

// ── Load reCAPTCHA script ──
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

// ── Submit ──
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

// ── Partner categories ──
const partners = [
  { title: 'Anchor Investors', desc: 'Multinational and regional enterprises establishing flagship processing plants in agro-industry, gold refining, or large-scale manufacturing.', tag: 'Priority Allocation', iconBg: 'bg-red-50', iconColor: 'text-[#D00004]', tagColor: 'text-[#D00004]', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z' },
  { title: 'Infrastructure Partners', desc: 'Specialized concessionaires co-investing in captive solar, industrial water, standard factory shells, and digital backbone infrastructure.', tag: 'PPP & Concessions', iconBg: 'bg-amber-50', iconColor: 'text-[#D17F00]', tagColor: 'text-[#D17F00]', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { title: 'Development Finance (DFIs)', desc: 'Bilateral and multilateral institutions seeking high-impact ESG opportunities that spur sustainable industrialization.', tag: 'ESG Capital', iconBg: 'bg-slate-100', iconColor: 'text-slate-800', tagColor: 'text-slate-800', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: 'Agro-Industrial Operators', desc: 'Companies organizing contract farming across West Nile for high-yield grains, oilseeds, shea nuts, and cassava.', tag: 'Supply-Chain', iconBg: 'bg-emerald-50', iconColor: 'text-emerald-700', tagColor: 'text-emerald-700', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: 'Logistics Firms', desc: 'Freight forwarding, bonded yard operators, and cold-chain fleets operating corridors to South Sudan and DRC.', tag: 'Trade Hub', iconBg: 'bg-purple-50', iconColor: 'text-purple-700', tagColor: 'text-purple-700', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' }
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
