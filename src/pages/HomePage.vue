<template>
  <div class="container">
    <h1 class="heading1 mb-6">Tasks</h1>
    <AddToDo />
    <ToDoList :todos="todos" class="mt-8" />
  </div>
</template>

<script setup lang="ts">
import ToDoList from '@/components/ToDoList.vue';
import { useStore } from '@/store';
import type { IToDo } from '@/types';
import { computed } from 'vue';
import AddToDo from '../components/AddToDo.vue';
const store = useStore();
const todos = computed((): IToDo[] => {
  return store.getters['incomoleteTodos'];
});
</script>

<style lang="postcss"></style>
