<template>
  <div>
    <h2>index</h2>
    <childCom1 :foo="foo" :boo="boo" :coo="coo" :doo="doo"/>
  </div>
</template>

<script>
import childCom1 from './childCom1'
export default {
  components: { childCom1 },
  data() {
    return {
      foo: "Javascript",
      boo: "Html",
      coo: "CSS",
      doo: "Vue"
    };
  }
}
</script>

<style>

</style>