<template>
  <li>
    <h2>{{ movie.Title }}</h2>
    <span>{{ movie.Year }}</span>
    <img :src="movie.Poster" alt="movie poster" />
    <div @click="toggleFavorite">{{ isFavorite() ? '❤️' : '🤍' }}</div>
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  movie: Movie
}>()

const favoritesStore = useFavoritesStore()
const toggleFavorite = () => {
  favoritesStore.toggleFavorite(props.movie.imdbID)
}

const isFavorite = () => {
  return favoritesStore.isFavorite(props.movie.imdbID)
}
</script>
