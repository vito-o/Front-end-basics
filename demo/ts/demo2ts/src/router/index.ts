import { createRouter, /* createWebHashHistory, */ createWebHistory, RouteRecordRaw } from 'vue-router'
import { setupRouterGuard } from './guard'


export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import(/* webpackChunkName: "index" */ '@/views/Index.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue')
  },

  {
    path: '/zy',
    name: 'zy',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/Layout.vue'),
    children: [
      {
        path: 'zy-1',
        name: 'zy-1',
        component: () => import(/* webpackChunkName: "Zygk" */ '@/views/zy/Zygk.vue'),
        meta: { name: '资源概况' }
      },
      {
        path: 'zy-2',
        name: 'zy-2',
        component: () => import(/* webpackChunkName: "Test" */ '@/views/Test.vue'),
        meta: { name: '数据源管理' }
      },
      {
        path: 'zy-3',
        name: 'zy-3',
        component: () => import(/* webpackChunkName: "Test" */ '@/views/Test.vue'),
        meta: { name: '项目管理' }
      },
      {
        path: 'zy-4',
        name: 'zy-4',
        component: () => import(/* webpackChunkName: "Test" */ '@/views/Test.vue'),
        meta: { name: '数据同步' }
      },
    ]
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

setupRouterGuard(router);

export default router
