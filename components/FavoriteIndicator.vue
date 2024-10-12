<template>
  <div @click="toggleFavorite">{{ isFavorite ? '❤️' : '🤍' }}</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useFavoritesStore } from '@/stores/favorites' // Adjust the import path as needed

const props = defineProps<{
  movie: Movie
}>()

const favoritesStore = useFavoritesStore()

const isFavorite = computed(() => favoritesStore.isFavorite(props.movie.imdbID))

const toggleFavorite = () => {
  favoritesStore.toggleFavorite(props.movie)
}
</script>
