<template>
  <div class="test-wrap">
    <h1>component test</h1>
    <hr>
    <p>this is a component of test</p>
  </div>  
</template>

<script>
export default {
  methods: {
    cClick() {
      console.log('test component!')
    }
  },
}
</script>

<style>
.test-wrap{
  border: solid 1px salmon;
  padding: 10px;
}
</style>