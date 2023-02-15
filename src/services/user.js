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
        username: login,
        password,
        // expiresInMins: 60, // optional
      },
    };

    try {
      const response = await ApiService.customRequest(requestData);

      TokenService.saveToken(response.data.token);
      TokenService.saveUserName(response.data.username);
      TokenService.saveUserPhoto(response.data.image);
      // TokenService.saveRefreshToken(response.data.refreshToken);
      ApiService.setHeader();

      return response.data.token;
    } catch (error) {
      throw new AuthenticationError(error.response.status, error.response.data.message);
    }
  },

  /**
     * Logout the current user by removing the token from storage.
     *
     * Will also remove `Authorization Bearer <token>` header from future requests.
    * */
  logout() {
    TokenService.removeToken();
    TokenService.removeAvatar();
    TokenService.removeNick();
    // TokenService.removeRefreshToken();
    ApiService.removeHeader();
  },
};

export default UserService;

export { UserService, AuthenticationError };
