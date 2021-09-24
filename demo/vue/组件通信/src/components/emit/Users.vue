<template>
  <div>
    <h1 @click="changeTitle">{{title}}</h1>
  </div>
</template>

<script>
export default {
  data(){ 
    return {
      title: 'vue.js demo'
    }
  },
  methods: {
    changeTitle(){ 
      this.$emit('titleChanged', '子向父组件传值');
    }
  },
}
</script>

<style>

</style>