<template>
  <div>
    <h3>c组件：{{name}}, {{age}}</h3>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name: '',
      age: ''
    }
  },
  mounted() {
    this.__$event.$on('data-a', name => {
      this.name = name;
    })
    this.__$event.$on('data-b', age => {
      this.age = age;
    })
  },
}
</script>

<style>

</style>