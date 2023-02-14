const TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

const TokenService = {
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },

  saveToken(accessToken) {
    localStorage.setItem(TOKEN_KEY, accessToken);
  },

  removeToken() {
    localStorage.removeItem(TOKEN_KEY);
  },

};

// eslint-disable-next-line import/prefer-default-export
export { TokenService };