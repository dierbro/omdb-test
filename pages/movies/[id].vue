<template>
  <NuxtLink to="/">Back to Search Results</NuxtLink>
  <Loading v-if="pending" />
  <div v-if="data">
    <h1>Movie Details for ID: {{ data.imdbID }}</h1>
    <FavoriteIndicator :movie="data" />
    <p>{{ data.Title }} -{{ data.Year }} - {{ data.Genre }}</p>
    <p>By {{ data.Director }}</p>
    <p>With {{ data.Actors }}</p>
    <img :src="posterUrl" alt="movie poster" />
    <p>{{ data.Plot }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const imdbID = route.params.id

import { useFetch, useRuntimeConfig } from '#app'
const config = useRuntimeConfig()

const { data, pending, error, execute } = useFetch(
  () =>
    `http://www.omdbapi.com/?i=${imdbID}&apikey=${config.public.omdbApiKey}`,
)

const posterUrl = computed(() => {
  return data.Poster && data.Poster !== 'N/A'
    ? data.Poster
    : 'https://dummyimage.com/200x300'
})
</script>
