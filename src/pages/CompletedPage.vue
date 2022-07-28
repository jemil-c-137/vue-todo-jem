<template>
  <div class="container">
    <h1 class="heading1 mb-6">Completed Tasks</h1>
    <ToDoList :todos="todos" />
  </div>
</template>

<script lang="ts" setup>
import ToDoList from '@/components/ToDoList.vue';
import { useStore } from '@/store';
import type { IToDo } from '@/types';
import { computed } from 'vue';

const store = useStore();
const todos = computed((): IToDo[] => {
  return store.getters['doneToDos'];
});
</script>
