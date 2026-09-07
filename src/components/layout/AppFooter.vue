<template>
  <footer class="bg-[#071F13] text-slate-300 pt-16 pb-12 border-t border-emerald-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-emerald-900/50">
        <!-- Col 1: Brand Info -->
        <div class="space-y-4 md:col-span-1">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-[#0E5832] flex items-center justify-center border border-emerald-700/50">
              <svg class="w-6 h-6 text-[#EAB308]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <span class="font-heading font-black text-lg text-white tracking-wide">ARUA SEZ</span>
              <p class="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">Special Economic Zone</p>
            </div>
          </div>
          <p class="text-xs text-slate-400 leading-relaxed">
            Uganda's prime export-oriented economic zone, unlocking cross-border industrial trade with the DRC and South Sudan.
          </p>
        </div>

        <!-- Col 2: Navigation Links -->
        <div>
          <h4 class="text-white font-heading font-bold text-xs uppercase tracking-wider mb-4">Quick Links</h4>
          <ul class="space-y-2.5 text-xs text-slate-400">
            <li><a href="#about" class="hover:text-[#EAB308] transition-colors">About Arua SEZ</a></li>
            <li><a href="#the-zone" class="hover:text-[#EAB308] transition-colors">The Strategic Zone</a></li>
            <li><a href="#industries" class="hover:text-[#EAB308] transition-colors">Priority Industries</a></li>
            <li><a href="#trade" class="hover:text-[#EAB308] transition-colors">Export &amp; Trade Corridors</a></li>
          </ul>
        </div>

        <!-- Col 3: Investor Portals -->
        <div>
          <h4 class="text-white font-heading font-bold text-xs uppercase tracking-wider mb-4">Investor Access</h4>
          <ul class="space-y-2.5 text-xs text-slate-400">
            <li><RouterLink to="/admin" class="hover:text-[#EAB308] transition-colors">Admin &amp; Investor Portal</RouterLink></li>
            <li><a href="#invest" class="hover:text-[#EAB308] transition-colors">Apply for Zone Plot</a></li>
            <li><a href="#resources" class="hover:text-[#EAB308] transition-colors">Download Master Plan</a></li>
            <li><a href="#resources" class="hover:text-[#EAB308] transition-colors">Incentives &amp; Tax Holidays</a></li>
          </ul>
        </div>

        <!-- Col 4: Regional Contact -->
        <div>
          <h4 class="text-white font-heading font-bold text-xs uppercase tracking-wider mb-4">Regional Office</h4>
          <address class="not-italic text-xs text-slate-400 space-y-2">
            <p>Arua City, West Nile Region</p>
            <p>Republic of Uganda</p>
            <p class="pt-1 text-[#EAB308] font-medium">invest@aruasez.go.ug</p>
            <p>+256 (0) 414 000 000</p>
          </address>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
        <p>&copy; {{ new Date().getFullYear() }} Arua Special Economic Zone Limited (Arua SEZ). All rights reserved.</p>
        <div class="flex items-center gap-6">
          <a href="#" class="hover:text-slate-400 transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-slate-400 transition-colors">Terms of Investment</a>
          <RouterLink to="/admin" class="text-emerald-400 hover:text-emerald-300 transition-colors">Admin Dashboard →</RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
