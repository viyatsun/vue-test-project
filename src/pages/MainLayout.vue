<script setup>
import { ref } from 'vue';

const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

</script>

<template>
    <q-layout view="hHh lpR fFf">

      <q-header elevated class="text-white bg-blue-6" color="#f3dd31" >
        <q-toolbar>
            <q-btn dense flat round color="white" icon="menu" @click="toggleLeftDrawer" />

            <div class="toolbar-title">Vue Test</div>

            <q-space />

            <div class="toolbar-user">Bayraktar</div>

            <q-btn
              flat
              round
              dense
              color="white"
              icon="exit_to_app"
              @click="logout"
              />
        </q-toolbar>
      </q-header>

      <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
        <!-- drawer content -->
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

</style>
