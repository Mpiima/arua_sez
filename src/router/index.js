import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'Arua SEZ — Home' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
    meta: { title: 'About Us — Arua SEZ' }
  },
  {
    path: '/sectors',
    name: 'Sectors',
    component: () => import('@/views/SectorsView.vue'),
    meta: { title: 'Priority Sectors — Arua SEZ' }
  },
  {
    path: '/incentives',
    name: 'Incentives',
    component: () => import('@/views/IncentivesView.vue'),
    meta: { title: 'Investor Incentives — Arua SEZ' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/ContactView.vue'),
    meta: { title: 'Contact & Partner — Arua SEZ' }
  },
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: () => import('@/views/admin/AdminDashboardView.vue'),
    meta: { title: 'Admin Dashboard — Arua SEZ' }
  },
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
