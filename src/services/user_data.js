const USER_NAME = 'user_name';

const USER_PHOTO = 'user_photo';

const UserDataService = {
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

export default UserDataService;
