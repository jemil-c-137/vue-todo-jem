<template>
  <form @submit.prevent="submitHandler" class="flex shadow-xl shadow-black-200 text-sky-800">
    <input
      class="p-3 w-full outline-none rounded-l-md transition-shadow duration-150 focus:shadow-sky-300 focus:shadow-lg"
      type="text"
      placeholder="Add a task"
      v-model="inputValue"
    />
    <button
      :disabled="disabled"
      class="bg-white p-3 border-l text-b rounded-r-md hover:bg-gray-50 duration-150 active:bg-gray-50 disabled:bg-gray-300 disabled:text-gray-100"
      type="submit"
    >
      Add
    </button>
  </form>
</template>

<script setup lang="ts">
import { useStore } from '@/store';
import { ref, computed } from 'vue';

const store = useStore();
const inputValue = ref<string>('');

const disabled = computed(() => {
  return inputValue.value.length === 0;
});

const submitHandler = () => {
  store.dispatch('addTask', { name: inputValue.value });
  inputValue.value = '';
};
</script>
