<template>
  <div class="min-h-screen flex flex-col bg-white font-sans text-slate-800">
    <AppHeader />

    <main class="flex-grow">
      
      <!-- ═══ SIMPLE HEADER ═══ -->
      <section class="pt-24 pb-16 bg-[#F8FAFC]">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-3">Publications & Downloads</div>
          <h1 class="font-heading font-black text-4xl sm:text-5xl text-slate-900 tracking-tight mb-4">
            Investor Resource Centre
          </h1>
          <p class="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Access our official company profile and investment prospectus to learn more about opportunities in the Arua Special Economic Zone.
          </p>
        </div>
      </section>

      <!-- ═══ FEATURED RESOURCE ═══ -->
      <section class="py-16 bg-white">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="relative overflow-hidden rounded-3xl bg-[#0B0F19] p-8 sm:p-12 shadow-2xl">
            <!-- Background effects -->
            <div class="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div class="absolute bottom-0 left-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <!-- Text Content -->
              <div class="space-y-6">
                <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-[10px] font-bold tracking-widest uppercase text-amber-300">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                  Official Document
                </div>
                
                <h2 class="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                  Arua SEZ<br/>
                  <span class="text-[#F59E0B]">Company Profile</span>
                </h2>
                
                <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Our comprehensive company profile and investment brief. This document outlines our strategic location advantage, priority sectors, the 19-point tax incentive framework, and the steps to secure your plot.
                </p>
                
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 rounded-md bg-white/10 text-slate-300 text-[10px] font-bold tracking-wide uppercase">PDF Format</span>
                  <span class="px-3 py-1 rounded-md bg-white/10 text-slate-300 text-[10px] font-bold tracking-wide uppercase">Print-Ready</span>
                  <span class="px-3 py-1 rounded-md bg-white/10 text-slate-300 text-[10px] font-bold tracking-wide uppercase">Updated 2025</span>
                </div>
                
                <div class="pt-4">
                  <a 
                    href="/documents/aruasez_profile.pdf" 
                    target="_blank"
                    class="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#D00004] hover:bg-[#B30003] text-white text-sm font-bold tracking-wider uppercase shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all group"
                  >
                    <svg class="w-5 h-5 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    Download Profile
                  </a>
                </div>
              </div>

              <!-- Visual Representation -->
              <div class="flex justify-center lg:justify-end">
                <a href="/documents/aruasez_profile.pdf" target="_blank" class="relative group block cursor-pointer hover:scale-105 transition-transform duration-300">
                  <div class="relative w-64 sm:w-72 bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-slate-800 group-hover:border-amber-400 transition-colors">
                    
                    <!-- Fake Document Header -->
                    <div class="h-10 bg-[#D00004] flex items-center px-4 gap-1.5">
                      <div class="w-2.5 h-2.5 rounded-full bg-white/30"></div>
                      <div class="w-2.5 h-2.5 rounded-full bg-white/30"></div>
                      <div class="w-2.5 h-2.5 rounded-full bg-white/30"></div>
                    </div>
                    
                    <!-- Fake Document Body -->
                    <div class="p-6 space-y-4 bg-slate-50 h-80">
                      <img src="/arua_sez_logo.svg" alt="Arua SEZ" class="h-10 w-auto mb-6"/>
                      
                      <div class="h-4 bg-slate-800 rounded w-5/6"></div>
                      <div class="h-3 bg-[#F59E0B] rounded w-3/5 mb-6"></div>
                      
                      <div class="space-y-2.5">
                        <div class="h-2 bg-slate-200 rounded w-full"></div>
                        <div class="h-2 bg-slate-200 rounded w-11/12"></div>
                        <div class="h-2 bg-slate-200 rounded w-4/5"></div>
                        <div class="h-2 bg-slate-200 rounded w-full"></div>
                        <div class="h-2 bg-slate-200 rounded w-3/4"></div>
                      </div>
                      
                      <div class="grid grid-cols-2 gap-3 mt-6">
                        <div class="h-16 bg-[#0B0F19] rounded-lg"></div>
                        <div class="h-16 bg-slate-200 rounded-lg border border-slate-300"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute -bottom-4 -right-4 w-16 h-16 bg-[#F59E0B] text-[#0B0F19] rounded-full shadow-xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform">
                    <span class="text-xs font-black tracking-widest">PDF</span>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      <!-- ═══ EXTERNAL RESOURCES ═══ -->
      <section class="py-20 bg-slate-50 border-t border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div class="mb-12">
            <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-2">Partner Portals</div>
            <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">Regulatory &amp; Government Links</h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            
            <a href="https://www.ugandainvest.go.ug" target="_blank" rel="noopener noreferrer" class="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all">
              <div class="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"/></svg>
              </div>
              <h3 class="font-bold text-sm text-slate-900 mb-2 group-hover:text-[#D00004]">Uganda Investment Authority</h3>
              <p class="text-xs text-slate-500">National investment promotion body for certificates and permits.</p>
            </a>

            <a href="https://www.ura.go.ug" target="_blank" rel="noopener noreferrer" class="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all">
              <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
              </div>
              <h3 class="font-bold text-sm text-slate-900 mb-2 group-hover:text-[#D00004]">Uganda Revenue Authority</h3>
              <p class="text-xs text-slate-500">Tax compliance, VAT registration, and customs for SEZ operators.</p>
            </a>

            <a href="https://www.nema.go.ug" target="_blank" rel="noopener noreferrer" class="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all">
              <div class="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 class="font-bold text-sm text-slate-900 mb-2 group-hover:text-[#D00004]">NEMA Uganda</h3>
              <p class="text-xs text-slate-500">Environmental baseline standards and ESIA clearance.</p>
            </a>

          </div>
        </div>
      </section>

    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>
