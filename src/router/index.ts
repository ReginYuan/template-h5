import { defineAsyncComponent } from "vue"
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router"

// RouteRecordRaw 声明对应的数据结构与类型
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/index'
    }, {
        path: '/index',
        component: defineAsyncComponent(() => import('@/views/home/index.vue'))
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router