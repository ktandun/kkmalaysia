<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex';
import type { menuItem } from '../store';

const store = useStore();

const props = defineProps<{
  name: string
  options: Array<string>
  price: number
  quantity: number
}>()

const picked = ref('')
const quantity = ref(0)

const increment = () => {
  quantity.value += 1
}

const decrement = () => {
  quantity.value -= 1

  if (quantity.value <= 0) { quantity.value = 0} /* cap at zero */
}

const addOrder = () => {
  let order: menuItem = {
    name: props.name,
    selection: picked.value,
    quantity: quantity.value,
    price: props.price
  }

  console.log(order)

  store.commit('addOrder', order)
}
</script>

<template>
      <div class="menu-item">
        <div class="menu-description">
          <div class="name">
            <p>{{ props.name }}</p>
            <p class="price">{{ props.price }}</p>
          </div>
          <label class="option" v-for="ops in props.options" :key="ops">
            <input type="radio" :value="ops" v-model="picked" />
            {{ ops }}
          </label>
        </div>
        <div class="item-quantity">
          <button @click="decrement"> — </button>
          <input placeholder=" " v-model="quantity" />
          <button @click="increment"> + </button>
        </div>
        <button @click="addOrder()" class="addBtn"> Add to order </button>
      </div>
</template>

<style scoped>
.menu-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;
  border-bottom: 1px black solid;
}

.menu-description {
  width: 100%;
  color: black;
  display: flex;
  flex-direction: column;
}

.menu-description .name {
  display: flex;
  flex-direction: row;
}

.menu-description p::after {
  content: " |";
}

.menu-description p.price::before {
  content: "$";
}

.item-quantity {
  width: fit-content;
  display: flex;
  flex-direction: row;
  margin: 0 .1em;
}

.item-quantity button {
  padding: 10px;
}

.item-quantity input {
  width: 35px;
  text-align: center;
}

.addBtn {
  width: 180px;
  padding: 10px;
}
</style>
