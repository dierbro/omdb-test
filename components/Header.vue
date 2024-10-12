<template>
  <header>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/favorites">Favorites</NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  @apply bg-gray-800 text-white p-4;
}
nav {
  @apply flex justify-end space-x-4;
}

.router-link-exact-active {
  @apply underline text-lime-400;
}
</style>
