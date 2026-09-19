<template>
  <div class="bg-[#0B0F19] border-y border-white/5 py-2.5 overflow-hidden fade-edges relative z-10">
    <!-- Label badge -->
    <div class="absolute left-0 top-0 bottom-0 z-10 flex items-center px-4 bg-[#D00004] shadow-md">
      <span class="text-[10px] font-black tracking-widest uppercase text-white whitespace-nowrap">LATEST</span>
    </div>

    <!-- Scrolling track -->
    <div class="pl-24 overflow-hidden">
      <div class="ticker-track">
        <span v-for="(item, i) in tickerItems.concat(tickerItems)" :key="i" class="flex items-center gap-4 pr-10 whitespace-nowrap">
          <span class="w-1.5 h-1.5 rounded-full bg-[#F59E0B] flex-shrink-0 inline-block"></span>
          <span class="text-[12px] font-medium text-slate-300">{{ item }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const tickerItems = [
  'Phase 1 Site Works Actively Underway in Arua City',
  'UIA-Certified Special Economic Zone — Full Legal Framework in Place',
  '10-Year Corporate Income Tax Holiday for All Zone Investors',
  'Zero Import Duty on Plant, Machinery & Equipment',
  '100M+ Consumers Within 100 km Radius Across 4 Countries',
  'On-Site Customs Post — Eliminating Cross-Border Delays',
  'Fast-Track One-Stop Investment Licensing Through UIA',
  'Direct Freight Corridor to DRC, South Sudan & CAR',
  'Full Foreign Exchange Repatriation Guaranteed',
  'Serviced Plots with Industrial Power, Water & Roads',
]
</script>
