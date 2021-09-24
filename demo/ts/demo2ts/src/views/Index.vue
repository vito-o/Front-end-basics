<template>
  <Header />
  <div class="module-wrapper">
    <ul class="module-list">
      <li class="module-item" v-for="(module, mIndex) in modules" :key="mIndex" @click="enterModule(module)">{{module.name}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Header from '@/views/layout/Header.vue'
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup(props) {
    const router = useRouter()
    
    interface moduleIntf {
      name: string
      path: string
    }

    let modules = reactive<moduleIntf[]>([
      { name: '数据资源', path: 'zy' },
      { name: '数据治理', path: 'zl' },
      { name: '数据资产', path: 'zc' },
      { name: '数据服务', path: 'fw' },
    ])

    const enterModule = (module:moduleIntf) => {
      router.push({ name: module.path })
    }

    return {
      modules, enterModule, Header
    }
  },
  components: {
    Header
  }
})
</script>

<style lang="less" scoped>
.module-item{
  cursor: pointer;
  float: left;
  margin-right: 10px;
  list-style: none;
}
</style>