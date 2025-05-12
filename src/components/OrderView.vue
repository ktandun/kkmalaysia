<script setup lang="ts">
import { ref, computed, onRenderTracked } from 'vue';
import { useStore } from 'vuex';
import type { State } from '../store'

const store = useStore<State>();
const custOrder = store.getters.getCustomerOrder;

const totalPrice = computed(() => {
  return custOrder.reduce((sum: number, ord: { price: number; quantity: number; addon: number}) => sum + (ord.price + ord.addon) * ord.quantity, 0);
});
</script>

<template>
  <div class="price-box">
    <p style="text-align: center;">Payment</p>
    <div v-for="ord in custOrder" :key="ord.name">
      <div class="pricedesc">
        <p>{{ ord.selection }} {{ ord.name }} (x{{ ord.quantity }}) </p>
        <p>.........................................</p>
        <p> ${{ (ord.price + ord.addon) * ord.quantity }}</p>
      </div>
    </div>
    <p class="ptotal">Total price: ${{ totalPrice }}</p>
  </div>
</template>

<style scoped>
.price-box {
    width: 300px;
    height: 100vh;
    display: flex;
    padding: 0 2em;
    flex-direction: column;
    border: 1px solid black;
    overflow-y: scroll;
}

.pricedesc {
  display: flex;
  flex-direction: row;
}

.pricedesc > * {
  margin-right: 10px;
}

.ptotal {
  border-top: 1px solid black;
  padding-top: 20px;
  text-align: right;
  margin-right: 1em;
  font-size: larger;
}
</style>
