<template>
  <div class="editor" id="editor">
    <Shape 
      :defaultStyle="item.style"
      v-for="(item, index) in componentData"
      :index="index"
      :key="item.id"
    >
      <component
        v-if="item.component != 'v-text'"
        class="component"
        :is="item.component"
        :propValue="item.propValue"
        :element="item"
        :id="'component' + item.id"
      />

      <component
        v-else
        class="component"
        :is="item.component"
        :propValue="item.propValue"
        @input="handleInput"
        :element="item"
        :id="'component' + item.id"
      />
    </Shape>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Shape from './Shape.vue'
export default {
  components: {
    Shape
  },
  computed: mapState([
    'componentData'
  ])
}
</script>

<style lang="less" scoped>
.editor {
    position: relative;
    background: #fff;
    margin: auto;
}
</style>