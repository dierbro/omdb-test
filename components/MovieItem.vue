<template>
  <li>
    <NuxtLink :to="`/movies/${movie.imdbID}`">
      <h2>{{ movie.Title }}</h2>
      <span>{{ movie.Year }}</span>
      <img :src="movie.Poster" alt="movie poster" />
    </NuxtLink>

    <FavoriteIndicator :imdbID="movie.imdbID" />
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  movie: Movie
}>()
</script>
