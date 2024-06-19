// src/main.js
import Vue from 'vue';
import App from './App.vue';
import { Quasar } from 'quasar';
import quasarUserOptions from './quasar-user-options';
import { db } from './firebase/init'; // Import Firebase initialization

Vue.use(Quasar, quasarUserOptions);

new Vue({
  el: '#app',
  render: h => h(App)
});
