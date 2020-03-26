import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => {
            return import("./../views/home/Index");
        },
        name: 'home'
    },
];

const router = new VueRouter({
    routes: routes
});

export default router;