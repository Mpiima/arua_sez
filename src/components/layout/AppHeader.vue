<template>
  <header
    class="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm"
    @mouseleave="closeAll"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">

        <!-- ── Brand Logo ───────────────────────────────────────────── -->
        <RouterLink to="/" class="flex items-center gap-3 group py-1 flex-shrink-0" title="Arua Special Economic Zone">
          <img
            src="/arua_sez_logo.svg"
            alt="Arua SEZ Logo"
            class="h-12 sm:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          />
          <div class="hidden md:flex flex-col justify-center border-l border-gray-200 pl-3 leading-tight">
            <span class="text-[10px] font-extrabold text-[#D17F00] tracking-wider uppercase">Uganda</span>
            <span class="text-[9px] font-semibold text-gray-400 tracking-[0.16em] uppercase">Special Economic Zone</span>
          </div>
        </RouterLink>

        <!-- ── Desktop Navigation ──────────────────────────────────── -->
        <nav class="hidden lg:flex items-center gap-1">

          <!-- HOME — standalone -->
          <RouterLink
            to="/"
            class="relative px-3 py-2 rounded-lg text-[13px] tracking-wider font-semibold transition-colors"
            :class="$route.path === '/' ? 'text-[#D00004] font-bold bg-red-50' : 'text-gray-700 hover:text-[#D00004] hover:bg-gray-50'"
          >
            HOME
          </RouterLink>

          <!-- COMPANY dropdown -->
          <div class="relative" @mouseenter="open('company')" @mouseleave="close('company')">
            <button
              class="flex items-center gap-1 px-3 py-2 rounded-lg text-[13px] tracking-wider font-semibold transition-colors"
              :class="companyActive ? 'text-[#D00004] font-bold bg-red-50' : 'text-gray-700 hover:text-[#D00004] hover:bg-gray-50'"
              @click="toggle('company')"
              aria-haspopup="true"
              :aria-expanded="activeMenu === 'company'"
            >
              COMPANY
              <svg
                class="w-3.5 h-3.5 transition-transform duration-200"
                :class="activeMenu === 'company' ? 'rotate-180 text-[#D00004]' : 'text-gray-400'"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>

            <!-- Dropdown panel -->
            <Transition name="dropdown">
              <div
                v-if="activeMenu === 'company'"
                class="dropdown-panel"
              >
                <RouterLink
                  v-for="item in companyItems"
                  :key="item.to"
                  :to="item.to"
                  @click="closeAll"
                  class="dropdown-item group"
                  :class="$route.path === item.to ? 'bg-red-50 text-[#D00004]' : ''"
                >
                  <div class="dropdown-icon" :class="$route.path === item.to ? 'bg-red-100 text-[#D00004]' : item.iconClass" v-html="item.icon"></div>
                  <div>
                    <div class="dropdown-label">{{ item.label }}</div>
                    <div class="dropdown-desc">{{ item.description }}</div>
                  </div>
                </RouterLink>
              </div>
            </Transition>
          </div>

          <!-- INVEST dropdown -->
          <div class="relative" @mouseenter="open('invest')" @mouseleave="close('invest')">
            <button
              class="flex items-center gap-1 px-3 py-2 rounded-lg text-[13px] tracking-wider font-semibold transition-colors"
              :class="investActive ? 'text-[#D00004] font-bold bg-red-50' : 'text-gray-700 hover:text-[#D00004] hover:bg-gray-50'"
              @click="toggle('invest')"
              aria-haspopup="true"
              :aria-expanded="activeMenu === 'invest'"
            >
              INVEST
              <svg
                class="w-3.5 h-3.5 transition-transform duration-200"
                :class="activeMenu === 'invest' ? 'rotate-180 text-[#D00004]' : 'text-gray-400'"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>

            <Transition name="dropdown">
              <div
                v-if="activeMenu === 'invest'"
                class="dropdown-panel"
              >
                <RouterLink
                  v-for="item in investItems"
                  :key="item.to"
                  :to="item.to"
                  @click="closeAll"
                  class="dropdown-item group"
                  :class="$route.path === item.to ? 'bg-red-50 text-[#D00004]' : ''"
                >
                  <div class="dropdown-icon" :class="$route.path === item.to ? 'bg-red-100 text-[#D00004]' : item.iconClass" v-html="item.icon"></div>
                  <div>
                    <div class="dropdown-label">{{ item.label }}</div>
                    <div class="dropdown-desc">{{ item.description }}</div>
                  </div>
                </RouterLink>
              </div>
            </Transition>
          </div>

          <!-- CONNECT dropdown -->
          <div class="relative" @mouseenter="open('connect')" @mouseleave="close('connect')">
            <button
              class="flex items-center gap-1 px-3 py-2 rounded-lg text-[13px] tracking-wider font-semibold transition-colors"
              :class="connectActive ? 'text-[#D00004] font-bold bg-red-50' : 'text-gray-700 hover:text-[#D00004] hover:bg-gray-50'"
              @click="toggle('connect')"
              aria-haspopup="true"
              :aria-expanded="activeMenu === 'connect'"
            >
              CONNECT
              <svg
                class="w-3.5 h-3.5 transition-transform duration-200"
                :class="activeMenu === 'connect' ? 'rotate-180 text-[#D00004]' : 'text-gray-400'"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>

            <Transition name="dropdown">
              <div
                v-if="activeMenu === 'connect'"
                class="dropdown-panel"
              >
                <RouterLink
                  v-for="item in connectItems"
                  :key="item.to"
                  :to="item.to"
                  @click="closeAll"
                  class="dropdown-item group"
                  :class="$route.path === item.to ? 'bg-red-50 text-[#D00004]' : ''"
                >
                  <div class="dropdown-icon" :class="$route.path === item.to ? 'bg-red-100 text-[#D00004]' : item.iconClass" v-html="item.icon"></div>
                  <div>
                    <div class="dropdown-label">{{ item.label }}</div>
                    <div class="dropdown-desc">{{ item.description }}</div>
                  </div>
                </RouterLink>
              </div>
            </Transition>
          </div>
        </nav>

        <!-- ── Right: INVEST NOW button ────────────────────────────── -->
        <div class="hidden sm:flex items-center gap-3">
          <RouterLink
            to="/contact"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase text-white bg-[#D00004] hover:bg-[#B30003] shadow-sm hover:shadow transition-all"
          >
            <span>INVEST NOW</span>
            <span class="text-sm">→</span>
          </RouterLink>
        </div>

        <!-- ── Mobile toggle ────────────────────────────────────────── -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          aria-label="Toggle navigation"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- ── Mobile Drawer ─────────────────────────────────────────────── -->
    <Transition name="mobile-drawer">
      <div v-if="mobileMenuOpen" class="lg:hidden bg-white border-t border-gray-100 shadow-lg">
        <div class="px-5 py-4 space-y-1">

          <!-- Home -->
          <RouterLink
            to="/"
            @click="mobileMenuOpen = false"
            class="mobile-link font-bold"
            :class="$route.path === '/' ? 'text-[#D00004] bg-red-50' : 'text-gray-800'"
          >
            HOME
          </RouterLink>

          <!-- COMPANY group -->
          <div class="pt-2">
            <div class="mobile-group-label">COMPANY</div>
            <RouterLink
              v-for="item in companyItems"
              :key="item.to"
              :to="item.to"
              @click="mobileMenuOpen = false"
              class="mobile-sub-link"
              :class="$route.path === item.to ? 'text-[#D00004]' : 'text-gray-600'"
            >
              <span v-html="item.icon" class="w-4 h-4 flex-shrink-0" :class="item.iconClass"></span>
              {{ item.label }}
            </RouterLink>
          </div>

          <!-- INVEST group -->
          <div class="pt-2">
            <div class="mobile-group-label">INVEST</div>
            <RouterLink
              v-for="item in investItems"
              :key="item.to"
              :to="item.to"
              @click="mobileMenuOpen = false"
              class="mobile-sub-link"
              :class="$route.path === item.to ? 'text-[#D00004]' : 'text-gray-600'"
            >
              <span v-html="item.icon" class="w-4 h-4 flex-shrink-0" :class="item.iconClass"></span>
              {{ item.label }}
            </RouterLink>
          </div>

          <!-- CONNECT group -->
          <div class="pt-2">
            <div class="mobile-group-label">CONNECT</div>
            <RouterLink
              v-for="item in connectItems"
              :key="item.to"
              :to="item.to"
              @click="mobileMenuOpen = false"
              class="mobile-sub-link"
              :class="$route.path === item.to ? 'text-[#D00004]' : 'text-gray-600'"
            >
              <span v-html="item.icon" class="w-4 h-4 flex-shrink-0" :class="item.iconClass"></span>
              {{ item.label }}
            </RouterLink>
          </div>

          <!-- CTA -->
          <div class="pt-4 pb-1">
            <RouterLink
              to="/contact"
              @click="mobileMenuOpen = false"
              class="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl text-xs font-bold tracking-wider uppercase text-white bg-[#D00004] hover:bg-[#B30003] transition-colors"
            >
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

const route = useRoute()
const mobileMenuOpen = ref(false)
const activeMenu = ref(null) // 'company' | 'invest' | 'connect' | null

// ── Dropdown open/close ───────────────────────────────────────────────────────
function open(menu) { activeMenu.value = menu }
function close(menu) { if (activeMenu.value === menu) activeMenu.value = null }
function toggle(menu) { activeMenu.value = activeMenu.value === menu ? null : menu }
function closeAll() { activeMenu.value = null }

// ── Close on outside click ────────────────────────────────────────────────────
function onOutsideClick(e) {
  if (!e.target.closest('header')) closeAll()
}
onMounted(() => document.addEventListener('click', onOutsideClick))
onUnmounted(() => document.removeEventListener('click', onOutsideClick))

// ── Active state helpers (computed) ──────────────────────────────────────────
const companyPaths = ['/about', '/model']
const investPaths  = ['/sectors', '/incentives', '/resources']
const connectPaths = ['/blogs', '/contact']

const companyActive = computed(() => companyPaths.includes(route.path))
const investActive  = computed(() => investPaths.includes(route.path))
const connectActive = computed(() => connectPaths.includes(route.path))

// ── Nav item data ─────────────────────────────────────────────────────────────
const companyItems = [
  {
    to: '/about',
    label: 'About Arua SEZ',
    description: 'Vision, mission, governance & regional context',
    iconClass: 'bg-amber-50 text-amber-600',
    icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
  },
  {
    to: '/model',
    label: 'Enterprise Model',
    description: 'How Arua SEZ aggregates & creates value',
    iconClass: 'bg-slate-100 text-slate-600',
    icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>'
  },
]

const investItems = [
  {
    to: '/sectors',
    label: 'Priority Sectors',
    description: 'Agro-processing, manufacturing, trade & more',
    iconClass: 'bg-emerald-50 text-emerald-600',
    icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>'
  },
  {
    to: '/incentives',
    label: 'Investor Incentives',
    description: '19-point fiscal & infrastructure framework',
    iconClass: 'bg-amber-50 text-amber-600',
    icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
  },
  {
    to: '/resources',
    label: 'Resources & Downloads',
    description: 'Prospectus, fact-sheets & policy guides',
    iconClass: 'bg-blue-50 text-blue-600',
    icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>'
  },
]

const connectItems = [
  {
    to: '/blogs',
    label: 'News & Updates',
    description: 'Latest developments, press & announcements',
    iconClass: 'bg-purple-50 text-purple-600',
    icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>'
  },
  {
    to: '/contact',
    label: 'Contact & Partner',
    description: 'Speak with our investment team',
    iconClass: 'bg-red-50 text-[#D00004]',
    icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'
  },
]
</script>

<style scoped>
/* ── Dropdown panel ───────────────────────────────────────────────────────── */
.dropdown-panel {
  @apply absolute top-full left-0 mt-1.5 w-64 bg-white rounded-2xl border border-gray-100 shadow-xl p-2 z-50;
  transform-origin: top left;
}

/* ── Dropdown item ────────────────────────────────────────────────────────── */
.dropdown-item {
  @apply flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors duration-150 cursor-pointer;
}

.dropdown-icon {
  @apply w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-150;
}

.dropdown-label {
  @apply text-[13px] font-bold text-gray-900 group-hover:text-[#D00004] transition-colors leading-tight mb-0.5;
}

.dropdown-desc {
  @apply text-[11px] text-gray-400 leading-snug;
}

/* ── Mobile links ─────────────────────────────────────────────────────────── */
.mobile-link {
  @apply block px-3 py-2.5 rounded-xl text-sm tracking-wide transition-colors;
}

.mobile-group-label {
  @apply px-3 mb-1 text-[10px] font-extrabold tracking-widest text-gray-400 uppercase;
}

.mobile-sub-link {
  @apply flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-semibold transition-colors hover:bg-gray-50;
}

/* ── Dropdown transition ──────────────────────────────────────────────────── */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.18s ease, transform 0.18s cubic-bezier(0.16, 1, 0.3, 1);
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-6px) scale(0.97);
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
