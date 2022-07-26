import { createStore, Store, useStore as baseUseStore } from 'vuex';
import type { InjectionKey } from 'vue';
import type { IToDo } from '@/types';
import type { MutationTree } from 'vuex';

export interface State {
  todos: IToDo[];
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    todos: [
      { name: 'Learn Vue js', id: 1, isComplete: false, isFavorite: false },
      { name: 'Learn PHP', id: 2, isComplete: false, isFavorite: false },
      { name: 'Learn MySQL', id: 3, isComplete: false, isFavorite: true },
      { name: 'Create ToDo App', id: 4, isComplete: true, isFavorite: true },
    ],
  },
  getters: {
    allToDos(state) {
      return state.todos;
    },
    doneToDos(state) {
      return state.todos.filter((todo) => todo.isComplete);
    },
    favoriteToDos(state) {
      return state.todos.filter((todo) => todo.isFavorite);
    },
  },
  mutations: {
    addToDo(state, payload) {
      state.todos.push(payload);
    },
  },
  actions: {
    addTask({ commit }, payload) {
      console.log(payload, 'actions');
      const todo: IToDo = {
        ...payload,
        id: Date.now(),
        isFavorite: false,
        isComplete: false,
      };
      commit('addToDo', payload);
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
