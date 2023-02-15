import ApiService from './api';

import TokenService from './storage';
import UserDataService from './user_data';

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
      UserDataService.saveUserName(response.data.username);
      UserDataService.saveUserPhoto(response.data.image);
      ApiService.setHeader();

      return response.data;
    } catch (error) {
      throw new AuthenticationError(
        error.response.status,
        error.response.data.message,
      );
    }
  },

  logout() {
    TokenService.removeToken();
    UserDataService.removeUserPhoto();
    UserDataService.removeUserName();
    ApiService.removeHeader();
  },
};

export { UserService, AuthenticationError };
