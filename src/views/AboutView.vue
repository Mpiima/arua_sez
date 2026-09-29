<template>
  <div class="min-h-screen flex flex-col bg-white font-sans text-slate-800">
    <AppHeader />

    <main class="flex-grow">
      <!-- ═══════════════════════════════════════════════
           Page Banner Header
           ═══════════════════════════════════════════════ -->
      <section class="relative py-20 bg-[#0B0F19] text-white overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img src="/images/slid (1).jpeg" alt="Arua Special Economic Zone Building" class="w-full h-full object-cover object-center"/>
        </div>
        <div class="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/50 z-0"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-wider uppercase text-amber-300 mb-4">
              <span>About Arua SEZ</span>
            </div>
            <h1 class="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
              A Free Economic Zone for West Nile, Uganda
            </h1>
            <p class="text-base sm:text-lg text-slate-300 leading-relaxed">
              Unlocking Trade. Powering Industry. Creating Opportunity. A purpose-built industrial and commercial platform catalyzing regional integration and sustainable prosperity.
            </p>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════
           Vision & Mission
           ═══════════════════════════════════════════════ -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <!-- Vision / Mission cards — staggered reveal -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <!-- Vision -->
            <div
              class="scroll-reveal"
              :class="visionRevealed ? 'reveal-in' : 'reveal-out'"
              :ref="visionRevealRef"
              style="transition-delay: 0ms"
            >
              <div class="rounded-3xl p-10 bg-[#0B0F19] text-white relative overflow-hidden shadow-xl border border-slate-800 flex flex-col justify-between h-full">
                <div>
                  <div class="w-12 h-12 rounded-xl bg-amber-500/15 text-[#F59E0B] flex items-center justify-center mb-6">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  </div>
                  <div class="text-xs font-extrabold tracking-widest text-[#F59E0B] uppercase mb-3">OUR VISION</div>
                  <p class="text-base font-medium leading-relaxed text-slate-300">
                    "To establish West Nile as a competitive industrial and trade hub that drives inclusive prosperity and regional integration."
                  </p>
                </div>
                <!-- <div class="mt-8 pt-6 border-t border-slate-800 text-xs text-slate-400">
                  Strategic focus across Uganda, South Sudan, DRC, and CAR.
                </div> -->
              </div>
            </div>

            <!-- Mission -->
            <div
              class="scroll-reveal"
              :class="missionRevealed ? 'reveal-in' : 'reveal-out'"
              :ref="missionRevealRef"
              style="transition-delay: 100ms"
            >
              <div class="rounded-3xl p-10 bg-gradient-to-br from-[#D00004] to-[#990003] text-white relative overflow-hidden shadow-xl flex flex-col justify-between h-full">
                <div>
                  <div class="w-12 h-12 rounded-xl bg-white/20 text-white flex items-center justify-center mb-6">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
                  </div>
                  <div class="text-xs font-extrabold tracking-widest text-amber-200 uppercase mb-3">OUR MISSION</div>
                  <p class="text-base font-medium leading-relaxed text-white">
                    "To provide world-class infrastructure, investor incentives, and regulatory efficiency that attract responsible investment and create dignified employment for the people of West Nile."
                  </p>
                </div>
                <!-- <div class="mt-8 pt-6 border-t border-red-400/30 text-xs text-red-100">
                  Full alignment with the Uganda Investment Authority (UIA).
                </div> -->
              </div>
            </div>
          </div>

          <!-- Why West Nile Section -->
          <div class="mb-20">
            <div
              class="scroll-reveal text-center max-w-3xl mx-auto mb-14"
              :class="whyTitleRevealed ? 'reveal-in' : 'reveal-out'"
              :ref="whyTitleRevealRef"
            >
              <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">REGIONAL CONTEXT</div>
              <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                Why West Nile?
              </h2>
              <p class="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                West Nile is one of Uganda's most strategically located regions. With direct proximity to multiple international borders and rapidly surging regional consumer demand, it presents untapped potential across five key dimensions:
              </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                v-for="(card, index) in whyCards"
                :key="card.number"
                :ref="(el) => { if (el) whyCardRefs[index] = el }"
                class="scroll-reveal p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all"
                :class="whyCardRevealed[index] ? 'reveal-in' : 'reveal-out'"
                :style="{ transitionDelay: `${(index % 3) * 80}ms` }"
              >
                <div class="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm mb-4" :class="card.badgeClass">
                  {{ card.number }}
                </div>
                <h4 class="font-heading font-bold text-base text-slate-900 mb-2">{{ card.title }}</h4>
                <p class="text-xs text-slate-600 leading-relaxed">{{ card.description }}</p>
              </div>

              <!-- CTA card -->
              <div
                :ref="(el) => { if (el) whyCardRefs[5] = el }"
                class="scroll-reveal p-7 rounded-2xl bg-slate-900 text-white border border-slate-800 flex flex-col justify-between"
                :class="whyCardRevealed[5] ? 'reveal-in' : 'reveal-out'"
                style="transition-delay: 400ms"
              >
                <div>
                  <div class="text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">THE PLATFORM</div>
                  <h4 class="font-heading font-bold text-base text-white mb-2">Ready For Capital</h4>
                  <p class="text-xs text-slate-300 leading-relaxed">Arua SEZ exists to transform this regional potential into measurable, sustained economic growth.</p>
                </div>
                <RouterLink to="/sectors" class="text-xs font-bold text-[#F59E0B] hover:underline mt-4">Explore Core Sectors →</RouterLink>
              </div>
            </div>
          </div>

          <!-- On The Ground — Photo Strip -->
          <div
            class="scroll-reveal mb-16"
            :class="impactRevealed ? 'reveal-in' : 'reveal-out'"
            :ref="impactRevealRef"
          >
            <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-3">ON THE GROUND</div>
            <h3 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-snug mb-8">
              Activity at Arua SEZ
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <!-- Photo 1: Team briefing -->
              <div class="relative rounded-2xl overflow-hidden h-64 group shadow-md">
                <img
                  src="/images/aruasez (10).jpeg"
                  alt="Arua SEZ team briefing session on site"
                  class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4">
                  <p class="text-white text-xs font-semibold leading-snug">Team briefing & site coordination</p>
                </div>
              </div>
              <!-- Photo 2: Executive site visit -->
              <div class="relative rounded-2xl overflow-hidden h-64 group shadow-md">
                <img
                  src="/images/slid (2).jpeg"
                  alt="Arua SEZ field inspection and site review"
                  class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4">
                  <p class="text-white text-xs font-semibold leading-snug">Ground-level site inspection</p>
                </div>
              </div>
              <!-- Photo 3: Leadership team -->
              <div class="relative rounded-2xl overflow-hidden h-64 group shadow-md">
                <img
                  src="/images/aruasez (22).jpeg"
                  alt="Arua SEZ leadership team"
                  class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4">
                  <p class="text-white text-xs font-semibold leading-snug">SEZ leadership & management team</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Economic Impact & Governance -->
          <div
            class="scroll-reveal grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-[#F8FAFC] rounded-3xl overflow-hidden border border-slate-200"
            :class="resourcesBannerRevealed ? 'reveal-in' : 'reveal-out'"
            :ref="resourcesBannerRevealRef"
          >
            <!-- Photo panel -->
            <div class="lg:col-span-5 relative min-h-[280px] overflow-hidden">
              <img
                src="/images/aruasez (1).jpeg"
                alt="Arua SEZ site survey team"
                class="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div class="absolute inset-0 bg-gradient-to-r from-transparent to-slate-50/10"></div>
            </div>
            <!-- Text panel -->
            <div class="lg:col-span-7 p-8 sm:p-10 space-y-5">
              <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase">ECONOMIC IMPACT</div>
              <h3 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-snug">
                Projected Impact on West Nile &amp; the Region
              </h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                By serving as an anchor processing zone, Arua SEZ directly empowers the local and regional economy:
              </p>
              <ul class="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li class="flex items-center gap-2.5"><span class="text-[#D00004] font-black">✓</span> Generate thousands of direct and indirect jobs for youth and professionals.</li>
                <li class="flex items-center gap-2.5"><span class="text-[#D00004] font-black">✓</span> Increase export earnings from West Nile commodities and refined goods.</li>
                <li class="flex items-center gap-2.5"><span class="text-[#D00004] font-black">✓</span> Strengthen cross-border economic integration between Uganda, DRC, South Sudan, and CAR.</li>
                <li class="flex items-center gap-2.5"><span class="text-[#D00004] font-black">✓</span> Expand the local and national tax base sustainably.</li>
              </ul>
              <div class="pt-4 border-t border-slate-200">
                <RouterLink to="/contact" class="inline-flex items-center gap-2 text-xs font-bold text-[#D00004] hover:text-[#B30003] uppercase tracking-wider">
                  <span>Connect With Our Leadership</span>
                  <span>→</span>
                </RouterLink>
              </div>
            </div>
          </div>

          <!-- Resources CTA Banner -->
          <div class="mt-16 rounded-3xl overflow-hidden bg-gradient-to-r from-[#0B0F19] to-slate-800 border border-slate-700 flex flex-col sm:flex-row items-stretch">
            <!-- Photo accent -->
            <div class="relative w-full sm:w-48 lg:w-64 min-h-[140px] flex-shrink-0 overflow-hidden">
              <img src="/images/aruasez (2).jpeg" alt="Leadership site visit" class="absolute inset-0 w-full h-full object-cover object-center opacity-60" />
              <div class="absolute inset-0 bg-gradient-to-r from-[#0B0F19]/20 to-[#0B0F19]/60"></div>
            </div>
            <!-- Content -->
            <div class="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 sm:p-12 flex-1">
              <div class="space-y-2">
                <div class="text-xs font-extrabold tracking-widest text-amber-300 uppercase">Investor Centre</div>
                <h3 class="font-heading font-bold text-xl sm:text-2xl text-white">Download our Investor Prospectus</h3>
                <p class="text-sm text-slate-400">Get the full investment pack — brochures, fact sheets, and the 19-point incentives framework.</p>
              </div>
              <RouterLink
                to="/resources"
                class="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 text-xs font-bold tracking-wider uppercase shadow-lg transition-all"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                View Resources
              </RouterLink>
            </div>
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

// ─── Scroll reveal helper ─────────────────────────────────────────────────────
function makeReveal(elRef, revealedRef, opts = {}) {
  const { threshold = 0.12, rootMargin = '0px 0px -60px 0px' } = opts
  let obs = null
  onMounted(() => {
    obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { revealedRef.value = true; obs.disconnect() }
    }, { threshold, rootMargin })
    if (elRef.value) obs.observe(elRef.value)
  })
  onUnmounted(() => { if (obs) obs.disconnect() })
}

