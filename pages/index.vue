<template>
  <div>
    <input
      v-model.trim="searchTerm"
      type="text"
      placeholder="Enter movie title"
    />
    <button @click="searchMovie">Search</button>

    <div v-if="pending">Loading...</div>

    <div v-else-if="error">Error: {{ error.message }}</div>

    <MoviesList v-else-if="data.Search" :movies="data.Search" />
    <p v-else-if="data.Error">{{ data.Error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLazyFetch, useRuntimeConfig } from '#app'
const config = useRuntimeConfig()

const searchTerm = ref('')
const searchQuery = ref('')

const { data, pending, error, execute } = useLazyFetch(
  () => `http://www.omdbapi.com/${searchQuery.value}`,
)

const searchMovie = () => {
  const term = searchTerm.value
  if (term) {
    searchQuery.value = `?s=${encodeURIComponent(searchTerm.value)}&apikey=${config.public.omdbApiKey}`
    execute()
  }
}
</script>
