<template>
  <h1 :style="{ color: titleInfo.color }">{{ titleInfo.value }}</h1>
  <div @click="store.commit('add')">{{ counter }}</div>
  <div>{{ doubleCounter }}</div>

  <input type="text" v-model="todoName" @keydown.enter="addTodo(newTodo(todoName))" />

  <div v-for="(item, index) in items" :key="item.id">{{ item.title }}</div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { PropType } from 'vue'
import type { TitleInfo, Todo } from '../types'
import { useStore } from 'vuex'
import { key } from '../store'

const props = defineProps({
  titleInfo: {
    type: Object as PropType<TitleInfo>,
    required: true
  }
})

let store = useStore(key);

const counter = computed(():number => {
  return store.state.counter
});
const doubleCounter = computed(():number => {
  return store.state.counter * 2;
});

const todoName = ref('');
const items = computed(() => store.state.todos?.todos);

store.dispatch('todos/initTodo');

const newTodo = (todoName: string): Todo => {
  return {
    id: items.value!.length + 1,
    title: todoName,
    completed: false
  }
};

const addTodo = (item: Todo): void => {
  items.value!.push(item);
  todoName.value = '';
}
</script>

<style>
</style>