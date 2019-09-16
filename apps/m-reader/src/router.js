import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path: '/',
        component: () => import('./views/Home.vue')
    },
    {
        path: '/home',
        component: () => import('./views/Home.vue')
    },
    {
        path: '/read/:filename',
        name: 'read',
        component: () => import('./views/Reader.vue')
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ './views/About.vue')
    }
];

export default new Router({
    // base: 'm-reader',
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});
