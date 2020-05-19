const routes = [
    {
        name: 'docs',
        path: '/docs',
        component: () => { return import("@/views/docs/Index") },
    },
    {
        name: 'validation',
        path: '/validation',
        component: () => { return import("@/views/docs/Validation") },
    },
];

export default routes;