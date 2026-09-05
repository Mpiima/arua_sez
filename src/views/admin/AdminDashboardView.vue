<template>
  <AdminShell>
    <div class="space-y-6">
      <!-- Welcome Header -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <h1 class="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">Dashboard Overview</h1>
          <p class="text-sm text-slate-500 mt-1">Welcome back. Monitoring Arua Special Economic Zone metrics and inquiries.</p>
        </div>
        <div class="flex items-center gap-3">
          <button class="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-brand-gold text-slate-950 hover:bg-amber-400 shadow-sm transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            Register Investor
          </button>
          <button class="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 shadow-sm transition-all">
            Export Summary
          </button>
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <!-- Stat Card 1 -->
        <div class="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow transition-shadow">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold uppercase tracking-wider text-slate-500">Registered Investors</span>
            <div class="w-10 h-10 rounded-lg bg-amber-50 text-brand-gold flex items-center justify-center">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <div class="mt-4 flex items-baseline gap-2">
            <span class="text-3xl font-bold font-heading text-slate-900">14</span>
            <span class="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">+3 this quarter</span>
          </div>
          <p class="text-xs text-slate-500 mt-1">Across Agro &amp; Logistics sectors</p>
        </div>

        <!-- Stat Card 2 -->
        <div class="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow transition-shadow">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold uppercase tracking-wider text-slate-500">Allocated Land (Acres)</span>
            <div class="w-10 h-10 rounded-lg bg-emerald-50 text-brand-emerald flex items-center justify-center">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
          </div>
          <div class="mt-4 flex items-baseline gap-2">
            <span class="text-3xl font-bold font-heading text-slate-900">285 / 500</span>
            <span class="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">57% Occupancy</span>
          </div>
          <p class="text-xs text-slate-500 mt-1">215 Acres available for lease</p>
        </div>

        <!-- Stat Card 3 -->
        <div class="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow transition-shadow">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold uppercase tracking-wider text-slate-500">Pending Inquiries</span>
            <div class="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
          </div>
          <div class="mt-4 flex items-baseline gap-2">
            <span class="text-3xl font-bold font-heading text-slate-900">8</span>
            <span class="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">Requires Review</span>
          </div>
          <p class="text-xs text-slate-500 mt-1">Direct from Investor Portal</p>
        </div>

        <!-- Stat Card 4 -->
        <div class="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow transition-shadow">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold uppercase tracking-wider text-slate-500">Active Construction</span>
            <div class="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
          <div class="mt-4 flex items-baseline gap-2">
            <span class="text-3xl font-bold font-heading text-slate-900">6</span>
            <span class="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">On Track</span>
          </div>
          <p class="text-xs text-slate-500 mt-1">Warehouses &amp; processing units</p>
        </div>
      </div>

      <!-- Main Two-Column Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Left 2 Cols: Inquiries / Applications Initial State -->
        <div class="lg:col-span-2 rounded-xl bg-white border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div class="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
            <div>
              <h2 class="font-bold text-slate-900 font-heading">Recent Investor Applications</h2>
              <p class="text-xs text-slate-500">Pending reviews and newly submitted expressions of interest</p>
            </div>
            <button class="text-xs font-semibold text-brand-gold-dark hover:underline">View All</button>
          </div>

          <div class="overflow-x-auto flex-1">
            <table class="w-full text-left text-sm text-slate-600">
              <thead class="bg-slate-50 text-xs uppercase font-semibold text-slate-500 border-b border-slate-200">
                <tr>
                  <th class="px-6 py-3.5">Company / Applicant</th>
                  <th class="px-6 py-3.5">Sector</th>
                  <th class="px-6 py-3.5">Plot Size</th>
                  <th class="px-6 py-3.5">Status</th>
                  <th class="px-6 py-3.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr class="hover:bg-slate-50/80 transition-colors">
                  <td class="px-6 py-4 font-medium text-slate-900">
                    <div>Nile Agro Processors Ltd</div>
                    <span class="text-xs text-slate-400 font-normal">Contact: J. Alionzi</span>
                  </td>
                  <td class="px-6 py-4 text-xs">Agro-Processing (Grain)</td>
                  <td class="px-6 py-4 text-xs font-mono">15.0 Acres</td>
                  <td class="px-6 py-4">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                      Under Review
                    </span>
                  </td>
                  <td class="px-6 py-4 text-right">
                    <button class="text-xs font-semibold text-slate-700 hover:text-brand-navy">Review</button>
                  </td>
                </tr>

                <tr class="hover:bg-slate-50/80 transition-colors">
                  <td class="px-6 py-4 font-medium text-slate-900">
                    <div>Equator Freight &amp; Cold Logistics</div>
                    <span class="text-xs text-slate-400 font-normal">Contact: M. Sarah</span>
                  </td>
                  <td class="px-6 py-4 text-xs">Cold Chain &amp; Logistics</td>
                  <td class="px-6 py-4 text-xs font-mono">8.5 Acres</td>
                  <td class="px-6 py-4">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Approved
                    </span>
                  </td>
                  <td class="px-6 py-4 text-right">
                    <button class="text-xs font-semibold text-slate-700 hover:text-brand-navy">View</button>
                  </td>
                </tr>

                <tr class="hover:bg-slate-50/80 transition-colors">
                  <td class="px-6 py-4 font-medium text-slate-900">
                    <div>SolarTech Great Lakes</div>
                    <span class="text-xs text-slate-400 font-normal">Contact: D. Okello</span>
                  </td>
                  <td class="px-6 py-4 text-xs">Clean Tech / Assembly</td>
                  <td class="px-6 py-4 text-xs font-mono">5.0 Acres</td>
                  <td class="px-6 py-4">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                      Site Tour
                    </span>
                  </td>
                  <td class="px-6 py-4 text-right">
                    <button class="text-xs font-semibold text-slate-700 hover:text-brand-navy">Schedule</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Right 1 Col: Quick Actions & Utilities -->
        <div class="space-y-6">
          <!-- Zone Infrastructure Health Panel -->
          <div class="rounded-xl bg-white border border-slate-200 shadow-sm p-6">
            <h3 class="font-bold text-slate-900 font-heading text-base mb-4">Infrastructure Status</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between text-xs">
                <span class="font-medium text-slate-600 flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-emerald-500"></span> 33kV Power Grid
                </span>
                <span class="text-emerald-700 font-semibold">100% Operational</span>
              </div>
              <div class="flex items-center justify-between text-xs">
                <span class="font-medium text-slate-600 flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-emerald-500"></span> Industrial Water Works
                </span>
                <span class="text-emerald-700 font-semibold">Optimal Pressure</span>
              </div>
              <div class="flex items-center justify-between text-xs">
                <span class="font-medium text-slate-600 flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-emerald-500"></span> Fiber Broadband Link
                </span>
                <span class="text-emerald-700 font-semibold">Active (1 Gbps)</span>
              </div>
              <div class="flex items-center justify-between text-xs">
                <span class="font-medium text-slate-600 flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-amber-500"></span> Sector B Internal Roads
                </span>
                <span class="text-amber-700 font-semibold">Phase 2 Paving</span>
              </div>
            </div>
          </div>

          <!-- Quick Actions Panel -->
          <div class="rounded-xl bg-brand-navy text-white p-6 shadow-sm">
            <h3 class="font-bold text-white font-heading text-base mb-2">Zone Quick Actions</h3>
            <p class="text-xs text-slate-300 mb-4">Common administrative operations and documents.</p>
            <div class="space-y-2">
              <button class="w-full text-left px-3 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors flex items-center justify-between">
                <span>📁 Upload Investor Agreement</span>
                <span class="text-brand-gold">→</span>
              </button>
              <button class="w-full text-left px-3 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors flex items-center justify-between">
                <span>🗺️ Update Land Cadastre Map</span>
                <span class="text-brand-gold">→</span>
              </button>
              <button class="w-full text-left px-3 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors flex items-center justify-between">
                <span>📰 Publish Public Notice</span>
                <span class="text-brand-gold">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AdminShell>
</template>

<script setup>
import AdminShell from '@/components/admin/layout/AdminShell.vue'
</script>