// Vision
const visionEl = ref(null)
const visionRevealed = ref(false)
const visionRevealRef = (el) => { visionEl.value = el }
makeReveal(visionEl, visionRevealed)

// Mission
const missionEl = ref(null)
const missionRevealed = ref(false)
const missionRevealRef = (el) => { missionEl.value = el }
makeReveal(missionEl, missionRevealed)

// Why title
const whyTitleEl = ref(null)
const whyTitleRevealed = ref(false)
const whyTitleRevealRef = (el) => { whyTitleEl.value = el }
makeReveal(whyTitleEl, whyTitleRevealed)

// Impact section
const impactEl = ref(null)
const impactRevealed = ref(false)
const impactRevealRef = (el) => { impactEl.value = el }
makeReveal(impactEl, impactRevealed)

// Resources banner
const resourcesBannerEl = ref(null)
const resourcesBannerRevealed = ref(false)
const resourcesBannerRevealRef = (el) => { resourcesBannerEl.value = el }
makeReveal(resourcesBannerEl, resourcesBannerRevealed)

// Why West Nile cards stagger
const whyCardRefs = ref([])
const whyCardRevealed = ref([])
let whyObserver = null

onMounted(() => {
  whyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const i = whyCardRefs.value.indexOf(entry.target)
        if (i !== -1) {
          setTimeout(() => { whyCardRevealed.value[i] = true }, (i % 3) * 80)
          whyObserver.unobserve(entry.target)
        }
      }
    })
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' })

  whyCardRefs.value.forEach(el => { if (el) whyObserver.observe(el) })
})

