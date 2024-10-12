<template>
  <li>
    <h2>{{ movie.Title }}</h2>
    <span>{{ movie.Year }}</span>
    <img :src="movie.Poster" alt="movie poster" />
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  movie: Movie
}>()
</script>
