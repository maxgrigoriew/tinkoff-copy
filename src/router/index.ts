import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/business',
    name: 'business',
    meta: {
      layout: 'DefaultLayout',
    },
    component: import('../views/business-view.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      layout: 'EmptyLayout',
    },
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
