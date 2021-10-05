import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

export type AppRouteRecordRaw = RouteRecordRaw & {
  hidden?: boolean
}

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      hidden: true,
      component: () => import('../views/Home.vue')
    }
  ] as AppRouteRecordRaw[]
})