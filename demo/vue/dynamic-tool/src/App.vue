<template>
  <div id="app">
    <component class="remote-test" :is="mode"></component>
  </div>
</template>
<script>
import scriptLoad from './libs/scriptLoad'
export default {
  data() {
    return {
      mode: ''
    }
  },
  mounted() {
    this.mountCom('/rollup.js')
  },
  methods: {
    async mountCom(url) {
      await scriptLoad(url)
      console.log(window.MyComponent)
      this.mode = window.MyComponent.default
    }
  },
}
</script>
<style lang="less">

</style>
