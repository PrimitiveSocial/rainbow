import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

let routes = [
    {
        path: '/',
        component: () => {
            return import("@/views/home/Index");
        },
        name: 'home'
    },
];

/**
 * Dynamically load custom route files
 * so this file does not grow big.
 */
let files = require.context('./', true, /\.js$/i);

files.keys().map((key) => {
    let filename = (key.split('/').pop().split('.')[0]);
    if(filename !== 'index') {
        let fileRoutes = require('./' + filename + '.js');
        routes = routes.concat(fileRoutes.default);
    }
});

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

export default router;