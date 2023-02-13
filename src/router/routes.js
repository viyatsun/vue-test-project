const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/MainLayout.vue'),
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('../pages/CarouselPage.vue'),
  },
  {
    path: '/carousel',
    name: 'carousel',
    component: () => import('../pages/CarouselPage.vue'),
  },
];

export default routes;