<template>
  <form class="search-container" @submit.prevent="onSearchClick">
    <input v-model.trim="term" placeholder="Search for movies..." />
    <button @click="onSearchClick"><span>Search</span> 🔎</button>
  </form>
</template>

<script setup lang="ts">
import { ref, watch, defineEmits } from 'vue'

const emits = defineEmits(['search'])

const term = ref('')

const onSearchClick = () => {
  emits('search', term.value)
}
</script>

<style scoped>
.search-container {
  @apply flex w-full gap-x-2 text-xl;
}

.search-container input {
  @apply flex-grow border rounded p-2;
}

.search-container button {
  @apply font-bold border rounded p-2 bg-lime-400;
}

button span {
  @apply hidden md:inline;
}
</style>
