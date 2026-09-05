<template>
  <footer class="bg-brand-navy text-slate-300 pt-16 pb-12 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
        <!-- Col 1: Brand Info -->
        <div class="space-y-4 md:col-span-1">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-brand-slate flex items-center justify-center border border-slate-700">
              <svg class="w-6 h-6 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <span class="font-heading font-bold text-lg text-white tracking-wide">ARUA SEZ</span>
              <p class="text-xs text-slate-400">Uganda Special Economic Zones</p>
            </div>
          </div>
          <p class="text-sm text-slate-400 leading-relaxed">
            Pioneering industrial transformation, value addition, and seamless international market connectivity in the heart of Northern Uganda.
          </p>
        </div>

        <!-- Col 2: Quick Links -->
        <div>
          <h4 class="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
          <ul class="space-y-2.5 text-sm text-slate-400">
            <li><a href="#about" class="hover:text-brand-gold transition-colors">About the SEZ</a></li>
            <li><a href="#sectors" class="hover:text-brand-gold transition-colors">Target Industries</a></li>
            <li><a href="#incentives" class="hover:text-brand-gold transition-colors">Investor Incentives</a></li>
            <li><a href="#infrastructure" class="hover:text-brand-gold transition-colors">Park Infrastructure</a></li>
          </ul>
        </div>

        <!-- Col 3: Portal & Services -->
        <div>
          <h4 class="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-4">Portals & Access</h4>
          <ul class="space-y-2.5 text-sm text-slate-400">
            <li><RouterLink to="/admin" class="hover:text-brand-gold transition-colors">Admin Dashboard</RouterLink></li>
            <li><a href="#" class="hover:text-brand-gold transition-colors">Investor Onboarding Portal</a></li>
            <li><a href="#" class="hover:text-brand-gold transition-colors">One-Stop Center (OSC)</a></li>
            <li><a href="#" class="hover:text-brand-gold transition-colors">Download Master Plan</a></li>
          </ul>
        </div>

        <!-- Col 4: Contact -->
        <div>
          <h4 class="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-4">Location & Contact</h4>
          <address class="not-italic text-sm text-slate-400 space-y-2">
            <p>Arua City, West Nile Region</p>
            <p>Republic of Uganda</p>
            <p class="pt-2 text-white font-medium">info@aruasez.go.ug</p>
            <p>+256 (0) 414 000 000</p>
          </address>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>&copy; {{ new Date().getFullYear() }} Arua Special Economic Zone (Arua SEZ). All rights reserved.</p>
        <div class="flex items-center gap-6">
          <a href="#" class="hover:text-slate-400 transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-slate-400 transition-colors">Terms of Investment</a>
          <a href="#" class="hover:text-slate-400 transition-colors">Government Portal</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
