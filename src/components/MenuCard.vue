<script setup lang="ts">
const props = defineProps<{
  name: string
  options: Array<string>
  price: number
  image: string
}>()
</script>

<template>
  <div class="image-container">
    <div class="overlay-dark"></div>
    <div class="overlay-text">
      <p>{{ props.name }}</p>
      <p>{{ props.options }}</p>
      <p>{{ props.price }}</p>
    </div>
    <img :src="props.image" />
  </div>
</template>

<style scoped>
.image-container {
  cursor: pointer;
  position: relative;
  display: inline-block;
  width: 200px;
  height: 200px;
}

.image-container img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.overlay-text {
  position: absolute;
  top: 20%;
  left: 20%;
  transform: translate(-20%, -20%);
  color: white;
}

.overlay-dark {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* semi-transparent black */
}
</style>
