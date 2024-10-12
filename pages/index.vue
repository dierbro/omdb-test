<template>
  <div>
    <SearchBar @search="searchMovies" />
    <div v-if="store.loading">Loading...</div>
    <div v-else-if="store.error">
      <p>{{ store.error }}</p>
    </div>

    <div v-else-if="movies && movies.length">
      <h2>Results for "{{ store.searchTerm }}":</h2>
      <MoviesList :movies="movies" />
    </div>
    <div v-else-if="store.searchTerm">
      <p>No movies found for "{{ store.searchTerm }}".</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useMovieStore()

onMounted(() => {
  store.loadSearchTermFromStorage()
  if (store.searchTerm) {
    store.fetchMovies(store.searchTerm)
  }
})

const searchMovies = (searchTerm: string) => {
  if (searchTerm) {
    store.fetchMovies(searchTerm)
  }
}

const movies = computed(() => store.movies)
</script>
