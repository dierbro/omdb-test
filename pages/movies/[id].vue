<template>
  <div>
    <h1>Movie Details for ID: {{ movieId }}</h1>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const movieId = route.params.id
</script>
