<script setup lang="ts">
import { ref } from "vue";

const renders = [1, 2, 3, 4, 5, 6, 7];
const props = defineProps(["gif-list"]);
const link = ref("");
const handleSubmit = async () => {
  if (link.value.length > 0) {
    console.log("Gif link:", link.value);
  } else {
    console.log("Empty input. Try again.");
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit()">
    <input
      v-model="link"
      type="text"
      placeholder="Enter gif link!"
      class="link-input"
    />
    <button type="submit" class="submit-gif-button">Submit</button>
  </form>

  <section class="grid">
    <img
      v-for="elem in renders"
      src="https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=200"
      alt=""
    />
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
</style>
