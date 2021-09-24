import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//import(/* webpackChunkName: "about" */ '../views/About.vue')
const routes = [
  /* {
    path: '/',
    name: 'Home',
    component: Home
  }, */
]

const router = new VueRouter({
  routes
})

export default router
