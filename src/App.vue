<template>
  <main class="min-h-screen bg-gray-200">
    <HeaderComponent />
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderComponent from '@/components/HeaderComponent.vue';
</script>

<style></style>
