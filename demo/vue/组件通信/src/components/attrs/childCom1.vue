<template>
  <div>
    <p>childCom1</p>
    <p>foo: {{ foo }}</p>
    <p>childCom1的$attrs: {{$attrs}}</p>
    <hr>
    <childCom2 v-bind="$attrs" @event1="goEvent1" @event2="goEvent2"/>
  </div>
</template>

<script>
import childCom2 from './childCom2'
export default {
  components: {
    childCom2
  },
  props: {
    foo: String
  },
  //inheritAttrs: false, 
  created(){
    console.log(this.$attrs)
  },
  methods: {
    goEvent1(a){
      console.log('goEvent1', a)
    },
    goEvent2(a){
      console.log('goEvent2', a)
    },
  },
}
</script>

<style>

</style>