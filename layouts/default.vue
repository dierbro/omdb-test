<template>
  <div class="container">
    <Header class="header" />
    <MainContentArea class="main-content">
      <NuxtPage />
    </MainContentArea>
    <Footer class="footer" />
  </div>
</template>

<style scoped>
.container {
  @apply min-h-screen flex flex-col;
}

.header,
.footer {
  @apply h-[50px] w-full flex-shrink-0;
}

.main-content {
  @apply flex-grow w-full;
}
</style>
