<template>
  <footer class="bg-[#0A0D14] text-slate-300 pt-16 pb-12 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
        <!-- Col 1: Brand Info -->
        <div class="space-y-4 md:col-span-1">
          <RouterLink to="/" class="inline-flex items-center gap-2 group" title="Arua SEZ">
            <img 
              src="/arua_sez_logo_white.svg" 
              alt="Arua SEZ Logo" 
              class="h-12 w-auto object-contain transition-transform group-hover:scale-105" 
            />
          </RouterLink>
          <p class="text-xs text-slate-400 leading-relaxed">
            Unlocking Trade. Powering Industry. Creating Opportunity. Uganda's prime Free Economic Zone connecting to over 100M consumers across DRC, South Sudan, and CAR.
          </p>
        </div>

        <!-- Col 2: Navigation Links -->
        <div>
          <h4 class="text-white font-heading font-bold text-xs uppercase tracking-wider mb-4">Quick Links</h4>
          <ul class="space-y-2.5 text-xs text-slate-400">
            <li><RouterLink to="/about" class="hover:text-[#F59E0B] transition-colors">About Arua SEZ</RouterLink></li>
            <li><RouterLink to="/sectors" class="hover:text-[#F59E0B] transition-colors">Priority Sectors</RouterLink></li>
            <li><RouterLink to="/incentives" class="hover:text-[#F59E0B] transition-colors">Investor Incentives</RouterLink></li>
            <li><RouterLink to="/contact" class="hover:text-[#F59E0B] transition-colors">Partner With Us</RouterLink></li>
            <li><RouterLink to="/contact" class="hover:text-[#F59E0B] transition-colors">Contact Development Office</RouterLink></li>
          </ul>
        </div>

        <!-- Col 3: Investor Portals -->
        <div>
          <h4 class="text-white font-heading font-bold text-xs uppercase tracking-wider mb-4">Investor Access</h4>
          <ul class="space-y-2.5 text-xs text-slate-400">
            <li><RouterLink to="/contact" class="hover:text-[#F59E0B] transition-colors">Submit Investment Inquiry</RouterLink></li>
            <li><RouterLink to="/incentives" class="hover:text-[#F59E0B] transition-colors">UIA Framework &amp; Tax Holidays</RouterLink></li>
            <li><RouterLink to="/sectors" class="hover:text-[#F59E0B] transition-colors">Core Processing Activities</RouterLink></li>
            <!-- <li><RouterLink to="/admin" class="hover:text-[#F59E0B] transition-colors">Admin &amp; Investor Portal</RouterLink></li> -->
          </ul>
        </div>

        <!-- Col 4: Regional Contact -->
        <div>
          <h4 class="text-white font-heading font-bold text-xs uppercase tracking-wider mb-4">Development Office</h4>
          <address class="not-italic text-xs text-slate-400 space-y-2">
            <p class="font-medium text-slate-200">Plot 22A - 22D Ujio Road,</p>
            <p>River Oli Division, Arua City</p>
            <p>West Nile Region, Republic of Uganda</p>
            <p class="pt-1">
              <a href="mailto:info@aruasez.ug" class="text-[#F59E0B] font-medium hover:underline">info@aruasez.ug</a>
            </p>
            <p class="text-slate-300 font-semibold">
              <a href="tel:+256701117851" class="hover:text-[#F59E0B] transition-colors">+256 701 117 851</a>
            </p>
          </address>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
        <p>&copy; {{ new Date().getFullYear() }} Arua Special Economic Zone (Arua SEZ). All rights reserved.</p>
        <div class="flex items-center gap-6">
          <RouterLink to="/about" class="hover:text-slate-400 transition-colors">Governance &amp; Accountability</RouterLink>
          <RouterLink to="/contact" class="hover:text-slate-400 transition-colors">Inquiries &amp; EOI</RouterLink>
          <!-- <RouterLink to="/admin" class="text-amber-400 hover:text-amber-300 font-semibold transition-colors">Admin Dashboard →</RouterLink> -->
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
