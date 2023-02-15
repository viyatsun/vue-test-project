import ApiService from './api';

import TokenService from './storage';

class AuthenticationError extends Error {
  constructor(errorCode, message) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.errorCode = errorCode;
  }
}

const UserService = {

  async login(login, password) {
    const requestData = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      url: '/auth/login',
      data: {
        username: login,
        password,
      },
    };

    try {
      const response = await ApiService.customRequest(requestData);

      TokenService.saveToken(response.data.token);
      TokenService.saveUserName(response.data.username);
      TokenService.saveUserPhoto(response.data.image);
      ApiService.setHeader();

      return response.data.token;
    } catch (error) {
      throw new AuthenticationError(error.response.status, error.response.data.message);
    }
  },

  logout() {
    TokenService.removeToken();
    TokenService.removeUserPhoto();
    TokenService.removeUserName();
    ApiService.removeHeader();
  },
};

export { UserService, AuthenticationError };
