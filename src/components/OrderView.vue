<script setup lang="ts">
import { useStore } from 'vuex';
import type { State } from '../store'

const store = useStore<State>();

const custOrder = store.getters.getCustomerOrder;

</script>

<template>
  <div class="price-box">
    <div v-for="ord in custOrder" :key="ord.name">
      <p>{{ ord.name }} </p>
      <p> {{ ord.price }}</p>
    </div>
  </div>
</template>

<style scoped>
.price-box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>
