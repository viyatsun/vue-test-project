// eslint-disable-next-line import/no-extraneous-dependencies
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
