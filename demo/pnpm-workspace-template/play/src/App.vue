<template>
  <div class="container">
    <h1>Drag Table Plus</h1>
    <el-drag-table :columns="columns" :data="data" />
  </div>
</template>

<script setup lang="ts">
import { ElDragTable } from '@cursor/components'
import '@cursor/theme-chalk/src/drag-table.scss'

const columns = [
  { key: 'name', title: '姓名' },
  { key: 'age', title: '年龄' },
  { key: 'city', title: '城市' }
]

const data = [
  { name: '张三', age: 25, city: '北京' },
  { name: '李四', age: 30, city: '上海' },
  { name: '王五', age: 28, city: '广州' }
]
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
  color: #1a1a1a;
}
</style> 