onUnmounted(() => { if (whyObserver) whyObserver.disconnect() })

// ─── Data ─────────────────────────────────────────────────────────────────────
const whyCards = [
  {
    number: '01',
    title: 'Agro-Processing & Value Addition',
    description: 'Transforming raw agricultural commodities—groundnuts, rice, coffee, cassava, oilseeds, and shea butter—into packaged, refined consumer goods.',
    badgeClass: 'bg-amber-500/10 text-[#D17F00]'
  },
  {
    number: '02',
    title: 'Cross-Border Trade & Logistics',
    description: 'Serving as the primary trade gateway between Uganda, South Sudan, the Eastern Democratic Republic of Congo, and the Central African Republic.',
    badgeClass: 'bg-red-500/10 text-[#D00004]'
  },
  {
    number: '03',
    title: 'Manufacturing & Light Industry',
    description: 'Local production of ethanol, confectionery, soaps, steel construction lines, and building supplies that deliver products up to 20% cheaper than distant imports.',
    badgeClass: 'bg-slate-900 text-white'
  },
  {
    number: '04',
    title: 'Renewable Energy Solutions',
    description: 'Harnessing abundant solar and clean power resources to assemble decentralized mini-grid equipment and ensure green industrial operations.',
    badgeClass: 'bg-amber-500/10 text-[#D17F00]'
  },
  {
    number: '05',
    title: 'Youth Employment & Skills',
    description: 'Unlocking regional human capital through structured vocational pipelines, technical partnerships, and youth entrepreneurship incubation.',
    badgeClass: 'bg-red-500/10 text-[#D00004]'
  },
]
</script>

<style scoped>
/* ─── Scroll reveal ─────────────────────────────────────────────────────────── */
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
</style>
