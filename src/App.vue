<script setup lang="ts">
import MenuList from './components/MenuList.vue'
import OrderView from './components/OrderView.vue';
import { useStore } from 'vuex';

const store = useStore();

</script>

<template>
  <div class="app-main">
    <MenuList />
    <OrderView />
  </div>
</template>

<style scoped>
.app-main {
  display: flex;
}

.app-main > :first-child {
  flex-basis: 75%;
}

.app-main > :last-child {
  flex-basis: 25%;
}

</style>
