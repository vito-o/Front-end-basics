<template>
  <header class="header-wrapper">
    <div class="sys-title" @click="gotoIndex">header</div>
    <div class="sys-logout" @click="sysLogout">系统退出</div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup(props) {
    const router = useRouter();

    //跳转到首页
    const gotoIndex = () => {
      router.push({ name: 'index' })
    }

    //系统退出
    const sysLogout = () => {
      router.push({ name: 'login' })
    }

    return {
      sysLogout, gotoIndex
    }
  }
})
</script>

<style lang="less" scoped>
.header-wrapper{
  height: 72px;
  padding: 0 30px;
  line-height: 72px;
  background-image: linear-gradient(143deg, #2945cb 20%, #2b83f9 81%, #3a9dff);
  color: #fff;

  .sys-title{
    float: left;
  }

  .sys-logout{
    float: right;
    cursor: pointer;
  }
}
</style>