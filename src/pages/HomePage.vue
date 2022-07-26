<template>
  <div class="px-8 md:px-12 py-8 min-h-full h-full">
    <h1 class="text-xl font-bold text-sky-800 mb-6">Tasks</h1>
    <AddToDo />
    <ToDoList class="mt-8" />
  </div>
</template>

<script setup lang="ts">
import ToDoList from '@/components/ToDoList.vue';
import AddToDo from '../components/AddToDo.vue';
</script>

<style lang="postcss"></style>
