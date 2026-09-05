<template>
  <div class="min-h-screen bg-slate-50 flex">
    <!-- Sidebar -->
    <AdminSidebar 
      :is-open="mobileSidebarOpen" 
      @close="mobileSidebarOpen = false" 
    />

    <!-- Main Content Area with lg:ml-64 offset -->
    <div class="flex-1 flex flex-col min-w-0 lg:pl-64 transition-all">
      <!-- Admin Top Header -->
      <AdminHeader @toggle-sidebar="mobileSidebarOpen = !mobileSidebarOpen" />

      <!-- Page Body Container -->
      <main class="flex-1 p-4 sm:p-6 lg:p-8">
        <div class="max-w-7xl mx-auto">
          <slot></slot>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AdminSidebar from './AdminSidebar.vue'
import AdminHeader from './AdminHeader.vue'

const mobileSidebarOpen = ref(false)
</script>
