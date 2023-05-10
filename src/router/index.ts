import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      layout: 'DefaultLayout',
    },
    component: import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      layout: 'EmptyLayout',
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
