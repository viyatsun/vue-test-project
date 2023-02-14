<script setup>

import { ref } from 'vue';

import useEatStore from '../stores/table';

const eatStore = useEatStore(); 

const visibleColumns = ref(['calories', 'desc', 'fat', 'carbs', 'protein', 'sodium', 'calcium', 'iron']);

const filter = ref('');

</script>

<template>
     <q-table
      title="Treats"
      :rows="eatStore.rows"
      :columns="eatStore.columns"
      row-key="name"
      :visible-columns="visibleColumns"
      :filter="filter"
    >
      <template v-slot:top>
        <img
          style="height: 50px; width: 50px"
          src="https://cdn.quasar.dev/logo-v2/svg/logo.svg"
        >

        <q-space></q-space>

        <q-input outlined
          dense debounce="300"
          color="green"  style="width: 300px; margin-right: 30px;"
          v-model="filter" class="input">
          <template v-slot:append>
            <q-icon name="search"></q-icon>
          </template>
        </q-input>

        <q-select
          color="green"
          v-model="visibleColumns"
          multiple
          outlined
          dense
          options-dense
          :display-value="$q.lang.table.columns"
          emit-value
          map-options
          :options="eatStore.columns"
          option-value="name"
          options-cover
          style="min-width: 150px"
        ></q-select>
      </template>

    </q-table>
</template>

<style scoped>
  .input {
    margin-left: 30px;

  }
</style>
