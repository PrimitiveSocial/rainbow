const routes = [
    {
        name: 'docs',
        path: '/docs',
        component: () => { return import("@/views/docs/Index") },
    },
];

export default routes;