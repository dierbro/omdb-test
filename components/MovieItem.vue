<template>
  <div class="movie-item">
    <NuxtLink :to="`/movies/${movie.imdbID}`" class="movie-link">
      <img :src="posterUrl" alt="movie poster" class="poster-image" />
      <div class="movie-details">
        <h2 class="movie-title">{{ movie.Title }}</h2>
        <span class="movie-year">{{ movie.Year }}</span>
      </div>
    </NuxtLink>
    <FavoriteIndicator :movie="movie" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  movie: Movie
}>()

const posterUrl = computed(() => {
  return props.movie.Poster && props.movie.Poster !== 'N/A'
    ? props.movie.Poster
    : 'https://dummyimage.com/200x300'
})
</script>

<style scoped lang="postcss">
.movie-item {
  @apply flex items-center justify-between;
}

.movie-link {
  @apply flex items-center;
}

.poster-image {
  @apply object-contain w-32 h-32;
}

.movie-details {
  @apply ml-4;
}

.movie-title {
  @apply text-xl font-bold;
}

.movie-year {
  @apply text-gray-500;
}
</style>
