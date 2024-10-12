import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movie', {
  state: () => ({
    searchTerm: '',
    movies: [],
  }),
  actions: {
    async fetchMovie(id: string) {
      const config = useRuntimeConfig()

      try {
        const response = await fetch(
          `http://www.omdbapi.com/?i=${encodeURIComponent(id)}&apikey=${config.public.omdbApiKey}`,
        )
        const data = await response.json()
        return data
      } catch (error) {
        console.error('Error fetching movie:', error)
      }
    },
    async fetchMovies(term: string) {
      const config = useRuntimeConfig()

      this.searchTerm = term
      // Persist search term to localStorage
      if (process.client) {
        localStorage.setItem('searchTerm', term)
      }

      try {
        const response = await fetch(
          `http://www.omdbapi.com/?s=${encodeURIComponent(term)}&apikey=${config.public.omdbApiKey}`,
        )
        const data = await response.json()
        if (data.Search) {
          this.movies = data.Search
        } else {
          this.movies = []
        }
      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    },
    loadSearchTermFromStorage() {
      if (process.client) {
        const term = localStorage.getItem('searchTerm')
        if (term) {
          this.searchTerm = term
        }
      }
    },
  },
})
