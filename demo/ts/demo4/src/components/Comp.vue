<template>
  <h1 :style="{ color: titleInfo.color }">{{ titleInfo.value }}</h1>
  <div @click="$store.commit('add')">{{ $store.state.counter }}</div>
  <div>{{ doubleCounter }}</div>

  <input type="text" v-model="todoName" @keydown.enter="addTodo(newTodo(todoName))" />

  <div v-for="(item, index) in items" :key="item.id">{{ item.title }}</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TitleInfo, Todo } from '../types'

export default defineComponent({
  props: {
    titleInfo: {
      type: Object as PropType<TitleInfo>,
      required: true
    }
  },
  data() {
    return {
      items: [] as Todo[],

      todoName: '',
    }
  },
  created() {
    this.items.push({
      id: this.items.length + 1,
      title: 'todo',
      completed: false
    })
  },
  computed: {
    doubleCounter(): number {
      return this.$store.state.counter * 2;
    }
  },
  methods: {
    newTodo(todoName: string): Todo{
      return {
        id: this.items.length + 1,
        title: todoName,
        completed: false
      }
    },  
    addTodo(item: Todo): void{
      this.items.push(item);
      this.todoName = ''
    }
  }
})
</script>

<style>
</style>