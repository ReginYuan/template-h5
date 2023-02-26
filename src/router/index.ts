import { defineAsyncComponent } from "vue"
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router"

// RouteRecordRaw 声明对应的数据结构与类型
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: "/index",
        component: defineAsyncComponent(() => import('@/views/layout/index.vue')),
        children: [
            {
                path: "/home",
                name: "home",
                component: defineAsyncComponent(() => import('@/views/home/index.vue'))

            },
            {
                path: "/video",
                name: "video",
                component: defineAsyncComponent(() => import('@/views/video/index.vue'))
            },
            {
                path: "/news",
                name: "news",
                component: defineAsyncComponent(() => import('@/views/news/index.vue'))
            },
            {
                path: "/me",
                name: "me",
                component: defineAsyncComponent(() => import('@/views/home/index.vue'))
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router