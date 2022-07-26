<template>
  <header class="bg-blue-500 text-white">
    <RouterLink class="tab-link" to="/">ToDo</RouterLink>
    <RouterLink class="tab-link" to="/completed">Completed</RouterLink>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped lang="postcss">
.tab-link {
  @apply p-3 inline-block bg-sky-600 border-blue-400 border hover:bg-blue-400 transition-colors duration-300 font-bold text-xl;
}
</style>
