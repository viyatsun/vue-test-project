const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/MainLayout.vue'),
    children: [
      {
        path: '',
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
    meta: {
      public: true,
      onlyWhenLoggedOut: true,
    },
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/404Page.vue'),
  },
];

export default routes;
