<script setup>
import { ref } from 'vue';
import useAuthStore from '../stores/auth';

const authStore = useAuthStore();

const logOut = () => {
  authStore.logout();
};

const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>

<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated class="text-white bg-blue-6">
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          color="white"
          icon="menu"
          @click="toggleLeftDrawer"
        />

        <div class="toolbar-title">Vue Test</div>

        <q-space />

        <div class="toolbar-user">{{ authStore.userName }}</div>

        <q-img :src="authStore.userPhoto" class="user_photo"></q-img>

        <q-btn
          flat
          round
          dense
          color="white"
          icon="exit_to_app"
          @click="logOut"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="230"
      class="sidebar"
    >
      <q-scroll-area class="fit sidebar">
        <q-item
          :to="{ name: 'table' }"
          active-class="q-item-no-link-highlighting"
        >
          <q-item-section avatar>
            <q-icon name="table_view" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Таблиця</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          :to="{ name: 'carousel' }"
          active-class="q-item-no-link-highlighting"
        >
          <q-item-section avatar>
            <q-icon name="collections" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Галерея</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          :to="{ name: 'news' }"
          active-class="q-item-no-link-highlighting"
        >
          <q-item-section avatar>
            <q-icon name="newspaper" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Новини</q-item-label>
          </q-item-section>
        </q-item>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.toolbar-title {
  font-size: 20px;
  margin-left: 10px;
}

.toolbar-user {
  margin-right: 10px;
}

.sidebar {
  background-color: yellow;
}

.user_photo {
  width: 40px;
  margin-right: 20px;
}
</style>
