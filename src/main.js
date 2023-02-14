/* eslint-disable import/no-extraneous-dependencies */
import { createApp } from 'vue';
import { Quasar } from 'quasar';
import { createPinia } from 'pinia';
import router from './router';

import '@quasar/extras/material-icons/material-icons.css';

import './style.css';
import 'quasar/dist/quasar.css';

import App from './App.vue';

import { TokenService } from './services/storage';
import ApiService from './services/api';

ApiService.init(import.meta.env.VITE_BASE_API_URL);

if (TokenService.getToken()) {
  ApiService.setHeader();
}

const myApp = createApp(App);
const pinia = createPinia();

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});

myApp.use(pinia);

myApp.use(router);

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app');
