<template>
  <el-menu
    default-active="0"
    class="el-menu-vertical-demo"
  >
    <el-menu-item :index="mIndex+''" v-for="(m, mIndex) in menus" :key="mIndex" @click="enterMenu(m)">
      <i class="el-icon-menu"></i>
      <span>{{m?.meta?.name}}</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { routes } from '@/router'
import { RouteRecordRaw } from 'vue-router'
export default defineComponent({
  setup(props) {
    let router = useRouter();
    let route = useRoute();

    let menus = routes
      .filter(r => r.path == '/'+route.fullPath.split('/')[1])
      .map(r => r.children)
      .flat()

    const enterMenu = (menu:RouteRecordRaw) => {
      router.push({ name: menu.name })
    }

    return { 
      menus, enterMenu
    }
  }
})
</script>

<style lang="less" scoped>

</style>