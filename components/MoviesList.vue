<template>
  <ul v-if="movies">
    <MovieItem v-for="item in movies" :key="item.imdbID" :movie="item" />
  </ul>
</template>

<script setup lang="ts">
const props = defineProps<{
  movies: Movie[]
}>()
</script>
