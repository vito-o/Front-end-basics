<template>
  <div>
    <p>childCom2</p>
    <p>boo: {{ boo }}</p>
    <p @click="cl">childCom2的$attrs: {{$attrs}}</p>
    <hr>
    <childCom3 v-bind="$attrs" v-on="$listeners"/>
  </div>
</template>

<script>
import childCom3 from './childCom3'
export default {
  components: {
    childCom3
  },
  props: {
    boo: String
  },
  //inheritAttrs: false, 
  created(){
    console.log(this.$attrs)
  },
  methods: {
    cl(){
      this.$emit('event1', 'e1')
    }
  },
}
</script>

<style>

</style>