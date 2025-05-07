<script setup lang="ts">
import MenuList from './components/MenuList.vue'
import PriceCalculator from './components/PriceCalculator.vue';
</script>

<template>
  <div class="app-main">
    <MenuList></MenuList>
    <PriceCalculator></PriceCalculator>
  </div>
</template>

<style scoped>
.app-main {
  display: flex;
}

.app-main > :first-child {
  flex-basis: 55%;
}

.app-main > :last-child {
  flex-basis: 45%;
}
</style>
