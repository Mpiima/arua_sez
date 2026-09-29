<template>
  <div class="min-h-screen flex flex-col bg-white font-sans text-slate-800" v-no-copy>
    <AppHeader />

    <main class="flex-grow">
      
      <!-- ═══ HEADER ═══ -->
      <section class="pt-24 pb-16 bg-[#F8FAFC]">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-3">Support & Information</div>
          <h1 class="font-heading font-black text-4xl sm:text-5xl text-slate-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p class="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about investing, operating, and partnering within the Arua Special Economic Zone.
          </p>
        </div>
      </section>

      <!-- ═══ FAQ ACCORDION ═══ -->
      <section class="py-16 bg-white">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="space-y-4">
            <div 
              v-for="(faq, index) in faqs" 
              :key="index"
              class="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
              :class="activeIndex === index ? 'shadow-lg border-amber-300 ring-1 ring-amber-300' : 'hover:border-amber-300 hover:shadow-sm'"
            >
              <button 
                @click="toggleFaq(index)"
                class="w-full px-6 py-5 flex items-center justify-between bg-white text-left focus:outline-none"
              >
                <span class="font-heading font-bold text-lg text-slate-900" :class="activeIndex === index ? 'text-[#D00004]' : ''">
                  {{ faq.question }}
                </span>
                <span 
                  class="ml-4 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 transition-transform duration-300"
                  :class="activeIndex === index ? 'rotate-180 bg-red-50 text-[#D00004]' : 'text-slate-400'"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
                  </svg>
                </span>
              </button>
              
              <div 
                v-show="activeIndex === index"
                class="px-6 pb-6 pt-2 bg-white text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-50"
              >
                {{ faq.answer }}
              </div>
            </div>
          </div>

          <!-- Contact Prompt -->
          <div class="mt-16 text-center p-8 rounded-3xl bg-[#0B0F19] text-white">
            <h3 class="font-heading font-bold text-xl mb-2">Still have questions?</h3>
            <p class="text-sm text-slate-400 mb-6">Our investment facilitation team is ready to help.</p>
            <RouterLink 
              to="/contact" 
              class="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#D00004] hover:bg-[#B30003] transition-colors"
            >
              Contact Us <span>→</span>
            </RouterLink>
          </div>

        </div>
      </section>

    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import { RouterLink } from 'vue-router'

const activeIndex = ref(0) // First one open by default

const toggleFaq = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const faqs = [
  {
    question: "What makes Arua SEZ strategically important?",
    answer: "Arua SEZ is uniquely positioned at the tri-border junction of Uganda, the Democratic Republic of Congo (DRC), and South Sudan. This provides direct, tariff-free access to a captive regional market of over 100 million consumers, making it the premier logistics and manufacturing hub for East and Central Africa."
  },
  {
    question: "What tax incentives are available to investors?",
    answer: "Licensed SEZ operators enjoy a 10-year corporate tax holiday, zero import duties on plant machinery and raw materials, exemption from export taxes, and zero VAT on construction materials. Repatriation of profits is fully guaranteed with no foreign exchange controls."
  },
  {
    question: "How long does it take to get an operating license?",
    answer: "Arua SEZ operates a One-Stop Border Post (OSBP) and a dedicated UIA facilitation desk. We guarantee a fast-track licensing process, completing business registration, environmental approvals, and investment licensing within 14 to 30 days for complete applications."
  },
  {
    question: "Are there pre-built factory shells available?",
    answer: "Yes, Phase 1 includes 'Plug & Play' standard factory shells designed for light manufacturing and agro-processing. Investors can lease these ready-to-use facilities to bypass lengthy construction phases and commence operations immediately."
  },
  {
    question: "What is the minimum land allocation?",
    answer: "Our standard serviced plots begin at 0.5 hectares, suitable for SME industrial operators. However, we also provide customized allocations of 3+ hectares for Anchor Investors requiring large-scale processing facilities or bonded container yards."
  },
  {
    question: "How reliable is the power and water supply?",
    answer: "The SEZ is powered by a dedicated 132kV transmission line integrated with a captive solar mini-grid to ensure 100% uptime. Industrial water is supplied via a 5,000 cubic meter daily capacity reservoir, supported by an on-site wastewater recycling plant."
  },
  {
    question: "Can foreign companies own 100% of their enterprise?",
    answer: "Yes. Uganda allows 100% foreign ownership of investments. There are no mandatory joint-venture requirements, though we actively encourage partnerships that integrate local supply chains."
  },
  {
    question: "What sectors are prioritized for the SEZ?",
    answer: "We are actively targeting Agro-Processing (grains, edible oils, cassava), Commercial Timber, Gold Refining and Mineral Beneficiation, Industrial Ethanol manufacturing, and Cross-Border Logistics/Freight operations."
  }
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
