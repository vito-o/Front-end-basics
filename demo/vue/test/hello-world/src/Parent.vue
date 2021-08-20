<template>
  <div class="home" @click="test()">
    <Child :title="title_d" @updateXXX="updateX"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Child from './Child.vue'

export default {
  components: {
    Child
  },
  data(){
    return {
      title_d: 'xxx'
    }
  },
  methods: {
    test(){
      this.title_d = 'lisi'
    },
    updateX(a){
      // console.log(a, 'parent.vue')
      // this.title_d = a;
      // this.$emit('updateXXX', a)
    }
  },
}
</script>