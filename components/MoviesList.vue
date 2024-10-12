<template>
  <ul v-if="movies">
    <li v-for="item in movies" :key="item.imdbID">
      <MovieItem :movie="item" />
    </li>
  </ul>
</template>
<script setup lang="ts">
const props = defineProps<{
  movies: Movie[]
}>()
</script>

<style scoped>
li {
  @apply border-b px-4 py-2;
}

li:last-child {
  @apply border-0;
}
</style>
