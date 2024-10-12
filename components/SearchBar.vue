<template>
  <div>
    <input v-model.trim="term" placeholder="Search for movies..." />
    <button @click="onSearchClick">Search</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineEmits } from 'vue'

const emits = defineEmits(['search'])

const term = ref('')

const onSearchClick = () => {
  emits('search', term.value)
}
</script>
