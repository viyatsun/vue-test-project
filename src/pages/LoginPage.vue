<script setup>
import { ref, computed } from 'vue';
import useAuthStore from '../stores/auth';

const authStore = useAuthStore();

const login = ref('');
const password = ref('');
const passwordVisible = ref(false);
// eslint-disable-next-line no-return-assign
const tooglePasswordVisible = () =>
  (passwordVisible.value = !passwordVisible.value);
const iconVisible = computed(() =>
  passwordVisible.value ? 'visibility' : 'visibility_off'
);
const typeInputPassword = computed(() =>
  passwordVisible.value ? 'text' : 'password'
);
const cannotSubmitForm = computed(
  () => login.value === '' || password.value === ''
);

const handleSubmit = () => {
  authStore.login({ login: login.value, password: password.value });
};

const errorAuhorizationMessage = computed(() =>
  authStore.authenticationError === 'Invalid credentials'
    ? 'Неправильний логін або пароль Спробуйте ще'
    : ''
);
</script>

<template>
  <div class="container">
    <div class="login-page">
      <q-form class="login-form q-gutter-y-md" @submit.prevent="handleSubmit">
        <p class="p-signin">Авторизуйтесь, будь ласка, в тестовому додатку</p>
        <q-input
          v-model="login"
          bg-color="white"
          label="Введіть логін"
          outlined
        />

        <q-input
          v-model="password"
          bg-color="white"
          label="Введіть пароль"
          outlined
          :type="typeInputPassword"
        >
          <template v-slot:append>
            <q-icon :name="iconVisible" @click="tooglePasswordVisible" />
          </template>
        </q-input>

        <q-btn
          class="button"
          label="Авторизуватися"
          :disable="cannotSubmitForm"
          type="submit"
        />

        <div class="errorMessage">
          {{ errorAuhorizationMessage }}
        </div>
      </q-form>
    </div>
  </div>
</template>

<style>
.login-page {
  margin-top: 13%;
}

.p-signin {
  text-align: center;
  font-size: 20px;
  color: rgb(124, 85, 223);
  font-family: Arial;
}

.login-form {
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 30px;
  max-width: 330px;
  height: 450px;
}
.form-input {
  background-color: #f2f2f2;
}

.button {
  margin: 20px 0;
  background-color: #00b388;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
}

.errorMessage {
  text-align: center;
  color: red;
}
</style>
