// stores/favorites.ts
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import type { Movie } from '~/types'
import { pick } from '~/types'

const movieKeys: (keyof Movie)[] = ['Title', 'Year', 'imdbID', 'Type', 'Poster']

export const useFavoritesStore = defineStore('favorites', () => {
  // State: An array of favorite movie IDs
  const favorites = ref<Movie[]>([])

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
  const addFavorite = (movie: Movie) => {
    if (!isFavorite(movie.imdbID)) {
      favorites.value.push(pick(movie, movieKeys))
    }
  }

  const removeFavorite = (movie: Movie) => {
    favorites.value = favorites.value.filter((m) => m.imdbID !== movie.imdbID)
  }

  const toggleFavorite = (movie: Movie) => {
    if (isFavorite(movie.imdbID)) {
      removeFavorite(movie)
    } else {
      addFavorite(movie)
    }
  }

  const isFavorite = (imdbID: string) =>
    favorites.value.some((movie) => movie.imdbID === imdbID)
  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
  }
})
