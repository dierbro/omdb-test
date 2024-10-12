<template>
  <div class="container">
    <div class="header">
      <NuxtLink to="/">← Back to Search Results</NuxtLink>
      <div class="hint">Movie Details for ID: {{ imdbID }}</div>
    </div>
    <Loading v-if="pending" />
    <div v-if="data">
      <div class="title-container">
        <FavoriteIndicator :movie="data" />
        <div>
          <div class="title">
            {{ data.Title }} -{{ data.Year }} - {{ data.Genre }}
          </div>
          <div class="directors">By {{ data.Director }}</div>
          <div class="actors">With {{ data.Actors }}</div>
        </div>
      </div>
      <div class="plot-and-poster">
        <img :src="posterUrl" alt="movie poster" />
        <div class="plot">{{ data.Plot }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const imdbID = route.params.id

import { useFetch, useRuntimeConfig } from '#app'
const config = useRuntimeConfig()

const { data, pending, error } = useFetch(
  () =>
    `http://www.omdbapi.com/?i=${imdbID}&apikey=${config.public.omdbApiKey}`,
)

const posterUrl = computed(() => {
  return data.value && data.value.Poster && data.value.Poster !== 'N/A'
    ? data.value.Poster
    : 'https://dummyimage.com/200x300'
})
</script>

<style scoped>
.container {
  @apply flex flex-col min-w-full p-4;
}
.header {
  @apply flex flex-col md:flex-row justify-between min-w-full p-2;
}
.hint {
  @apply text-sm text-gray-500;
}
.title-container {
  @apply flex flex-row gap-x-4 p-2;
}
.title {
  @apply text-2xl font-bold;
}
.plot-and-poster {
  @apply flex flex-col md:flex-row gap-x-4 p-2;
}

.plot {
  @apply text-lg py-2;
}
</style>
