import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/brand',
      name: 'brand',
      component: HomeView
    },
    {
      path: '/search',
      name: 'search',
      component: HomeView
    },
  ]
})

export default router
