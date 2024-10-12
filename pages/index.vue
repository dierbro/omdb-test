<template>
  <div>
    <input v-model="term" placeholder="Search for movies..." />
    <button @click="searchMovies">Search</button>

    <div v-if="movies && movies.length">
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
const term = ref('')

onMounted(() => {
  store.loadSearchTermFromStorage()
  if (store.searchTerm) {
    term.value = store.searchTerm
    store.fetchMovies(store.searchTerm)
  }
})

const searchMovies = () => {
  if (term.value.trim()) {
    console.log('searching for:', term.value.trim())
    store.fetchMovies(term.value.trim())
  }
}

const movies = computed(() => store.movies)
</script>
