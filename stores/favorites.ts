// stores/favorites.ts
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useFavoritesStore = defineStore('favorites', () => {
  // State: An array of favorite movie IDs
  const favorites = ref<string[]>([])

  // Load favorites from localStorage on initialization
  if (import.meta.client) {
    const storedFavorites = localStorage.getItem('favorites')
    if (storedFavorites) {
      favorites.value = JSON.parse(storedFavorites)
    }

    // Watch for changes and update localStorage
    watch(
      favorites,
      (newFavorites) => {
        localStorage.setItem('favorites', JSON.stringify(newFavorites))
      },
      { deep: true },
    )
  }

  // Actions
  const addFavorite = (imdbID: string) => {
    if (!favorites.value.includes(imdbID)) {
      favorites.value.push(imdbID)
    }
  }

  const removeFavorite = (imdbID: string) => {
    favorites.value = favorites.value.filter((id) => id !== imdbID)
  }

  const toggleFavorite = (imdbID: string) => {
    if (favorites.value.includes(imdbID)) {
      removeFavorite(imdbID)
    } else {
      addFavorite(imdbID)
    }
  }

  const isFavorite = (imdbID: string) => favorites.value.includes(imdbID)
  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
  }
})
