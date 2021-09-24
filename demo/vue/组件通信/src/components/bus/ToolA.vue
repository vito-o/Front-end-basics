<template>
  <div>
    <h3>A组件：{{name}}</h3>
    <button @click="send">将数据发送到c组件</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name: 'tom'
    }
  },
  methods: {
    send(){
      this.__$event.$emit('data-a', this.name)
    }
  },
}
</script>

<style>

</style>