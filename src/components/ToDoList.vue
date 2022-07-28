<template>
  <ul>
    <li
      class="p-3 rounded-md shadow-sm shadow-gray-100 bg-white mb-4 flex items-center"
      v-for="todo in props.todos"
      :key="todo.id"
    >
      <input
        class="mr-4 -mb-1"
        type="checkbox"
        name="competed"
        :value="todo.isComplete"
        @change="setIsComplete(todo.id, todo.isComplete)"
      />
      <span>{{ todo.name }}</span>
      <span
        class="ml-auto"
        :class="[todo.isFavorite ? 'text-orange-500' : 'text-gray-300']"
      >
        <StarIcon />
      </span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { IToDo } from '@/types';
import StarIcon from '@/assets/icons/StarIcon.vue';
import { useStore } from '@/store';
const props = defineProps<{ todos: IToDo[] }>();
const store = useStore();

const setIsComplete = (id: number, isComplete: boolean) => {
  store.dispatch('setIsComplete', { id, isComplete: !isComplete });
};
</script>
