<template>
<div v-my-directive="'hello'">
  <!-- <HelloWorld :msg="msg" /> -->
  <!-- <button @click="cli">{{msg}}</button> -->
  <!-- <Test1 :msg="msg" @cc="cc">
    <div>hah</div>
  </Test1>

  <Test2 :msg="msg"/>
  <Test3 :msg="msg"/> -->
  <!-- <Test4 :msg="msg" ref="test4"/> -->

  <!-- <MyMap /> -->
  <!-- <Aref /> -->
  <!-- <vfor /> -->
  <!-- <Awatch/> -->
  <!-- <Dtest /> -->
  <!-- <div>{{author}}-{{title}}</div> -->
  <Dwatch/>
</div>
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
// import Test1 from './components/Test1.vue'
// import Test2 from './components/Test2.vue'
// import Test3 from './components/Test3.vue'
// import Test4 from './components/Test4.vue'
// import MyMap from './views/provide/MyMap.vue'
// import Aref from './views/ref/index.vue'
// import vfor from './views/ref/v-for/index.vue'
// import Awatch from './views/ref/watch/index.vue'
// import Dtest from './views/directive/index.vue'
// import { inject, ref, reactive, toRefs, readonly } from 'vue'
import Dwatch from './views/watch/index.vue'
export default {
  components: { 
    // HelloWorld, 
    // Test1, 
    // Test2,
    // Test3,
    // Test4,
    // MyMap
    // Aref
    // vfor
    // Awatch
    // Dtest,
    Dwatch
  },
  // data() {
  //   return {
  //     msg: 'vite + vue',
  //   }
  // },
  mounted() {
    // console.log(this.$translate)

    /* console.log(
      this.$translate('greetings.hello')
    ) */
    // this.cli();
  },
  methods: {
    // cli() {
    //   this.msg = Math.random() * 10;

    //   console.log(this.$refs.test4)
    // },
    // cc(a) {
    //   console.log(a, 'a')
    // }
  },
}
</script>

<style scoped>

</style>
