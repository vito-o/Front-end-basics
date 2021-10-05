<template>
  <h1 :style="{color: titleInfo.color }">{{titleInfo.value}}</h1>
  <div>{{counter}}</div>
  <div v-for="(item, index) in items" :key="item.id">{{item.title}}</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    titleInfo: {
      type: Object as PropType<TitleInfo>,
      required: true
    }
  },
  data(){
    return {
      counter: 0,

      items: [] as Todo[]
    }
  },
  created(){
    this.items.push({
      id: this.items.length + 1,
      title: 'todo',
      completed: false
    })
  }
})
</script>

<style>

</style>