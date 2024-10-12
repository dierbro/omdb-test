import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movie', {
  state: () => ({
    searchTerm: '',
    movies: [],
    loading: false,
    error: '',
  }),
  actions: {
    async fetchMovies(term: string) {
      const config = useRuntimeConfig()

      this.searchTerm = term
      // Persist search term to localStorage
      if (process.client) {
        localStorage.setItem('searchTerm', term)
      }
      this.loading = true
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
        this.error = `Error fetching movies: ${error}`
      }
      this.loading = false
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
