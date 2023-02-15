const TOKEN_KEY = 'access_token';

const USER_NAME = 'user_name';

const USER_PHOTO = 'user_photo';

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

  getUserName() {
    return localStorage.getItem(USER_NAME);
  },

  saveUserName(username) {
    localStorage.setItem(USER_NAME, username);
  },

  removeUserName() {
    localStorage.removeItem(USER_NAME);
  },

  getUserPhoto() {
    return localStorage.getItem(USER_PHOTO);
  },

  saveUserPhoto(photo) {
    localStorage.setItem(USER_PHOTO, photo);
  },

  removeUserPhoto() {
    localStorage.removeItem(USER_PHOTO);
  },

};
// eslint-disable-next-line import/prefer-default-export
export { TokenService };
