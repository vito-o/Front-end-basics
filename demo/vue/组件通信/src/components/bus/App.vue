<template>
  <div id="app">
    <ToolA />
    <ToolB />
    <ToolC />
  </div>
</template>
<script>
import ToolA from "./components/bus/ToolA"
import ToolB from "./components/bus/ToolB"
import ToolC from "./components/bus/ToolC"
export default {
  components: {
    ToolA,ToolB,ToolC,
  },
  data(){ 
    return {}
  },
  methods: {
  },
}
</script>
<style lang="less">

</style>
