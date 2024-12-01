import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ProductList from '../views/ProductListView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'ProductList',
        component: ProductList
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

