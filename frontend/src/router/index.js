import { createRouter, createWebHistory } from 'vue-router'
import route from './routes'
import Home from '../pages/Home.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../pages/Register.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../pages/Dashboard.vue'),
        meta: {
            auth: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})



router.beforeEach(route)

export default router