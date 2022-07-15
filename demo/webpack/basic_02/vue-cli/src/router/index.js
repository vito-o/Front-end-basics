import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: () => import(/* webpackChunkName: "home" */"../views/Home")
        },
        {
            path: '/about',
            component: () => import(/* webpackChunkName: "about" */"../views/About")
        },
    ]
})

export default router;