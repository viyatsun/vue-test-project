const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/MainLayout.vue'),
    children: [
      {
        path: '/table',
        name: 'table',
        component: () => import('../pages/TablePage.vue'),
      },
      {
        path: '/carousel',
        name: 'carousel',
        component: () => import('../pages/CarouselPage.vue'),
      },
      {
        path: '/news',
        name: 'news',
        component: () => import('../pages/NewsPage.vue'),
      },
    ],
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/LoginPage.vue'),
  },
];

export default routes;
