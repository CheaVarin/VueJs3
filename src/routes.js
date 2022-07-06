import { createRouter, createWebHistory } from 'vue-router'
import RouteWorld from './components/RouteWorld.vue'
import FectchDataAPI from './components/FectchDataAPI.vue'

const routes = [
    {
        path: '/',
        name: 'RouteWorld',
        component: RouteWorld
    },
    {
        path: '/hi',
        name: 'FectchDataAPI',
        component: FectchDataAPI
    }
];


export default createRouter({
    history: createWebHistory(),
    routes
})