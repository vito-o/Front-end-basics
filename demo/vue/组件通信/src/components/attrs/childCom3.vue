<template>
  <div>
    <p>childCom3</p>
    <p>coo: {{ coo }}</p>
    <p @click="test">childCom3的$attrs: {{$attrs}}</p>
    <hr>
  </div>
</template>

<script>
export default {
  props: {
    coo: String
  },
  methods: {
    test(){
      this.$emit('event2', 123)
    }
  },
}
</script>

<style>

</style>