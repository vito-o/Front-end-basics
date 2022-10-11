

<template>
  <div>
    <draggable v-model="myArray" tag="transition-group" :component-data="{name:'fade'}" item-key="id">
      <template #item="{element}">
        <div class="item">{{element.name}}</div>
      </template>
      <template #footer>
        <button @click="addPeople">Add</button>
      </template>
    </draggable>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import draggable from "vuedraggable";

const myArray = ref([
  {id: '1', name: 'zhansan1'},
  {id: '2', name: 'zhansan2'},
  {id: '3', name: 'zhansan3'},
  {id: '4', name: 'zhansan4'},
])

const drag = ref  (false);

const addPeople = () => {
  console.log(123213)
}

</script>

<style scoped>
.item{
  border:1px solid;
  padding: 10px;
}
</style>
