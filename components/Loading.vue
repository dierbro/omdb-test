<template>
  <div class="loading-screen">
    <span class="loading-text">Loading...</span>
  </div>
</template>

<script setup>
// No script content needed for this simple component
</script>

<style scoped>
.loading-screen {
  @apply flex items-center justify-center h-screen;
}

.loading-text {
  @apply text-3xl font-bold;
}
</style>
