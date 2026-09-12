<template>
  <div class="min-h-screen flex flex-col bg-white font-sans text-slate-800">
    <AppHeader />

    <main class="flex-grow" v-if="post">
      <!-- ═══════════════════════════════════════════════
           ARTICLE HERO
           ═══════════════════════════════════════════════ -->
      <section class="relative pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden bg-[#0B0F19]">
        <!-- Gradient Background -->
        <div class="absolute inset-0 opacity-60" :style="{ background: post.bgColor }"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-[#0B0F19] to-transparent"></div>
        
        <!-- Big background icon watermark -->
        <div class="absolute top-1/2 -translate-y-1/2 -right-20 opacity-[0.03] pointer-events-none">
          <component :is="'svg'" class="w-[500px] h-[500px] text-white" fill="currentColor" viewBox="0 0 24 24">
            <path :d="post.iconPath"/>
          </component>
        </div>

        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span class="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6"
            :class="post.categoryStyle">
            {{ post.category }}
          </span>
          <h1 class="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-8">
            {{ post.title }}
          </h1>
          
          <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300 font-semibold">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white font-bold backdrop-blur-sm border border-white/20">
                {{ post.author.charAt(0) }}
              </div>
              <span class="text-white">{{ post.author }}</span>
            </div>
            <span class="w-1.5 h-1.5 rounded-full bg-slate-600 hidden sm:block"></span>
            <span>{{ post.date }}</span>
            <span class="w-1.5 h-1.5 rounded-full bg-slate-600 hidden sm:block"></span>
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              {{ post.readTime }} min read
            </span>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════
           ARTICLE BODY
           ═══════════════════════════════════════════════ -->
      <section class="py-16 lg:py-24 bg-white relative">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <!-- Back button -->
          <RouterLink to="/blogs" class="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#D00004] transition-colors mb-12 uppercase tracking-wider">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
            Back to all articles
          </RouterLink>

          <!-- Lead Excerpt -->
          <p class="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed mb-12 pb-12 border-b border-gray-100">
            {{ post.excerpt }}
          </p>

          <!-- Prose Content -->
          <div class="prose prose-lg prose-slate max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-[#D00004] prose-a:no-underline hover:prose-a:underline">
            <p v-for="(para, i) in post.body" :key="i" class="mb-6 leading-relaxed text-slate-700">
              {{ para }}
            </p>
          </div>

          <!-- Share / Tag footer -->
          <div class="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div class="flex items-center gap-3">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Share this article:</span>
              <button class="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-600 flex items-center justify-center transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </button>
              <button class="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-600 flex items-center justify-center transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </button>
            </div>
            
            <div class="px-4 py-2 bg-slate-50 rounded-lg text-xs font-semibold text-slate-500">
              Published in <span class="text-slate-800">{{ post.category }}</span>
            </div>
          </div>

        </div>
      </section>

      <!-- ═══════════════════════════════════════════════
           READ NEXT
           ═══════════════════════════════════════════════ -->
      <section class="py-20 bg-[#F8FAFC] border-t border-slate-100" v-if="relatedPosts.length">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="font-heading font-black text-2xl sm:text-3xl text-slate-900">Read Next</h2>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-5xl mx-auto">
            <RouterLink
              v-for="relPost in relatedPosts"
              :key="relPost.id"
              :to="'/blogs/' + relPost.slug"
              class="group bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col hover:shadow-lg hover:border-amber-300 transition-all duration-300"
            >
              <!-- Card image / color band -->
              <div class="relative h-40 overflow-hidden flex-shrink-0" :style="{ background: relPost.bgColor }">
                <div class="absolute inset-0 flex items-center justify-center opacity-10">
                  <component :is="'svg'" class="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path :d="relPost.iconPath"/>
                  </component>
                </div>
              </div>
              <!-- Content -->
              <div class="p-6 flex flex-col flex-1">
                <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">{{ relPost.category }}</div>
                <h3 class="font-heading font-black text-sm text-slate-900 leading-snug mb-2 group-hover:text-[#D00004] transition-colors line-clamp-2">
                  {{ relPost.title }}
                </h3>
              </div>
            </RouterLink>
          </div>
        </div>
      </section>

    </main>

    <!-- Not Found State -->
    <main class="flex-grow flex items-center justify-center py-32 bg-slate-50" v-else>
      <div class="text-center">
        <div class="text-5xl mb-6">🔍</div>
        <h2 class="font-heading font-black text-2xl text-slate-900 mb-2">Article Not Found</h2>
        <p class="text-slate-500 mb-8">The article you're looking for doesn't exist or has been moved.</p>
        <RouterLink to="/blogs" class="px-6 py-3 rounded-lg bg-[#D00004] hover:bg-[#B30003] text-white text-xs font-bold uppercase tracking-wider transition-colors">
          Return to Blog
        </RouterLink>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import { posts, getPostBySlug } from '@/data/blogs.js'

const route = useRoute()

// Get post based on the slug in the URL
const post = computed(() => {
  return getPostBySlug(route.params.slug)
})

// Get 3 related/other posts
const relatedPosts = computed(() => {
  if (!post.value) return []
  return posts.filter(p => p.id !== post.value.id).slice(0, 3)
})

// Update page title
watch(post, (newPost) => {
  if (newPost) {
    document.title = `${newPost.title} — Arua SEZ`
  } else {
    document.title = 'Article Not Found — Arua SEZ'
  }
}, { immediate: true })
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
