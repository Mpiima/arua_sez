<template>
  <header class="h-20 bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 flex items-center justify-between sticky top-0 z-30 shadow-sm">
    <div class="flex items-center gap-4">
      <!-- Mobile Sidebar Toggle -->
      <button 
        @click="$emit('toggle-sidebar')" 
        class="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
        aria-label="Toggle navigation"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Context / Breadcrumb -->
      <div>
        <h2 class="font-heading font-bold text-lg text-slate-800 leading-tight">Admin Overview</h2>
        <p class="text-xs text-slate-500 hidden sm:block">Arua Special Economic Zone • Management Console</p>
      </div>
    </div>

    <!-- Right Utility Area -->
    <div class="flex items-center gap-3 sm:gap-4">
      <!-- Notification Icon -->
      <button 
        class="relative p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
        aria-label="Notifications"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-brand-gold ring-2 ring-white"></span>
      </button>

      <div class="h-6 w-px bg-slate-200 hidden sm:block"></div>

      <!-- Admin User Profile Pill -->
      <div class="flex items-center gap-3 pl-1 sm:pl-2">
        <div class="w-9 h-9 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-sm shadow-sm ring-2 ring-brand-gold/40">
          AZ
        </div>
        <div class="hidden sm:block text-left">
          <div class="text-xs font-bold text-slate-800 leading-tight">Zone Admin</div>
          <div class="text-[11px] text-brand-emerald font-medium">Online • Arua SEZ</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
defineEmits(['toggle-sidebar'])
</script>
