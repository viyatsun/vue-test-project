import ApiService from './api';

import { TokenService } from './storage';

class AuthenticationError extends Error {
  constructor(errorCode, message) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.errorCode = errorCode;
  }
}

const UserService = {
  /**
     * Login the user and store the access token to TokenService.
     *
     * @returns access_token
     * @throws AuthenticationError
    * */
  async login(login, password) {
    const requestData = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      url: '/auth/login',
      data: {
        username: 'kminchelle',
        password: '0lelplR',
        // expiresInMins: 60, // optional
      },
    };

    try {
      const response = await ApiService.customRequest(requestData);

      TokenService.saveToken(response.data.token);
      TokenService.saveRefreshToken(response.data.refreshToken);
      ApiService.setHeader();

      return response.data.token;
    } catch (error) {
      throw new AuthenticationError(error.response.status, error.response.data.detail);
    }
  },

  /**
     * Logout the current user by removing the token from storage.
     *
     * Will also remove `Authorization Bearer <token>` header from future requests.
    * */
  logout() {
    TokenService.removeToken();
    TokenService.removeRefreshToken();
    ApiService.removeHeader();
  },
};

export default UserService;

export { UserService, AuthenticationError };
