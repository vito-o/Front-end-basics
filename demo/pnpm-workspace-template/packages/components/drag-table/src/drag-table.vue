<template>
  <div class="el-drag-table">
    <table class="el-drag-table__inner">
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.key">{{ col.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in tableData"
          :key="getRowKey(item, index)"
          draggable="true"
          @dragstart="handleDragStart(index)"
          @dragover.prevent
          @drop="handleDrop(index)"
        >
          <td v-for="col in columns" :key="col.key">{{ item[col.key] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import type { Column } from './types'

export default defineComponent({
  name: 'ElDragTable',
  props: {
    columns: {
      type: Array as PropType<Column[]>,
      required: true
    },
    data: {
      type: Array as PropType<Record<string, any>[]>,
      required: true
    },
    rowKey: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const tableData = ref([...props.data])
    const draggedIndex = ref<number | null>(null)

    const getRowKey = (row: Record<string, any>, index: number) => {
      return props.rowKey ? row[props.rowKey] : index
    }

    const handleDragStart = (index: number) => {
      draggedIndex.value = index
    }

    const handleDrop = (index: number) => {
      if (draggedIndex.value === null) return
      
      const items = [...tableData.value]
      const draggedItem = items[draggedIndex.value]
      items.splice(draggedIndex.value, 1)
      items.splice(index, 0, draggedItem)
      
      tableData.value = items
    }

    return {
      tableData,
      getRowKey,
      handleDragStart,
      handleDrop
    }
  }
})
</script> 