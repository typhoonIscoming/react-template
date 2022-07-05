import { lazy } from 'react';


const routes = [
    {
        path: '/home',
        component: lazy(() => import('../views/home')),
    },
    {
        path: '/main',
        component: lazy(() => import('../views/main')),
    },
    {
        path: '/404',
        component: lazy(() => import('../views/notFound'))
    },
];

export default routes;

export const serverDir = '/react-template';
