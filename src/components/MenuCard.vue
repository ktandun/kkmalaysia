<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  name: string
  options: Array<string>
  price: number
}>()

const picked = ref('')
const quantity = ref('')
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
          <button> — </button>
          <input v-model="quantity" placeholder=" " />
          <button> + </button>
        </div>
      </div>
</template>

<style scoped>
.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1); /* semi-transparent black */
  padding: 0 3em;
}

.menu-description {
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

.item-quantity input {
  width: 35px;
  margin: 0 .1em;
}

.calculator {
  width: 100%;
  height: 100%;
  background-color: peru;
}

</style>
