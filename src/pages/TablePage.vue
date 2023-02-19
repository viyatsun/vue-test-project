<script setup>
import { ref } from 'vue';

import useEatStore from '../stores/table';

const eatStore = useEatStore();

const visibleColumns = ref([
  'calories',
  'desc',
  'fat',
  'carbs',
  'protein',
  'sodium',
  'calcium',
  'iron',
]);

const filter = ref('');
</script>

<template>
  <div class="q-pa-md">
    <q-table
      title="Treats"
      :rows="eatStore.rows"
      :columns="eatStore.columns"
      row-key="name"
      :visible-columns="visibleColumns"
      :filter="filter"
    >
      <template v-slot:top>

        <q-input
          outlined
          dense
          debounce="300"
          color="green"
          style="margin-right: 30px"
          v-model="filter"
          class="input"
        >
          <template v-slot:append>
            <q-icon name="search"></q-icon>
          </template>
        </q-input>

        <q-space></q-space>

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
</div>
</template>

<style scoped>
.input {
  margin: 10px 0px;
}
</style>
