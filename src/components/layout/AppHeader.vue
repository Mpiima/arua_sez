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
        <!-- Language Selector -->
        <div class="relative group">
          <button class="flex items-center gap-1 hover:text-white transition-colors uppercase tracking-wider">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"/></svg>
            EN
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div class="absolute right-0 mt-2 w-24 bg-white text-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden z-50 py-1">
            <button class="w-full text-left px-3 py-1.5 hover:bg-gray-50 hover:text-[#D00004] transition-colors">English</button>
            <button class="w-full text-left px-3 py-1.5 hover:bg-gray-50 hover:text-[#D00004] transition-colors">French</button>
            <button class="w-full text-left px-3 py-1.5 hover:bg-gray-50 hover:text-[#D00004] transition-colors">Swahili</button>
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

        <!-- ── Brand Logo ───────────────────────────────────────────── -->
        <RouterLink to="/" class="flex items-center gap-3 group py-1 flex-shrink-0" title="Arua Special Economic Zone">
          <img
            src="/arua_sez_logo.svg"
            alt="Arua SEZ Logo"
            class="h-12 sm:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </RouterLink>

        <!-- ── Desktop Navigation ──────────────────────────────────── -->
        <nav class="hidden lg:flex items-center gap-0.5">

          <!-- HOME -->
          <RouterLink
            to="/"
            class="nav-btn"
            :class="$route.path === '/' ? 'nav-btn--active' : ''"
          >HOME</RouterLink>

          <!-- ABOUT US dropdown -->
          <div class="relative" @mouseenter="open('about')" @mouseleave="close('about')">
            <button
              class="nav-btn flex items-center gap-1"
              :class="aboutActive ? 'nav-btn--active' : ''"
              @click="toggle('about')"
              aria-haspopup="true"
              :aria-expanded="activeMenu === 'about'"
            >
              ABOUT US
              <svg class="w-3.5 h-3.5 transition-transform duration-200" :class="activeMenu === 'about' ? 'rotate-180 text-[#D00004]' : 'text-gray-400'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <Transition name="dropdown">
              <div v-if="activeMenu === 'about'" class="dropdown-panel w-64">
                <!-- About Arua SEZ -->
                <RouterLink to="/about" @click="closeAll" class="dropdown-item group" :class="$route.path === '/about' ? 'bg-red-50' : ''">
                  <div class="dropdown-label">About Arua SEZ</div>
                </RouterLink>
                <!-- Enterprise Model -->
                <!-- <RouterLink to="/model" @click="closeAll" class="dropdown-item group" :class="$route.path === '/model' ? 'bg-red-50' : ''">
                  <div class="dropdown-label">Enterprise Model</div>
                </RouterLink> -->
                <!-- Governance divider -->
                <div class="mx-3 my-1.5 border-t border-gray-100"></div>
                <div class="px-3 mb-1 text-[10px] font-extrabold tracking-widest text-gray-400 uppercase">Governance</div>
                <RouterLink to="/governance" @click="closeAll" class="dropdown-item group" :class="$route.path === '/governance' ? 'bg-red-50' : ''">
                  <div class="dropdown-label">Board of Directors</div>
                </RouterLink>
              </div>
            </Transition>
          </div>

          <!-- INVEST mega-dropdown -->
          <div class="relative" @mouseenter="open('invest')" @mouseleave="close('invest')">
            <button
              class="nav-btn flex items-center gap-1"
              :class="investActive ? 'nav-btn--active' : ''"
              @click="toggle('invest')"
              aria-haspopup="true"
              :aria-expanded="activeMenu === 'invest'"
            >
              INVEST
              <svg class="w-3.5 h-3.5 transition-transform duration-200" :class="activeMenu === 'invest' ? 'rotate-180 text-[#D00004]' : 'text-gray-400'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <Transition name="dropdown">
              <div v-if="activeMenu === 'invest'" class="dropdown-panel w-[560px]">
                <div class="grid grid-cols-2 gap-x-3">
                  <!-- Left col: Our Offers -->
                  <div>
                    <div class="px-3 mb-2 text-[10px] font-extrabold tracking-widest text-gray-400 uppercase">Our Offers</div>
                    <RouterLink to="/location" @click="closeAll" class="dropdown-item group" :class="$route.path === '/location' ? 'bg-red-50' : ''">
                      <div class="dropdown-label">Strategic Location</div>
                    </RouterLink>
                    <RouterLink to="/infrastructure" @click="closeAll" class="dropdown-item group" :class="$route.path === '/infrastructure' ? 'bg-red-50' : ''">
                      <div class="dropdown-label">Infrastructure Development</div>
                    </RouterLink>
                    <RouterLink to="/workforce" @click="closeAll" class="dropdown-item group" :class="$route.path === '/workforce' ? 'bg-red-50' : ''">
                      <div class="dropdown-label">Workforce Development</div>
                    </RouterLink>
                    <RouterLink to="/incentives" @click="closeAll" class="dropdown-item group" :class="$route.path === '/incentives' ? 'bg-red-50' : ''">
                      <div class="dropdown-label">Investor Incentives</div>
                    </RouterLink>
                  </div>
                  <!-- Right col: Priority Sectors + CTA -->
                  <div>
                    <div class="px-3 mb-2 text-[10px] font-extrabold tracking-widest text-gray-400 uppercase">More</div>
                    <RouterLink to="/sectors" @click="closeAll" class="dropdown-item group" :class="$route.path === '/sectors' ? 'bg-red-50' : ''">
                      <div class="dropdown-label">Priority Sectors</div>
                    </RouterLink>
                    <!-- Get Started CTA box -->
                    <div class="mx-2 mt-3 p-3 rounded-xl bg-gradient-to-br from-[#0B0F19] to-[#1E293B] text-white">
                      <div class="text-[11px] font-extrabold uppercase tracking-widest text-[#F59E0B] mb-1">Ready to Invest?</div>
                      <p class="text-[11px] text-gray-300 leading-snug mb-3">Join the growing network of businesses at Arua SEZ.</p>
                      <RouterLink to="/get-started" @click="closeAll" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#D00004] hover:bg-[#B30003] text-[11px] font-bold uppercase tracking-wider transition-colors">
                        Get Started Now <span>→</span>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>

          <!-- RESOURCES dropdown -->
          <div class="relative" @mouseenter="open('resources')" @mouseleave="close('resources')">
            <button
              class="nav-btn flex items-center gap-1"
              :class="resourcesActive ? 'nav-btn--active' : ''"
              @click="toggle('resources')"
              aria-haspopup="true"
              :aria-expanded="activeMenu === 'resources'"
            >
              RESOURCES
              <svg class="w-3.5 h-3.5 transition-transform duration-200" :class="activeMenu === 'resources' ? 'rotate-180 text-[#D00004]' : 'text-gray-400'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <Transition name="dropdown">
              <div v-if="activeMenu === 'resources'" class="dropdown-panel w-60">
                <RouterLink to="/resources" @click="closeAll" class="dropdown-item group" :class="$route.path === '/resources' ? 'bg-red-50' : ''">
                  <div class="dropdown-label">Publications</div>
                </RouterLink>
                <RouterLink to="/faq" @click="closeAll" class="dropdown-item group" :class="$route.path === '/faq' ? 'bg-red-50' : ''">
                  <div class="dropdown-label">FAQs</div>
                </RouterLink>
              </div>
            </Transition>
          </div>

          <!-- MEDIA dropdown -->
          <div class="relative" @mouseenter="open('media')" @mouseleave="close('media')">
            <button
              class="nav-btn flex items-center gap-1"
              :class="mediaActive ? 'nav-btn--active' : ''"
              @click="toggle('media')"
              aria-haspopup="true"
              :aria-expanded="activeMenu === 'media'"
            >
              MEDIA
              <svg class="w-3.5 h-3.5 transition-transform duration-200" :class="activeMenu === 'media' ? 'rotate-180 text-[#D00004]' : 'text-gray-400'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <Transition name="dropdown">
              <div v-if="activeMenu === 'media'" class="dropdown-panel w-60">
                <RouterLink to="/blogs" @click="closeAll" class="dropdown-item group" :class="$route.path === '/blogs' ? 'bg-red-50' : ''">
                  <div class="dropdown-label">News & Updates</div>
                </RouterLink>
                <RouterLink to="/gallery" @click="closeAll" class="dropdown-item group" :class="$route.path === '/gallery' ? 'bg-red-50' : ''">
                  <div class="dropdown-label">Gallery</div>
                </RouterLink>
              </div>
            </Transition>
          </div>

          <!-- JOBS & TENDERS dropdown -->
          <div class="relative" @mouseenter="open('jobs')" @mouseleave="close('jobs')">
            <button
              class="nav-btn flex items-center gap-1"
              :class="jobsActive ? 'nav-btn--active' : ''"
              @click="toggle('jobs')"
              aria-haspopup="true"
              :aria-expanded="activeMenu === 'jobs'"
            >
              JOBS & TENDERS
              <svg class="w-3.5 h-3.5 transition-transform duration-200" :class="activeMenu === 'jobs' ? 'rotate-180 text-[#D00004]' : 'text-gray-400'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <Transition name="dropdown">
              <div v-if="activeMenu === 'jobs'" class="dropdown-panel w-60">
                <RouterLink to="/vacancies" @click="closeAll" class="dropdown-item group" :class="$route.path === '/vacancies' ? 'bg-red-50' : ''">
                  <div class="dropdown-label">Vacancies</div>
                </RouterLink>
                <RouterLink to="/tenders" @click="closeAll" class="dropdown-item group" :class="$route.path === '/tenders' ? 'bg-red-50' : ''">
                  <div class="dropdown-label">Tenders</div>
                </RouterLink>
              </div>
            </Transition>
          </div>

          <!-- CONNECT dropdown -->
          <div class="relative" @mouseenter="open('connect')" @mouseleave="close('connect')">
            <button
              class="nav-btn flex items-center gap-1"
              :class="connectActive ? 'nav-btn--active' : ''"
              @click="toggle('connect')"
              aria-haspopup="true"
              :aria-expanded="activeMenu === 'connect'"
            >
              CONNECT
              <svg class="w-3.5 h-3.5 transition-transform duration-200" :class="activeMenu === 'connect' ? 'rotate-180 text-[#D00004]' : 'text-gray-400'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <Transition name="dropdown">
              <div v-if="activeMenu === 'connect'" class="dropdown-panel w-60">
                <RouterLink to="/partner" @click="closeAll" class="dropdown-item group" :class="$route.path === '/partner' ? 'bg-red-50' : ''">
                  <div class="dropdown-label">Partner With Us</div>
                </RouterLink>
                <RouterLink to="/contact" @click="closeAll" class="dropdown-item group" :class="$route.path === '/contact' ? 'bg-red-50' : ''">
                  <div class="dropdown-label">Contact Us</div>
                </RouterLink>
              </div>
            </Transition>
          </div>

        </nav>

        <!-- ── Right: INVEST NOW button ────────────────────────────── -->
        <div class="hidden xl:flex items-center gap-3">
          <RouterLink
            to="/get-started"
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
      <div v-if="mobileMenuOpen" class="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
        <div class="px-5 py-4 space-y-1">

          <!-- Home -->
          <RouterLink to="/" @click="mobileMenuOpen = false" class="mobile-link font-bold" :class="$route.path === '/' ? 'text-[#D00004] bg-red-50' : 'text-gray-800'">
            HOME
          </RouterLink>

          <!-- ABOUT US group -->
          <div class="pt-2">
            <div class="mobile-group-label">ABOUT US</div>
            <RouterLink to="/about" @click="mobileMenuOpen = false" class="mobile-sub-link" :class="$route.path === '/about' ? 'text-[#D00004]' : 'text-gray-600'">
              About Arua SEZ
            </RouterLink>
            <RouterLink to="/model" @click="mobileMenuOpen = false" class="mobile-sub-link" :class="$route.path === '/model' ? 'text-[#D00004]' : 'text-gray-600'">
              Enterprise Model
            </RouterLink>
            <div class="mobile-sub-group-label">Governance</div>
            <RouterLink to="/governance" @click="mobileMenuOpen = false" class="mobile-sub-link pl-7" :class="$route.path === '/governance' ? 'text-[#D00004]' : 'text-gray-600'">
              Board of Directors
            </RouterLink>
          </div>

          <!-- INVEST group -->
          <div class="pt-2">
            <div class="mobile-group-label">INVEST</div>
            <div class="mobile-sub-group-label">Our Offers</div>
            <RouterLink to="/location" @click="mobileMenuOpen = false" class="mobile-sub-link pl-7" :class="$route.path === '/location' ? 'text-[#D00004]' : 'text-gray-600'">
              Strategic Location
            </RouterLink>
            <RouterLink to="/infrastructure" @click="mobileMenuOpen = false" class="mobile-sub-link pl-7" :class="$route.path === '/infrastructure' ? 'text-[#D00004]' : 'text-gray-600'">
              Infrastructure Development
            </RouterLink>
            <RouterLink to="/workforce" @click="mobileMenuOpen = false" class="mobile-sub-link pl-7" :class="$route.path === '/workforce' ? 'text-[#D00004]' : 'text-gray-600'">
              Workforce Development
            </RouterLink>
            <RouterLink to="/incentives" @click="mobileMenuOpen = false" class="mobile-sub-link pl-7" :class="$route.path === '/incentives' ? 'text-[#D00004]' : 'text-gray-600'">
              Investor Incentives
            </RouterLink>
            <RouterLink to="/sectors" @click="mobileMenuOpen = false" class="mobile-sub-link" :class="$route.path === '/sectors' ? 'text-[#D00004]' : 'text-gray-600'">
              Priority Sectors
            </RouterLink>
            <RouterLink to="/get-started" @click="mobileMenuOpen = false" class="mobile-sub-link font-bold text-[#D00004]">
              Get Started Now
            </RouterLink>
          </div>

          <!-- RESOURCES group -->
          <div class="pt-2">
            <div class="mobile-group-label">RESOURCES</div>
            <RouterLink to="/resources" @click="mobileMenuOpen = false" class="mobile-sub-link" :class="$route.path === '/resources' ? 'text-[#D00004]' : 'text-gray-600'">
              Publications
            </RouterLink>
            <RouterLink to="/faq" @click="mobileMenuOpen = false" class="mobile-sub-link" :class="$route.path === '/faq' ? 'text-[#D00004]' : 'text-gray-600'">
              FAQs
            </RouterLink>
          </div>

          <!-- MEDIA group -->
          <div class="pt-2">
            <div class="mobile-group-label">MEDIA</div>
            <RouterLink to="/blogs" @click="mobileMenuOpen = false" class="mobile-sub-link" :class="$route.path === '/blogs' ? 'text-[#D00004]' : 'text-gray-600'">
              News & Updates
            </RouterLink>
            <RouterLink to="/gallery" @click="mobileMenuOpen = false" class="mobile-sub-link" :class="$route.path === '/gallery' ? 'text-[#D00004]' : 'text-gray-600'">
              Gallery
            </RouterLink>
          </div>

          <!-- JOBS & TENDERS group -->
          <div class="pt-2">
            <div class="mobile-group-label">JOBS & TENDERS</div>
            <RouterLink to="/vacancies" @click="mobileMenuOpen = false" class="mobile-sub-link" :class="$route.path === '/vacancies' ? 'text-[#D00004]' : 'text-gray-600'">
              Vacancies
            </RouterLink>
            <RouterLink to="/tenders" @click="mobileMenuOpen = false" class="mobile-sub-link" :class="$route.path === '/tenders' ? 'text-[#D00004]' : 'text-gray-600'">
              Tenders
            </RouterLink>
          </div>

          <!-- CONNECT group -->
          <div class="pt-2">
            <div class="mobile-group-label">CONNECT</div>
            <RouterLink to="/partner" @click="mobileMenuOpen = false" class="mobile-sub-link" :class="$route.path === '/partner' ? 'text-[#D00004]' : 'text-gray-600'">
              Partner With Us
            </RouterLink>
            <RouterLink to="/contact" @click="mobileMenuOpen = false" class="mobile-sub-link" :class="$route.path === '/contact' ? 'text-[#D00004]' : 'text-gray-600'">
              Contact Us
            </RouterLink>
          </div>

          <!-- CTA -->
          <div class="pt-4 pb-1">
            <RouterLink
              to="/get-started"
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

