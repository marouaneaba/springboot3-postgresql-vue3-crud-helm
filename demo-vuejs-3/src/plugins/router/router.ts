import {createRouter, createWebHistory} from "vue-router";
import Products from "@/components/Products.vue";
import Product from "@/components/Product.vue";
import Home from "@/pages/home/Home.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { name:'home', path: '/', component: Home, sensitive: true },
        {
            name:'products',
            path: '/products',
            component: Products,
            sensitive: true,
            children: [
                { name: 'products.id', path: ':id(\\d+)', component: Product}
            ]
        },
        { name:'error', path: '/:patchMatch(.*)*', component: () => import('@/components/NotFound.vue') },
    ]
})