// eslint-disable-next-line import/no-extraneous-dependencies
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import TokenService from '../services/storage';

const router = createRouter({
  routes,
  history: createWebHistory(),
});

// eslint-disable-next-line consistent-return
router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some((record) => record.meta.public);
  const onlyWhenLoggedOut = to.matched.some(
    (record) => record.meta.onlyWhenLoggedOut,
  );
  const loggedIn = !!TokenService.getToken();

  if (!isPublic && !loggedIn) {
    return next({
      name: 'login',
      query: { redirect: to.fullPath }, // Store the full path to redirect the user to after login
    });
  }

  // Do not allow user to visit login page or register page if they are logged in
  if (loggedIn && onlyWhenLoggedOut) {
    return next({ name: '' });
  }

  next();
});

export default router;