// ── Scroll Progress Bar ───────────────────────────────────────────────────────
const scrollProgress = ref(0)
function updateScrollProgress() {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0
}

const route = useRoute()
const mobileMenuOpen = ref(false)
const activeMenu = ref(null)

// ── Dropdown open/close ───────────────────────────────────────────────────────
function open(menu) { activeMenu.value = menu }
function close(menu) { if (activeMenu.value === menu) activeMenu.value = null }
function toggle(menu) { activeMenu.value = activeMenu.value === menu ? null : menu }
function closeAll() { activeMenu.value = null }

// ── Close on outside click ────────────────────────────────────────────────────
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

// ── Active state helpers ──────────────────────────────────────────────────────
const aboutPaths     = ['/about', '/model', '/governance']
const investPaths    = ['/location', '/infrastructure', '/workforce', '/incentives', '/sectors', '/get-started']
const resourcesPaths = ['/resources', '/faq']
const mediaPaths     = ['/blogs', '/gallery']
const jobsPaths      = ['/vacancies', '/tenders']
const connectPaths   = ['/partner', '/contact']

const aboutActive     = computed(() => aboutPaths.includes(route.path))
const investActive    = computed(() => investPaths.includes(route.path))
const resourcesActive = computed(() => resourcesPaths.includes(route.path))
const mediaActive     = computed(() => mediaPaths.includes(route.path))
const jobsActive      = computed(() => jobsPaths.includes(route.path))
const connectActive   = computed(() => connectPaths.includes(route.path))
</script>

<style scoped>
/* ── Nav button ───────────────────────────────────────────────────────────── */
.nav-btn {
  @apply px-2.5 py-2 rounded-lg text-[12px] tracking-wider font-semibold transition-colors text-gray-700 hover:text-[#D00004] hover:bg-gray-50 whitespace-nowrap;
}
.nav-btn--active {
  @apply text-[#D00004] font-bold bg-red-50;
}

/* ── Dropdown panel ───────────────────────────────────────────────────────── */
.dropdown-panel {
  @apply absolute top-full left-0 mt-1.5 bg-white rounded-2xl border border-gray-100 shadow-xl p-2 z-50;
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

.mobile-sub-group-label {
  @apply px-3 mt-2 mb-1 text-[9px] font-extrabold tracking-widest text-gray-300 uppercase;
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
