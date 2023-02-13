/* eslint-disable import/no-extraneous-dependencies */
import { createApp } from 'vue';
import { Quasar } from 'quasar';
import router from './router';

import '@quasar/extras/material-icons/material-icons.css';

import './style.css';
import 'quasar/dist/quasar.css';

import App from './App.vue';

const myApp = createApp(App);

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});

myApp.use(router);

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app');
