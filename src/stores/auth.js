import { defineStore } from 'pinia';
import { UserService, AuthenticationError } from '../services/user';
import { TokenService } from '../services/storage';
import router from '../router';

const useAuthStore = defineStore('authSore', {
  state: () => ({
    authenticating: false,
    accessToken: TokenService.getToken(),
    authenticationErrorCode: 0,
    authenticationError: '',
  }),
  actions: {
    async login({ login, password }) {
      this.loginRequest();

      try {
        const token = await UserService.login(login, password);
        this.loginSuccess(token);

        // Redirect the user to the page he first tried to visit or to the home view
        // router.push(router.history.current.query.redirect || '/');
        router.push('/');

        return true;
      } catch (e) {
        if (e instanceof AuthenticationError) {
          this.loginError({ errorCode: e.errorCode, errorMessage: e.message });
        }

        return false;
      }
    },

    logout() {
      UserService.logout();
      this.loginSuccess();
      this.router.push('/login');
    },

    loginRequest() {
      this.authenticating = true;
      this.authenticationError = '';
      this.authenticationErrorCode = 0;
    },
    loginSuccess(accessToken) {
      this.accessToken = accessToken;
      this.authenticating = false;
    },
    loginError({ errorCode, errorMessage }) {
      this.authenticating = false;
      this.authenticationErrorCode = errorCode;
      this.authenticationError = errorMessage;
    },
    logoutSuccess() {
      this.accessToken = '';
    },
  },
});

export default useAuthStore;
