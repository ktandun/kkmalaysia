<script setup lang="ts">
import { computed, ref } from 'vue'
import { menuCategories } from './menus'
import MenuCard from './MenuCard.vue'

const quantity = ref(0)
const panelSelected = ref(1)

const handleClick = (id: number) => {
  panelSelected.value = id
}

const selectedMenuCategory = computed(() =>
  menuCategories.find(menu => menu.id === panelSelected.value)?.items
)
</script>

<template>
  <div class="menu-cards">
    <div class="side-bar">
      <div v-for="menu in menuCategories" :key="menu.id">
        <button @click="handleClick(menu.id)">{{menu.category}}</button>
      </div>
    </div>
    <div class="menu-card">
      <div v-for="menuItem in selectedMenuCategory" :key="menuItem.id">
          <MenuCard
          :name="menuItem.name"
          :options="menuItem.options"
          :addons="menuItem.addons"
          :price="menuItem.price"
          :quantity = quantity
        ></MenuCard>
      </div>
    </div>
  </div>
</template>

<style scoped>
.side-bar {
  display: flex;
  justify-content:space-evenly;
  flex-direction: column;
  width: 200px;
}

.side-bar button{
  padding: 2.75em 0;
  width: 100%;
  cursor: pointer;
  color: white;
  font-size: large;
  font-weight: bold;
  background-color: #d23a14;
}

.side-bar button:active {
    background-color: #a82504;

}

.menu-cards {
  display: flex;
  height: 100vh;
  gap: 8px;
  }

.menu-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 2em;
  overflow-y: scroll;
}

</style>
