<template>
  <div id="app">
    <Parent @updateXXX="updateX"/>
  </div>
</template>
<script>
// @ is an alias to /src
import Parent from './Parent.vue'

export default {
  components: {
    Parent
  },
  methods: {
     updateX(a){
      console.log(a, 'app.vue')
    }
  },
}
</script>
<style lang="less">

</style>
