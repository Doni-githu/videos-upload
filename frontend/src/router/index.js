import { createWebHistory, createRouter } from "vue-router"
import { HomeView, LoginView, RegisterView } from "../views"
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'main',
            component: HomeView,
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterView,
        }
    ]
})

export default router