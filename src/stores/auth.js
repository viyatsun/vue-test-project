import { defineStore } from 'pinia';
import { UserService, AuthenticationError } from '../services/user';
import TokenService from '../services/storage';
import UserDataService from '../services/user_data';
import router from '../router';

const useAuthStore = defineStore('authStore', {
  state: () => ({
    authenticating: false,
    accessToken: TokenService.getToken(),
    authenticationErrorCode: 0,
    authenticationError: '',
    userName: UserDataService.getUserName(),
    userPhoto: UserDataService.getUserPhoto(),
  }),
  actions: {
    async login({ login, password }) {
      this.loginRequest();

      try {
        const { token, image, username } = await UserService.login(login, password);
        this.loginSuccess({ token, image, username });

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
      router.push('/login');
    },

    loginRequest() {
      this.authenticating = true;
      this.authenticationError = '';
      this.authenticationErrorCode = 0;
    },
    loginSuccess({ token, image, username }) {
      this.accessToken = token;
      this.userName = username;
      this.userPhoto = image;

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
