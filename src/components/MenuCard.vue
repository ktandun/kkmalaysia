<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex';
import type { menuItem } from '../store';

const store = useStore();

const props = defineProps<{
  name: string
  options: Array<string>
  addons: Array<number>
  price: number
  quantity: number
}>()

const pickedIndex = ref<number>(0)
const quantity = ref(0)

const increment = () => {
  quantity.value += 1
}

const decrement = () => {
  quantity.value -= 1

  if (quantity.value <= 0) { quantity.value = 0} /* cap at zero */
}

const addOrder = () => {
  if (quantity.value > 0) {

    let selected = props.options[pickedIndex.value] || ""
    let addOnVal = props.addons[pickedIndex.value] || 0

    let order: menuItem = {
      name: props.name,
      selection: selected,
      addon: addOnVal,
      quantity: quantity.value,
      price: props.price
    }

    console.log(order)
    store.commit('addOrder', order)
  }
} 

const getAddOns = (idx: number) => {
  let extraPrice = props.addons[idx];
  if (extraPrice > 0) {
    let text = "(+" + extraPrice + ".00)";
    return text
  }
  return ""
}
</script>

<template>
      <div class="menu-item">
        <div class="menu-description">
          <div class="name">
            <p>{{ props.name }}</p>
            <p class="price">${{ props.price }}</p>
          </div>
          <label class="option" v-for="(ops,idx) in props.options" :key="ops">
            <input type="radio" :value="idx" v-model="pickedIndex" />
            {{ ops }} {{ getAddOns(idx) }}
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
  padding: 1em;
  font-weight: bold;
  border-bottom: 1px black solid;
}

.menu-description {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.menu-description .name {
  display: flex;
  flex-direction: row;
}

.menu-description p.price {
  border-left: 1px solid black;
  border-right: 1px solid black;
  margin-left: 1em;
  padding: 0 1em;

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
