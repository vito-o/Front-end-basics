<template>
  <Header />
  <div class="layout-wrapper">
    <div class="aside-wrap">
      <Aside />
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/views/layout/Header.vue'
import Aside from '@/views/layout/Aside.vue'
export default defineComponent({
  setup(props) {
    
  },
  components: {
    Header, Aside
  }
})
</script>

<style lang="less" scoped>
.layout-wrapper{
  position: absolute;
  top: 72px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f6f6f6;

  .aside-wrap{
    float: left;
    width: 230px;
    height: 100%;
    margin-right: 12px;
    background: #fff;
  }

  .container{
    margin: 10px 10px 0 0;
    //height: calc(100% - 10px);
    overflow-x: hidden;
    overflow-y: auto;
    padding: 15px;
    background: #fff;
  }
}
</style>