import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'Arua SEZ — Home' }
  },
  // ── About Us ────────────────────────────────────────────────────────────────
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
    meta: { title: 'About Arua SEZ' }
  },
  {
    path: '/model',
    name: 'EnterpriseModel',
    component: () => import('@/views/EnterpriseModelView.vue'),
    meta: { title: 'Enterprise Model — Arua SEZ' }
  },
  {
    path: '/governance',
    name: 'Governance',
    component: () => import('@/views/GovernanceView.vue'),
    meta: { title: 'Governance — Arua SEZ' }
  },
  // ── Invest ──────────────────────────────────────────────────────────────────
  {
    path: '/location',
    name: 'StrategicLocation',
    component: () => import('@/views/LocationView.vue'),
    meta: { title: 'Strategic Location — Arua SEZ' }
  },
  {
    path: '/infrastructure',
    name: 'Infrastructure',
    component: () => import('@/views/InfrastructureView.vue'),
    meta: { title: 'Infrastructure Development — Arua SEZ' }
  },
  {
    path: '/workforce',
    name: 'Workforce',
    component: () => import('@/views/WorkforceView.vue'),
    meta: { title: 'Workforce Development — Arua SEZ' }
  },
  {
    path: '/incentives',
    name: 'Incentives',
    component: () => import('@/views/IncentivesView.vue'),
    meta: { title: 'Investor Incentives — Arua SEZ' }
  },
  {
    path: '/sectors',
    name: 'Sectors',
    component: () => import('@/views/SectorsView.vue'),
    meta: { title: 'Priority Sectors — Arua SEZ' }
  },
  {
    path: '/get-started',
    name: 'GetStarted',
    component: () => import('@/views/ContactView.vue'),
    meta: { title: 'Get Started — Arua SEZ' }
  },
  // ── Resources ───────────────────────────────────────────────────────────────
  {
    path: '/resources',
    name: 'Resources',
    component: () => import('@/views/ResourcesView.vue'),
    meta: { title: 'Publications — Arua SEZ' }
  },
  // ── Media ───────────────────────────────────────────────────────────────────
  {
    path: '/blogs',
    name: 'Blogs',
    component: () => import('@/views/BlogsView.vue'),
    meta: { title: 'News & Updates — Arua SEZ' }
  },
  {
    path: '/blogs/:slug',
    name: 'BlogDetail',
    component: () => import('@/views/BlogDetailView.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('@/views/GalleryView.vue'),
    meta: { title: 'Gallery — Arua SEZ' }
  },
  // ── Jobs & Tenders ──────────────────────────────────────────────────────────
  {
    path: '/vacancies',
    name: 'Vacancies',
    component: () => import('@/views/VacanciesView.vue'),
    meta: { title: 'Vacancies — Arua SEZ' }
  },
  {
    path: '/tenders',
    name: 'Tenders',
    component: () => import('@/views/TendersView.vue'),
    meta: { title: 'Tenders — Arua SEZ' }
  },
  // ── Connect ─────────────────────────────────────────────────────────────────
  {
    path: '/partner',
    name: 'Partner',
    component: () => import('@/views/ContactView.vue'),
    meta: { title: 'Partner With Us — Arua SEZ' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/ContactView.vue'),
    meta: { title: 'Contact Us — Arua SEZ' }
  },
  // ── Admin ───────────────────────────────────────────────────────────────────
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: () => import('@/views/admin/AdminDashboardView.vue'),
    meta: { title: 'Admin Dashboard — Arua SEZ' }
  },
  // ── Fallback ────────────────────────────────────────────────────────────────
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta?.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
