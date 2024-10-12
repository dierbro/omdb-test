<template>
  <div class="container">
    <SearchBar @search="searchMovies" />
    <Loading v-if="store.loading" />
    <div v-else-if="store.error">
      <p>{{ store.error }}</p>
    </div>

    <div v-else-if="movies && movies.length">
      <p class="result-label">Results for "{{ store.searchTerm }}":</p>
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

<style scoped>
.container {
  @apply p-2 min-w-full;
}

.result-label {
  @apply text-lg font-bold py-2;
}
</style>
