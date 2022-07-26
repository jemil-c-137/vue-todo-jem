<template>
  <ul>
    <li
      class="p-3 rounded-md shadow-sm shadow-gray-100 bg-white mb-4 flex items-center"
      v-for="todo in todos"
      :key="todo.id"
    >
      <input class="mr-4 -mb-1" type="checkbox" name="competed" v-model="todo.isComplete" />
      <span>{{ todo.name }}</span>
      <span class="ml-auto" :class="[todo.isFavorite ? 'text-orange-500' : 'text-gray-300']">
        <StarIcon />
      </span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useStore } from '@/store';
import { computed } from 'vue';
import type { IToDo } from '@/types';
import StarIcon from '@/assets/icons/StarIcon.vue';
const store = useStore();
const todos = computed((): IToDo[] => {
  return store.getters['allToDos'];
});
</script>
