<template>
    <div>temp</div>
</template>

<script >
import { ref } from 'vue'
export default {
  // props: ['msg'],
  setup(props, context) {
    /**
     * 在setup内部，this不是该活跃实例的引用，因为setup()是
     * 在解析其组件选项之前被调用的，所以setup内部的this的行为
     * 与其他选项中的this完全不同。
     * 
     * 这使得setup（）在和其他选项式api一起使用时可能会导致混淆
     * 
     * //-----------------------------------------------
     * 
     * 因为setup是围绕beforeCreate和created生命周期钩子运行的
     * 所以不需要显示地dinginess他们。换句话说，在这些钩子中编写
     * 的代码都应该直接在setup 函数中编写
     * 
     */

    return {}
  },
}

</script>

<style scoped>

</style>
