<template>
  <div class="min-h-screen flex flex-col bg-white font-sans text-slate-800">
    <AppHeader />

    <main class="flex-grow">

      <!-- ═══════════════════════════════════════════════
           PAGE HERO
           ═══════════════════════════════════════════════ -->
      <section class="relative bg-[#0B0F19] py-20 overflow-hidden">
        <!-- Subtle grid pattern -->
        <div class="absolute inset-0 opacity-[0.04]"
          style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 48px 48px;">
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-[11px] font-semibold uppercase tracking-widest text-amber-300 mb-5">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              News & Insights
            </div>
            <h1 class="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
              Arua SEZ <span class="text-[#F59E0B]">Blog</span>
            </h1>
            <p class="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Updates, infrastructure news, investment insights, and stories from West Nile's industrial frontier.
            </p>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════
           FILTER TABS
           ═══════════════════════════════════════════════ -->
      <section class="sticky top-20 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center gap-1 overflow-x-auto py-3 scrollbar-none">
            <button
              v-for="cat in categories"
              :key="cat"
              @click="activeCategory = cat"
              class="flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
              :class="activeCategory === cat
                ? 'bg-[#D00004] text-white shadow-sm'
                : 'text-slate-500 hover:text-slate-800 hover:bg-gray-100'"
            >
              {{ cat }}
            </button>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════
           FEATURED ARTICLE
           ═══════════════════════════════════════════════ -->
      <section class="py-14 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-xs font-extrabold tracking-widest text-[#D00004] uppercase mb-6">Featured Story</div>

          <RouterLink :to="'/blogs/' + featuredPost.slug" class="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer block">
            <!-- Image side -->
            <div class="relative h-64 lg:h-auto min-h-[320px] bg-[#0B0F19] overflow-hidden">
              <!-- Real company photo -->
              <img
                src="/images/aruasez (1).jpeg"
                alt="Arua SEZ site activity"
                class="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-br from-amber-600/70 to-slate-950/90 flex items-end p-8">
                <div class="space-y-2">
                  <span class="inline-block px-3 py-1 rounded-full bg-[#D00004] text-white text-[10px] font-bold uppercase tracking-widest">
                    {{ featuredPost.category }}
                  </span>
                  <div class="text-2xl font-black text-white leading-tight">{{ featuredPost.title }}</div>
                </div>
              </div>
            </div>
            <!-- Content side -->
            <div class="p-8 lg:p-10 flex flex-col justify-between bg-white">
              <div>
                <div class="flex items-center gap-3 text-[11px] text-slate-400 uppercase tracking-wider font-semibold mb-4">
                  <span>{{ featuredPost.date }}</span>
                  <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span>{{ featuredPost.readTime }} min read</span>
                </div>
                <h2 class="font-heading font-black text-2xl text-slate-900 leading-snug mb-4 group-hover:text-[#D00004] transition-colors">
                  {{ featuredPost.title }}
                </h2>
                <p class="text-sm text-slate-600 leading-relaxed">{{ featuredPost.excerpt }}</p>
              </div>
              <div class="mt-6 flex items-center justify-between pt-5 border-t border-gray-100">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-[#0B0F19] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {{ featuredPost.author.charAt(0) }}
                  </div>
                  <span class="text-xs font-semibold text-slate-700">{{ featuredPost.author }}</span>
                </div>
                <span class="text-xs font-bold text-[#D00004] group-hover:underline">Read article →</span>
              </div>
            </div>
          </RouterLink>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════
           ARTICLES GRID
           ═══════════════════════════════════════════════ -->
      <section class="pb-20 bg-[#F8FAFC]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">

          <div class="flex items-center justify-between mb-8">
            <div class="text-xs font-extrabold tracking-widest text-slate-400 uppercase">
              {{ filteredPosts.length }} Article{{ filteredPosts.length !== 1 ? 's' : '' }}
              <span v-if="activeCategory !== 'All'"> in {{ activeCategory }}</span>
            </div>
          </div>

          <div v-if="filteredPosts.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            <RouterLink
              v-for="post in filteredPosts"
              :key="post.id"
              :to="'/blogs/' + post.slug"
              class="group bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col hover:shadow-lg hover:border-amber-300 transition-all duration-300 cursor-pointer"
            >
              <!-- Card image / color band -->
              <div class="relative h-44 overflow-hidden flex-shrink-0"
                :style="{ background: post.bgColor }">
                <div class="absolute inset-0 flex items-center justify-center opacity-10">
                  <component :is="'svg'" class="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path :d="post.iconPath"/>
                  </component>
                </div>
                <div class="absolute top-4 left-4">
                  <span class="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                    :class="post.categoryStyle">
                    {{ post.category }}
                  </span>
                </div>
              </div>

              <!-- Content -->
              <div class="p-6 flex flex-col flex-1">
                <div class="flex items-center gap-2 text-[11px] text-slate-400 font-semibold mb-3">
                  <span>{{ post.date }}</span>
                  <span class="w-1 h-1 rounded-full bg-slate-200"></span>
                  <span>{{ post.readTime }} min read</span>
                </div>
                <h3 class="font-heading font-black text-sm text-slate-900 leading-snug mb-2 group-hover:text-[#D00004] transition-colors flex-1">
                  {{ post.title }}
                </h3>
                <p class="text-xs text-slate-500 leading-relaxed mt-1 line-clamp-3">{{ post.excerpt }}</p>
                <div class="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <div class="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0">
                      {{ post.author.charAt(0) }}
                    </div>
                    <span class="text-[11px] font-semibold text-slate-600">{{ post.author }}</span>
                  </div>
                  <span class="text-[11px] font-bold text-[#D00004]">Read →</span>
                </div>
              </div>
            </RouterLink>
          </div>

          <!-- Empty state -->
          <div v-else class="text-center py-20">
            <div class="text-5xl mb-4">📭</div>
            <div class="text-slate-400 font-semibold">No articles in this category yet.</div>
          </div>

        </div>
      </section>

      <!-- ═══════════════════════════════════════════════
           NEWSLETTER SIGNUP CTA
           ═══════════════════════════════════════════════ -->
      <section class="py-16 bg-[#0B0F19]">
        <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-[11px] font-semibold uppercase tracking-widest text-amber-300 mb-5">
            Stay Informed
          </div>
          <h2 class="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight mb-3">
            Get Investor Updates Delivered
          </h2>
          <p class="text-slate-400 text-sm mb-8 leading-relaxed">
            Be the first to know about new infrastructure developments, investment opportunities, and policy updates from Arua SEZ.
          </p>
          <form class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" @submit.prevent="subscribeNewsletter">
            <input
              v-model="email"
              type="email"
              placeholder="Your business email address"
              class="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400/60 transition-colors"
              required
            />
            <button
              type="submit"
              class="px-6 py-3 rounded-lg bg-[#D00004] hover:bg-[#B30003] text-white text-xs font-bold uppercase tracking-wider transition-colors flex-shrink-0"
            >
              Subscribe
            </button>
          </form>
          <p v-if="subscribed" class="mt-4 text-emerald-400 text-xs font-semibold">✓ You're subscribed! We'll be in touch.</p>
        </div>
      </section>

    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import { posts as allPosts } from '@/data/blogs.js'

// ── State ──────────────────────────────────────────────────────────────────
const activeCategory = ref('All')
const email = ref('')
const subscribed = ref(false)

// ── Categories ─────────────────────────────────────────────────────────────
const categories = ['All', 'Infrastructure', 'Investment', 'Policy', 'Agriculture', 'Trade']

// ── Articles Data ──────────────────────────────────────────────────────────
// The featured post is the first one (the Airport upgrade)
const featuredPost = allPosts[0]

// The rest of the posts for the grid
const posts = allPosts.slice(1)

// ── Computed ───────────────────────────────────────────────────────────────
const filteredPosts = computed(() => {
  if (activeCategory.value === 'All') return posts
  return posts.filter(p => p.category === activeCategory.value)
})

// ── Methods ────────────────────────────────────────────────────────────────
function subscribeNewsletter() {
  if (email.value) {
    subscribed.value = true
    email.value = ''
    setTimeout(() => { subscribed.value = false }, 5000)
  }
}
</script>

<style scoped>
.scrollbar-none::-webkit-scrollbar { display: none; }
.scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
