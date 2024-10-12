<template>
  <div>
    <h1>Movie Details for ID: {{ data.imdbID }}</h1>
    <FavoriteIndicator :imdbID="data.imdbID" />
    <p>{{ data.Title }} -{{ data.Year }} - {{ data.Genre }}</p>
    <p>By {{ data.Director }}</p>
    <p>With {{ data.Actors }}</p>
    <img :src="data.Poster" alt="movie poster" />
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
</script>
