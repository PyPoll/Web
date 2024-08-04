import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/',                name: 'Home',           component: HomeView,                                        beforeEnter: () => true },
        { path: '/privacy',         name: 'Privacy',        component: () => import("@/views/LegalDocView.vue"),       beforeEnter: () => true },
        { path: '/terms',           name: 'Terms',          component: () => import("@/views/LegalDocView.vue"),       beforeEnter: () => true },

        // 404 redirect
        { path: "/:catchAll(.*)", name: 'NotFound', component: () => import("@/views/NotFound.vue") }
    ]
});

export default router;
