<template>
  <header
    class="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm"
    @mouseleave="closeAll"
  >
    <!-- Topbar -->
    <div class="bg-[#0B0F19] text-gray-300 py-2 px-4 sm:px-6 lg:px-8 text-[11px] font-semibold hidden lg:flex justify-center items-center gap-8 xl:gap-16">
      <div class="flex items-center gap-6">
        <span class="flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5 text-[#D00004]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          Plot 22A - 22D Ujio Road, River Oli Division Arua City, West Nile Region, Uganda
        </span>
        <span class="flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5 text-[#D00004]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          info@aruasez.com
        </span>
        <span class="flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5 text-[#D00004]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          +256 701 117 851
        </span>
      </div>
      <div class="flex items-center gap-5">
        <div class="relative group">
          <button class="flex items-center gap-1 hover:text-white transition-colors uppercase tracking-wider">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"/></svg>
            EN
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div class="absolute right-0 mt-2 w-24 bg-white text-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden z-50 py-1">
            <button class="w-full text-left px-3 py-1.5 hover:bg-gray-50 hover:text-[#D00004] transition-colors text-xs">English</button>
            <button class="w-full text-left px-3 py-1.5 hover:bg-gray-50 hover:text-[#D00004] transition-colors text-xs">French</button>
            <button class="w-full text-left px-3 py-1.5 hover:bg-gray-50 hover:text-[#D00004] transition-colors text-xs">Swahili</button>
          </div>
        </div>
        <div class="w-px h-3.5 bg-gray-700"></div>
        <div class="flex items-center gap-3">
          <a href="#" aria-label="Twitter" class="hover:text-white transition-colors"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
          <a href="#" aria-label="LinkedIn" class="hover:text-white transition-colors"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
        </div>
      </div>
    </div>

    <!-- Scroll Progress Bar -->
    <div class="absolute bottom-0 left-0 h-[3px] bg-[#D00004] transition-all duration-75 z-50" :style="{ width: scrollProgress + '%' }"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">

        <!-- Brand Logo -->
        <RouterLink to="/" class="flex items-center gap-3 group py-1 flex-shrink-0" title="Arua Special Economic Zone">
          <img src="/arua_sez_logo.svg" alt="Arua SEZ Logo" class="h-12 sm:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]" />
        </RouterLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-0">

          <!-- HOME -->
          <RouterLink to="/" class="nav-btn" :class="$route.path === '/' ? 'nav-btn--active' : ''">
            HOME
          </RouterLink>

          <!-- ABOUT US -->
          <div class="relative" @mouseenter="open('about')" @mouseleave="close('about')">
            <button class="nav-btn flex items-center gap-1" :class="aboutActive ? 'nav-btn--active' : ''" @click="toggle('about')">
              ABOUT US
              <svg class="w-3 h-3 transition-transform duration-200" :class="activeMenu === 'about' ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <Transition name="dropdown">
              <div v-if="activeMenu === 'about'" class="dropdown-panel w-56">
                <RouterLink to="/about" @click="closeAll" class="dd-item" :class="$route.path === '/about' ? 'dd-item--active' : ''">About Arua SEZ</RouterLink>
                <RouterLink to="/model" @click="closeAll" class="dd-item" :class="$route.path === '/model' ? 'dd-item--active' : ''">Enterprise Model</RouterLink>
                <div class="dd-divider">Governance</div>
                <RouterLink to="/governance" @click="closeAll" class="dd-item dd-item--sub" :class="$route.path === '/governance' ? 'dd-item--active' : ''">Board of Directors</RouterLink>
              </div>
            </Transition>
          </div>

          <!-- INVEST -->
          <div class="relative" @mouseenter="open('invest')" @mouseleave="close('invest')">
            <button class="nav-btn flex items-center gap-1" :class="investActive ? 'nav-btn--active' : ''" @click="toggle('invest')">
              INVEST
              <svg class="w-3 h-3 transition-transform duration-200" :class="activeMenu === 'invest' ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <Transition name="dropdown">
              <div v-if="activeMenu === 'invest'" class="dropdown-panel w-64">
                <!-- Our Offers sub-group -->
                <div class="dd-divider">Our Offers</div>
                <RouterLink to="/location"       @click="closeAll" class="dd-item dd-item--sub" :class="$route.path === '/location'       ? 'dd-item--active' : ''">Strategic Location</RouterLink>
                <RouterLink to="/infrastructure" @click="closeAll" class="dd-item dd-item--sub" :class="$route.path === '/infrastructure' ? 'dd-item--active' : ''">Infrastructure Development</RouterLink>
                <RouterLink to="/workforce"      @click="closeAll" class="dd-item dd-item--sub" :class="$route.path === '/workforce'      ? 'dd-item--active' : ''">Workforce Development</RouterLink>
                <RouterLink to="/incentives"     @click="closeAll" class="dd-item dd-item--sub" :class="$route.path === '/incentives'     ? 'dd-item--active' : ''">Investor Incentives</RouterLink>
                <!-- Top-level invest links -->
                <div class="my-1.5 border-t border-gray-100"></div>
                <RouterLink to="/sectors"     @click="closeAll" class="dd-item" :class="$route.path === '/sectors'     ? 'dd-item--active' : ''">Priority Sectors</RouterLink>
                <RouterLink to="/get-started" @click="closeAll" class="dd-item dd-item--cta">Get Started Now →</RouterLink>
              </div>
            </Transition>
          </div>

          <!-- RESOURCES -->
          <div class="relative" @mouseenter="open('resources')" @mouseleave="close('resources')">
            <button class="nav-btn flex items-center gap-1" :class="resourcesActive ? 'nav-btn--active' : ''" @click="toggle('resources')">
              RESOURCES
              <svg class="w-3 h-3 transition-transform duration-200" :class="activeMenu === 'resources' ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <Transition name="dropdown">
              <div v-if="activeMenu === 'resources'" class="dropdown-panel w-48">
                <RouterLink to="/resources" @click="closeAll" class="dd-item" :class="$route.path === '/resources' ? 'dd-item--active' : ''">Publications</RouterLink>
              </div>
            </Transition>
          </div>

          <!-- MEDIA -->
          <div class="relative" @mouseenter="open('media')" @mouseleave="close('media')">
            <button class="nav-btn flex items-center gap-1" :class="mediaActive ? 'nav-btn--active' : ''" @click="toggle('media')">
              MEDIA
              <svg class="w-3 h-3 transition-transform duration-200" :class="activeMenu === 'media' ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <Transition name="dropdown">
              <div v-if="activeMenu === 'media'" class="dropdown-panel w-48">
                <RouterLink to="/blogs"   @click="closeAll" class="dd-item" :class="$route.path === '/blogs'   ? 'dd-item--active' : ''">News &amp; Updates</RouterLink>
                <RouterLink to="/gallery" @click="closeAll" class="dd-item" :class="$route.path === '/gallery' ? 'dd-item--active' : ''">Gallery</RouterLink>
              </div>
            </Transition>
          </div>

          <!-- JOBS & TENDERS -->
          <div class="relative" @mouseenter="open('jobs')" @mouseleave="close('jobs')">
            <button class="nav-btn flex items-center gap-1" :class="jobsActive ? 'nav-btn--active' : ''" @click="toggle('jobs')">
              JOBS &amp; TENDERS
              <svg class="w-3 h-3 transition-transform duration-200" :class="activeMenu === 'jobs' ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <Transition name="dropdown">
              <div v-if="activeMenu === 'jobs'" class="dropdown-panel w-48">
                <RouterLink to="/vacancies" @click="closeAll" class="dd-item" :class="$route.path === '/vacancies' ? 'dd-item--active' : ''">Vacancies</RouterLink>
                <RouterLink to="/tenders"   @click="closeAll" class="dd-item" :class="$route.path === '/tenders'   ? 'dd-item--active' : ''">Tenders</RouterLink>
              </div>
            </Transition>
          </div>

          <!-- CONNECT -->
          <div class="relative" @mouseenter="open('connect')" @mouseleave="close('connect')">
            <button class="nav-btn flex items-center gap-1" :class="connectActive ? 'nav-btn--active' : ''" @click="toggle('connect')">
              CONNECT
              <svg class="w-3 h-3 transition-transform duration-200" :class="activeMenu === 'connect' ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <Transition name="dropdown">
              <div v-if="activeMenu === 'connect'" class="dropdown-panel w-48">
                <RouterLink to="/partner" @click="closeAll" class="dd-item" :class="$route.path === '/partner' ? 'dd-item--active' : ''">Partner With Us</RouterLink>
                <RouterLink to="/contact" @click="closeAll" class="dd-item" :class="$route.path === '/contact' ? 'dd-item--active' : ''">Contact Us</RouterLink>
              </div>
            </Transition>
          </div>

        </nav>

        <!-- INVEST NOW button -->
        <div class="hidden xl:flex items-center">
          <RouterLink
            to="/get-started"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase text-white bg-[#D00004] hover:bg-[#B30003] shadow-sm hover:shadow transition-all"
          >
            INVEST NOW <span>→</span>
          </RouterLink>
        </div>

        <!-- Mobile toggle -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100" aria-label="Toggle navigation">
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          <svg v-else                 class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <Transition name="mobile-drawer">
      <div v-if="mobileMenuOpen" class="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
        <div class="px-5 py-4 space-y-0.5">

          <RouterLink to="/" @click="mobileMenuOpen = false" class="mobile-link font-bold" :class="$route.path === '/' ? 'mobile-link--active' : ''">HOME</RouterLink>

          <!-- ABOUT US -->
          <div class="pt-3">
            <div class="mobile-group-label">ABOUT US</div>
            <RouterLink to="/about"      @click="mobileMenuOpen = false" class="mobile-sub-link" :class="$route.path === '/about'      ? 'mobile-link--active' : ''">About Arua SEZ</RouterLink>
            <RouterLink to="/model"      @click="mobileMenuOpen = false" class="mobile-sub-link" :class="$route.path === '/model'      ? 'mobile-link--active' : ''">Enterprise Model</RouterLink>
            <div class="mobile-sub-group-label">Governance</div>
            <RouterLink to="/governance" @click="mobileMenuOpen = false" class="mobile-sub-link pl-6" :class="$route.path === '/governance' ? 'mobile-link--active' : ''">Board of Directors</RouterLink>
          </div>

          <!-- INVEST -->
          <div class="pt-3">
            <div class="mobile-group-label">INVEST</div>
            <div class="mobile-sub-group-label">Our Offers</div>
            <RouterLink to="/location"       @click="mobileMenuOpen = false" class="mobile-sub-link pl-6" :class="$route.path === '/location'       ? 'mobile-link--active' : ''">Strategic Location</RouterLink>
            <RouterLink to="/infrastructure" @click="mobileMenuOpen = false" class="mobile-sub-link pl-6" :class="$route.path === '/infrastructure' ? 'mobile-link--active' : ''">Infrastructure Development</RouterLink>
            <RouterLink to="/workforce"      @click="mobileMenuOpen = false" class="mobile-sub-link pl-6" :class="$route.path === '/workforce'      ? 'mobile-link--active' : ''">Workforce Development</RouterLink>
            <RouterLink to="/incentives"     @click="mobileMenuOpen = false" class="mobile-sub-link pl-6" :class="$route.path === '/incentives'     ? 'mobile-link--active' : ''">Investor Incentives</RouterLink>
            <RouterLink to="/sectors"        @click="mobileMenuOpen = false" class="mobile-sub-link"      :class="$route.path === '/sectors'        ? 'mobile-link--active' : ''">Priority Sectors</RouterLink>
            <RouterLink to="/get-started"    @click="mobileMenuOpen = false" class="mobile-sub-link font-bold text-[#D00004]">Get Started Now</RouterLink>
          </div>

          <!-- RESOURCES -->
          <div class="pt-3">
            <div class="mobile-group-label">RESOURCES</div>
            <RouterLink to="/resources" @click="mobileMenuOpen = false" class="mobile-sub-link" :class="$route.path === '/resources' ? 'mobile-link--active' : ''">Publications</RouterLink>
          </div>

          <!-- MEDIA -->
          <div class="pt-3">
            <div class="mobile-group-label">MEDIA</div>
            <RouterLink to="/blogs"   @click="mobileMenuOpen = false" class="mobile-sub-link" :class="$route.path === '/blogs'   ? 'mobile-link--active' : ''">News &amp; Updates</RouterLink>
            <RouterLink to="/gallery" @click="mobileMenuOpen = false" class="mobile-sub-link" :class="$route.path === '/gallery' ? 'mobile-link--active' : ''">Gallery</RouterLink>
          </div>

          <!-- JOBS & TENDERS -->
          <div class="pt-3">
            <div class="mobile-group-label">JOBS &amp; TENDERS</div>
            <RouterLink to="/vacancies" @click="mobileMenuOpen = false" class="mobile-sub-link" :class="$route.path === '/vacancies' ? 'mobile-link--active' : ''">Vacancies</RouterLink>
            <RouterLink to="/tenders"   @click="mobileMenuOpen = false" class="mobile-sub-link" :class="$route.path === '/tenders'   ? 'mobile-link--active' : ''">Tenders</RouterLink>
          </div>

          <!-- CONNECT -->
          <div class="pt-3">
            <div class="mobile-group-label">CONNECT</div>
            <RouterLink to="/partner" @click="mobileMenuOpen = false" class="mobile-sub-link" :class="$route.path === '/partner' ? 'mobile-link--active' : ''">Partner With Us</RouterLink>
            <RouterLink to="/contact" @click="mobileMenuOpen = false" class="mobile-sub-link" :class="$route.path === '/contact' ? 'mobile-link--active' : ''">Contact Us</RouterLink>
          </div>

          <!-- CTA -->
          <div class="pt-5 pb-2">
            <RouterLink to="/get-started" @click="mobileMenuOpen = false" class="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl text-xs font-bold tracking-wider uppercase text-white bg-[#D00004] hover:bg-[#B30003] transition-colors">
              INVEST NOW →
            </RouterLink>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

// ── Scroll Progress ───────────────────────────────────────────────────────────
const scrollProgress = ref(0)
function updateScrollProgress() {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0
}

const route = useRoute()
const mobileMenuOpen = ref(false)
const activeMenu = ref(null)

function open(menu)   { activeMenu.value = menu }
function close(menu)  { if (activeMenu.value === menu) activeMenu.value = null }
function toggle(menu) { activeMenu.value = activeMenu.value === menu ? null : menu }
function closeAll()   { activeMenu.value = null }

function onOutsideClick(e) {
  if (!e.target.closest('header')) closeAll()
}
onMounted(() => {
  document.addEventListener('click', onOutsideClick)
  window.addEventListener('scroll', updateScrollProgress, { passive: true })
})
onUnmounted(() => {
  document.removeEventListener('click', onOutsideClick)
  window.removeEventListener('scroll', updateScrollProgress)
})

// ── Active groups ─────────────────────────────────────────────────────────────
const aboutActive     = computed(() => ['/about', '/model', '/governance'].includes(route.path))
const investActive    = computed(() => ['/location', '/infrastructure', '/workforce', '/incentives', '/sectors', '/get-started'].includes(route.path))
const resourcesActive = computed(() => ['/resources'].includes(route.path))
const mediaActive     = computed(() => ['/blogs', '/gallery'].includes(route.path))
const jobsActive      = computed(() => ['/vacancies', '/tenders'].includes(route.path))
const connectActive   = computed(() => ['/partner', '/contact'].includes(route.path))
</script>

<style scoped>
/* ── Top-level nav button ─────────────────────────────────────────────────── */
.nav-btn {
  @apply px-3 py-2 text-[12.5px] font-semibold tracking-wide text-slate-700
         hover:text-[#D00004] transition-colors whitespace-nowrap
         relative;
}
.nav-btn::after {
  content: '';
  @apply absolute bottom-0 left-3 right-3 h-[2px] bg-[#D00004] scale-x-0 transition-transform duration-200 origin-left rounded-full;
}
.nav-btn:hover::after,
.nav-btn--active::after {
  @apply scale-x-100;
}
.nav-btn--active {
  @apply text-[#D00004] font-bold;
}

/* ── Dropdown panel ───────────────────────────────────────────────────────── */
.dropdown-panel {
  @apply absolute top-full left-0 mt-2 bg-white rounded-xl border border-gray-100
         shadow-[0_8px_30px_rgba(0,0,0,0.10)] p-1.5 z-50;
  transform-origin: top left;
}

/* ── Dropdown item ────────────────────────────────────────────────────────── */
.dd-item {
  @apply block px-4 py-2.5 rounded-lg text-[13px] font-medium text-slate-700
         hover:bg-gray-50 hover:text-[#D00004] transition-colors whitespace-nowrap;
}
.dd-item--sub {
  @apply pl-6 text-slate-600;
}
.dd-item--active {
  @apply text-[#D00004] font-semibold bg-red-50;
}
.dd-item--cta {
  @apply text-[#D00004] font-bold hover:bg-red-50;
}

/* ── Dropdown section label ───────────────────────────────────────────────── */
.dd-divider {
  @apply px-4 pt-2 pb-1 text-[10px] font-extrabold tracking-widest text-gray-400 uppercase;
}

/* ── Mobile links ─────────────────────────────────────────────────────────── */
.mobile-link {
  @apply block px-3 py-2.5 rounded-xl text-[13px] tracking-wide font-semibold text-slate-800
         transition-colors hover:bg-gray-50;
}
.mobile-link--active {
  @apply text-[#D00004] bg-red-50;
}
.mobile-group-label {
  @apply px-3 mb-1 text-[10px] font-extrabold tracking-widest text-gray-400 uppercase;
}
.mobile-sub-group-label {
  @apply px-3 mt-2 mb-0.5 text-[9px] font-extrabold tracking-widest text-gray-300 uppercase;
}
.mobile-sub-link {
  @apply block px-3 py-2 rounded-xl text-[13px] font-medium text-slate-600
         transition-colors hover:bg-gray-50 hover:text-[#D00004];
}

/* ── Dropdown transition ──────────────────────────────────────────────────── */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.15s ease, transform 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-5px) scale(0.98);
}

/* ── Mobile drawer transition ─────────────────────────────────────────────── */
.mobile-drawer-enter-active,
.mobile-drawer-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.mobile-drawer-enter-from,
.mobile-drawer-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
