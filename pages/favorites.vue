<template>
  <div>
    <MoviesList
      v-if="favoritesStore.favorites.length"
      :movies="favoritesStore.favorites"
    />
    <div v-else>
      <p>No favorites yet.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFavoritesStore } from '@/stores/favorites' // Adjust the import path as needed
const favoritesStore = useFavoritesStore()
</script>
