<script setup lang="ts">
import { menuItems } from './menus.ts'
import MenuCard from './MenuCard.vue'
</script>

<template>
  <div class="menu-cards">
    <div class="menu-card" v-for="menuItem in menuItems" :key="menuItem.id">
      <MenuCard
        :name="menuItem.name"
        :options="menuItem.options"
        :price="menuItem.price"
      ></MenuCard>
    </div>
  </div>
</template>

<style scoped>
.menu-cards {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
