<template>
  <div ref="root">this is a root element</div>
</template>

<script>
import { ref, watchEffect } from 'vue'
export default {
    setup() {
        const root = ref(null)

        watchEffect(() => {
            //这个副作用再DOM更新之前运行，模板引用还没有持有
            //对元素的引用
            console.log(root.value)
        }, {
            flush: 'post'
        })
            //使用模板引用的侦听器应该用flush: 'post'选项来定义，
            //浙江再DOM更新后运行副作用，确保模板引用与DOM保持同步
            //并引用正确的元素。
        return {
            root
        }
    }
}
</script>

<style>

</style>