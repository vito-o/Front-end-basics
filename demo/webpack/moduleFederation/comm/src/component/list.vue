<template>
  <div class="ul">
    <div>---------------------module federation------------------------</div>
    <div class="item" v-for="(item, idx) in list" :key="idx">{{ item }}</div>
    <div>------------------------------------------------------------------</div>
  </div>
</template>
​
<script>
export default {
  name: "list",
  data() {
    return {
      list: [1,2,3,5]
    }
  }
}
</script>
​
<style scoped>
</style>