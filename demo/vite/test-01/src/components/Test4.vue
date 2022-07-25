<template>
    <div>temp</div>
</template>

<script >
import { h, ref, onMounted } from 'vue'
/**
 * expose
 * 
 * expose用于定义一些公开属性，可以在父组件中通过refs调用
 * 一旦在组件中使用expose定义公开属性，则组件内的其他属性就
 * 不能被父组件通过refs调用
 * 
 */
export default {
  // props: ['msg'],
  setup(props, { expose }) {

    const count = ref(0)
    const increment = () => ++count.value

    expose({
      increment
    })

    const add = () => {
      console.log('hello~~')
    }

    onMounted(() => {
      console.log('test4 ...')
    })

    return () => h('div', count.value)
    // return {
    //   count, add
    // }
  },
}

</script>

<style scoped>

</style>
